import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Phone = ({ font }) => {
  return (
    <div className="phone flex gap-4 items-center">
      <FiPhoneCall className="text-2xl" />
      <p className={font}>9812345678</p>
    </div>
  );
};

export default Phone;
