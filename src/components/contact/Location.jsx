import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";

const Location = ({ font }) => {
  return (
    <div className="location flex items-center gap-2">
      <MdOutlineLocationOn className="text-2xl" />
      <p className={font}>Lalitpur, Nepal</p>
    </div>
  );
};

export default Location;
