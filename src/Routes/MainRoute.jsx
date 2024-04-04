import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserLayout from "../layout/UserLayout";
import BlogRoute from "./BlogRoute";

const MainRoute = () => {
  return (
    <>
      <BrowserRouter>
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
