import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Author = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  return (
    <div className="short-info flex justify-between">
      <div className="author flex items-center gap-2">
        <div className="author-image">
          <FaUserCircle />
        </div>
        <div className="author-name">Author</div>
      </div>
      <div className="date px-2">{`${month} ${day}, ${year}`}</div>
    </div>
  );
};

export default Author;
