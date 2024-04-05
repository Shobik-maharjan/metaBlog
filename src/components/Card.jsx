import React from "react";
import Content from "./Content";
import Author from "./Author";
import { Link } from "react-router-dom";

const Card = ({ id }) => {
  console.log("🚀 ~ Card ~ id:", id);
  return (
    <>
      <div className="card border rounded-md p-2">
        <div className=" hover:cursor-pointer">
          <Link to={`/single-post/${id}`}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s"
              alt=""
              className="w-full rounded-md hover:opacity-80"
            />
            <Content />
          </Link>
        </div>
        <Author />
      </div>
    </>
  );
};

export default Card;
