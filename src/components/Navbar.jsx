import React from "react";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navMenu = ["Home", "Blog", "Single Post", "Pages", "Contact"];
  return (
    <>
      <nav>
        <div className="flex items-center justify-between py-6 ">
          <div className="logo">
            <Link to={"/"}>Logo</Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navMenu.map((item, i) => (
                <div className="gap-4" key={i}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:underline hover:pb-10 after:absolute after:bottom-0 hover:text-blue-500"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex items-center relative">
                <input
                  type="search"
                  placeholder="search"
                  className="border rounded-md w-8/12 px-2 py-1 items-end pl-4 bg-slate-100 ml-auto"
                />
                <FiSearch className="absolute right-2 z-10" />
              </div>
              <div className="switch bg-slate-100 rounded-full w-14 py-1">
                <button className="switch flex p-1 bg-white rounded-full">
                  <MdLightMode />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
