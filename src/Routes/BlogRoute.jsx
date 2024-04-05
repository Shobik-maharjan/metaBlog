import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import SinglePage from "../pages/singlePage/SinglePage";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/Blog/Blog";
import Page from "../pages/pages/Page";
import PageNotFound from "../pages/notFound/PageNotFound";

const BlogRoute = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="single-post/:blog_id" element={<SinglePage />} />
        <Route path="pages" element={<Page />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default BlogRoute;
