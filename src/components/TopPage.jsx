import React from "react";
import Content from "./Content";

const TopPage = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg="
          alt=""
          className="w-full h-80 object-cover rounded-md "
        />

        <div className="absolute -bottom-10 left-20 bg-white p-4 w-5/12 rounded-md shadow-md">
          <Content />
        </div>
      </div>
    </>
  );
};

export default TopPage;
