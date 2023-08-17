import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillRedditSquare,
  AiFillGithub,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import navLogo from "../assets/logo.svg";

function Footer() {
  const socialMedia = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/",
      icon: (
        <AiOutlineFacebook className="text-6xl hover:text-red-500 cursor-pointer transition-all duration-200" />
      ),
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/",
      icon: (
        <AiOutlineInstagram className="text-6xl hover:text-red-500 cursor-pointer transition-all duration-200" />
      ),
    },
    {
      name: "Twitter",
      path: "https://twitter.com/",
      icon: (
        <AiFillTwitterSquare className="text-6xl hover:text-red-500 cursor-pointer transition-all duration-200" />
      ),
    },
    {
      name: "Reddit",
      path: "https://www.reddit.com/",
      icon: (
        <AiFillRedditSquare className="text-6xl hover:text-red-500 cursor-pointer transition-all duration-200" />
      ),
    },
    {
      name: "Github",
      path: "https://github.com/R8nDr0p",
      icon: (
        <AiFillGithub className="text-6xl hover:text-red-500 cursor-pointer transition-all duration-200" />
      ),
    },
  ];
  return (
    <footer className="bg-neutral-400 dark:bg-neutral-900">
      <div className="container mx-auto">
        <div className="row flex flex-col sm:flex-row sm:items-start items-center space-y-5 justify-between">
          <div className="col">
            <Link to={"/"}>
              <img
                src={navLogo}
                alt="company_logo"
                className="w-56 dark:bg-white"
              />
            </Link>
          </div>
          <div className="col dark:text-white">
            <h4>Contact Us</h4>
            <a href="#">Email: animehub@hotmail.com</a>
            <p>Phone: 0923-232-2332</p>
          </div>
          <div className="col dark:text-white">
            <h4>Follow Us</h4>
            <ul className="list-none grid grid-cols-3">
              {socialMedia.map((socMed, index) => {
                return (
                  <li key={index}>
                    <a href={socMed.path} target="_blank">
                      {socMed.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
