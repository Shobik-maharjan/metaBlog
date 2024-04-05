import React from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import logo from "/public/favicon_io/android-chrome-192x192.png";
import Email from "./contact/Email";
import Phone from "./contact/Phone";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const quickLink = ["Home", "About", "Blog", "Archived", "Author", "Contact"];
  const categoryLink = [
    "Lifestyle",
    "Technology",
    "Travel",
    "Business",
    "Economy",
    "Sports",
  ];

  const copyrightLinks = [
    "Terns of Use",
    // <RxDividerVertical />,
    "Privacy Policy",
    // <RxDividerVertical />,
    "Cookie Policy",
  ];
  return (
    <>
      <footer className="bg-slate-100">
        <div className="w-10/12 mx-auto flex flex-col gap-10 pt-10">
          <div className="content flex">
            <div className="grid grid-cols-3 items-start justify-between">
              <div className="about flex flex-col gap-6">
                <div className="about-text flex flex-col gap-3">
                  <p className="font-semibold text-lg">About</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus incidunt veniam ipsum iste, itaque rerum esse non
                    enim porro nisi!
                  </p>
                </div>
                <Email />
                <Phone />
              </div>

              <div className="quick-link flex justify-center gap-20">
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-lg">Quick Link</h2>
                  <div className="flex flex-col gap-2">
                    {quickLink.map((item, i) => (
                      <Link
                        to={`/${item.toLowerCase().replace(" ", "-")}`}
                        key={i}
                        className="hover:underline hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-lg">Category</h2>

                  <div className="flex flex-col gap-2">
                    {categoryLink.map((item, i) => (
                      <Link
                        to={`/${item.toLowerCase().replace(" ", "-")}`}
                        key={i}
                        className="hover:underline hover:text-blue-600"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="newsletters rounded-md p-8 bg-white text-center flex flex-col gap-6">
                <div className="heading">
                  <h2 className="font-semibold text-xl">Weekly Newsletter</h2>
                  <p>Get blog articles and offers via email</p>
                </div>
                <div className="form flex flex-col gap-2">
                  <div className="relative email flex flex-col justify-center">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="border w-full p-4"
                    />
                    <CiMail className="absolute right-3 z-10" />
                  </div>
                  <button className="text-white bg-blue-600 w-full p-4 rounded-md hover:bg-blue-500/90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-black" />

          <div className="copyright flex items-center justify-between py-4">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="" className="w-14" />
              <div>
                Meta<strong>Blog</strong>
                <div className="copyright-info flex items-center gap-1">
                  <FaRegCopyright />
                  JS Template 2023. All Rights Reservd
                </div>
              </div>
            </div>

            <div className="social-link">
              <div className="flex gap-4">
                <Link
                  to={"/"}
                  className="hover:scale-150 transition-transform duration-300 hover:text-white hover:bg-blue-600 hover:rounded-full p-1"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  to={"/"}
                  className="hover:scale-150 transition-transform duration-300 hover:text-white hover:bg-blue-400 hover:rounded-full p-1"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to=""
                  className="hover:scale-150 transition-transform duration-300 p-1 hover:bg-gradient-to-tr from-orange-500 via-red-500 via-pink-500  to-blue-600 hover:rounded-md hover:text-white"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to={"/"}
                  className="hover:scale-150 transition-transform duration-300 hover:text-white p-1 hover:bg-blue-400 hover:rounded-md"
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className="links flex gap-4">
              {copyrightLinks.map((item, i) => (
                <div className="flex items-center" key={i}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    key={i}
                    className="hover:text-blue-600 hover:underline"
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
