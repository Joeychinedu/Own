import { Outlet } from "react-router";
import Headroom from "react-headroom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div>
      <Headroom disableInlineStyles>
        <Header />
      </Headroom>
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
