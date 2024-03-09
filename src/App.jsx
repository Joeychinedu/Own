import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gk from "./pages/lifestyle/Gk";
import EnhanceCreativity from "./pages/lifestyle/EnhanceCreativity";
import Film from "./pages/film/Film";
import Nollywood from "./pages/film/Nollywood";
import Cinematic1 from "./pages/film/Cinematic1";
import Cinematic2 from "./pages/film/Cinematic2";
import Art from "./pages/art/Art";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import StreetMusic from "./pages/music/StreetMusic";
import WickedArt from "./pages/music/WickedArt";
import Rapisntdead from "./pages/music/Rapisntdead";
import StanCulture from "./pages/music/StanCulture";
import Alte101 from "./pages/music/Alte101";
import Lifestyle from "./pages/lifestyle/Lifestyle";
import Music from "./pages/music/Music";
import KingOfMelody from "./pages/music/KingOfMelody";
import CapitalCity from "./pages/music/CapitalCity";
import CoverArts from "./pages/art/CoverArts";
import Tiktok from "./pages/music/Tiktok";
import Misogyny from "./pages/music/Misogyny";
import SoundsMan from "./pages/music/SoundsMan";
import AceOfSpades from "./pages/books/AceOfSpades";
import Books from "./pages/books/Books";
import Login from "./pages/Login";
import Search from "./pages/Search";
import ReadBooks from "./pages/books/ReadBooks";
import ConvoWithAdeArt from "./pages/art/ConvoWithAdeart";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />

            {/* Music */}
            <Route path="music" element={<Music />} />
            <Route path="music/streetmij" element={<StreetMusic />} />
            <Route path="music/wickedart" element={<WickedArt />} />
            <Route path="music/rapisntdead" element={<Rapisntdead />} />
            <Route path="music/stanculture" element={<StanCulture />} />
            <Route path="music/alte101" element={<Alte101 />} />
            <Route path="music/tiktok" element={<Tiktok />} />
            <Route path="music/misogyny" element={<Misogyny />} />
            <Route path="music/soundman" element={<SoundsMan />} />
            <Route path="music/capitalcity" element={<CapitalCity />} />
            <Route path="music/kingofmelody" element={<KingOfMelody />} />

            {/* Lifestyle */}
            <Route path="lifestyle" element={<Lifestyle />} />
            <Route path="lifestyle/gk" element={<Gk />} />
            <Route
              path="lifestyle/enhancecreativity"
              element={<EnhanceCreativity />}
            />

            {/* Film */}
            <Route path="film" element={<Film />} />
            <Route path="film/nollywood" element={<Nollywood />} />
            <Route path="film/cinematic1" element={<Cinematic1 />} />
            <Route path="film/cinematic2" element={<Cinematic2 />} />

            {/* Art */}
            <Route path="art" element={<Art />} />
            <Route path="art/coverarts" element={<CoverArts />} />
            <Route path="art/convowithadeart" element={<ConvoWithAdeArt />} />

            {/* Books */}
            <Route path="books" element={<Books />} />
            <Route path="books/booksyoushouldread" element={<ReadBooks />} />
            <Route path="books/aceofspades" element={<AceOfSpades />} />

            <Route path="support" element={<Contact />} />
            <Route path="help" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
