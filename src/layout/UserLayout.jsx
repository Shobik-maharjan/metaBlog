import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
