import React from "react";
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import { CiMail } from "react-icons/ci";

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
                <div className="contact">
                  <div className="email">
                    <p>
                      <strong>Email : </strong> info@metablog.net
                    </p>
                  </div>
                  <div className="phone">
                    <p>
                      <strong>Phone : </strong>9812345678
                    </p>
                  </div>
                </div>
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

          <div className="copyright flex justify-between py-4">
            <div className="copyright-info">copyright-info</div>
            <div className="links flex gap-4">
              {copyrightLinks.map((item, i) => (
                <div className="flex items-center">
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
