import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserLayout from "../layout/UserLayout";
import BlogRoute from "./BlogRoute";
import ScrollToTop from "../components/ScrollToTop";

const MainRoute = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<UserLayout />}>
            <Route path="*" element={<BlogRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoute;
