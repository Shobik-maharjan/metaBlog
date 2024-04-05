import React, { useState } from "react";
import Card from "../../components/Card";

const Blog = () => {
  const [blogsToShow, setBlogsToShow] = useState(6);

  let cardArr = [];
  for (let i = 0; i < Math.min(blogsToShow, 20); i++) {
    cardArr.push(<Card key={i} id={i + 1} />);
  }

  const handleLoadMore = () => {
    setBlogsToShow(blogsToShow + 6);
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="font-bold">All Blogs</h2>
        <div className="grid grid-cols-3 gap-4">{cardArr}</div>
        {blogsToShow < 20 && (
          <button
            onClick={handleLoadMore}
            className="border-2 px-5 py-3 w-fit mx-auto flex mt-10 hover:bg-slate-100"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Blog;
