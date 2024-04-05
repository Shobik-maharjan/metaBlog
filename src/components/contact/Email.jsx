import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Email = ({ font }) => {
  return (
    <div className="email flex gap-2 items-center">
      <MdOutlineEmail className="text-2xl" />
      <p className={font}>info@metablog.net</p>
    </div>
  );
};

export default Email;
