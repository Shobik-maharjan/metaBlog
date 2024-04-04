import React from "react";
import Content from "./Content";

const Card = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  return (
    <>
      <div className="card border rounded-md p-2">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s"
            alt=""
            className="w-full rounded-md "
          />
        </div>
        <Content />
      </div>
    </>
  );
};

export default Card;
