import React, { useState } from "react";
import navLogo from "../assets/logo.svg";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaCircleXmark, FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const tags = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const [show, setShow] = useState(true);
  return (
    <nav className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="row flex justify-between items-center">
          <div className="col flex items-center space-x-2">
            <a href="">
              <img
                src={navLogo}
                alt="logo of the website"
                className="h-[50px] bg-white"
              />
            </a>
            <h1 className="text-white">
              Anime <span className="text-red-600">Hub</span>
            </h1>
          </div>
          {/* web view */}
          <div className="col w-96 sm:flex hidden space-x-1">
            <input
              type="text"
              placeholder="Search here:"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="border rounded py-2 px-3 ">
              <BiSearchAlt className="text-white text-xl" />
            </button>
          </div>
          <div className="col text-white sm:block hidden">
            <ul className="flex space-x-4">
              {tags.map((tag, index) => (
                <NavLink
                  to={`${tag.path}`}
                  key={index}
                  className="text-white hover:underline no-underline transition-all duration-500 cursor-pointer"
                >
                  {tag.name}
                </NavLink>
              ))}
            </ul>
          </div>
          {/* mobile view */}
          <div className="col sm:hidden flex items-center relative">
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? (
                <FaCircleXmark className="text-white text-2xl me-2" />
              ) : (
                <FaBarsStaggered className="text-white text-2xl me-2" />
              )}
            </button>
          </div>
          {show && (
            <div className="mobile sm:hidden absolute top-12 w-full z-20">
              <ul className="flex flex-col space-y-4 bg-neutral-900 text-white p-4">
                {tags.map((tag, index) => (
                  <NavLink
                    to={`${tag.path}`}
                    key={index}
                    className="text-white text-center hover:underline no-underline transition-all duration-500 cursor-pointer"
                  >
                    {tag.name}
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
