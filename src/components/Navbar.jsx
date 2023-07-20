import React from "react";
import navLogo from "../assets/logo.svg";
import "./navbar.css";
import { NavLink } from "react-router-dom";

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
            <h1 className="text-white">Anime Hub</h1>
          </div>
          <div className="col text-white">
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
