import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Content = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="heading p-2">
          <div className="badge">
            <p className="text-blue-700 rounded-md text-sm p-2 bg-blue-50 w-fit">
              Technology
            </p>
          </div>
          <h2 className="text-xl font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
        </div>
        <div className="short-info flex justify-between">
          <div className="author flex items-center gap-2">
            <div className="author-image">
              <FaUserCircle />
            </div>
            <div className="author-name">Author</div>
          </div>
          <div className="date px-2">{`${month} ${day}, ${year}`}</div>
        </div>
      </div>
    </>
  );
};

export default Content;
