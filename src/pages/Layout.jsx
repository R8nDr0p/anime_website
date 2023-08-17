import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../context/context";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </SearchProvider>
    </>
  );
}

export default Layout;
