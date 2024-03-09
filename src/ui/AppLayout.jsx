import { Outlet } from "react-router";
import Headroom from "react-headroom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

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
