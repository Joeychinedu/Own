import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Music from "./pages/Music";
import Lifestyle from "./pages/Lifestyle";
import Film from "./pages/Film";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="music" element={<Music />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="film" element={<Film />} />
          <Route path="art" element={<Art />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
