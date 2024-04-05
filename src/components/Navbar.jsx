import React from "react";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navMenu = ["Home", "Blog", "Single Post", "Pages", "Contact"];
  return (
    <>
      <nav className="mb-2">
        <div className="flex items-center justify-between py-5">
          <div className="logo transition duration-300 hover:text-blue-700 hover:scale-150">
            <Link to={"/"}>Logo</Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navMenu.map((item, i) => (
                <div className="gap-4" key={i}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-blue-600 hover:border-b-2 border-blue-500 pb-6"
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
                <button className="switch flex p-1 bg-white rounded-full hover:bg-blue-600 hover:text-white">
                  <MdLightMode />
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-black" />
      </nav>
    </>
  );
};

export default Navbar;
