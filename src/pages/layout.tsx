import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/global/header";
import Footer from "../components/global/footer";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
