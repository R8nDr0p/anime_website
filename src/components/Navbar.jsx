import React, { useEffect, useState } from "react";
import navLogo from "../assets/logo.svg";
import "./navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaCircleXmark, FaBarsStaggered } from "react-icons/fa6";
import { useSearch } from "../context/context";
import axios from "axios";

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
    // {
    //   name: "Contact",
    //   path: "/contact",
    // },
    {
      name: "Filter",
      path: "/filter",
    },
  ];

  const {
    searchAnimes,
    setSearchAnimes,
    setSearchAnimeResults,
    searchAnimeResults,
  } = useSearch();

  useEffect(() => {
    // const search = window.localStorage.getItem("MY_SEARCH_TERM");
    // setSearchAnimes(search);
    const searchedItems = window.localStorage.getItem("MY_SEARCH_ITEMS");
    setSearchAnimeResults(JSON.parse(searchedItems));
  }, []);
  // useEffect(() => {
  //   window.localStorage.setItem("MY_SEARCH_WORD", searchAnimes);
  // }, [searchAnimes]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchAnimes(value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${searchAnimes}&sfw`
      );

      const searchResults = response.data.data;
      setSearchAnimeResults(searchResults);
      setShow(false);
      // window.localStorage.setItem("MY_SEARCH_TERM", searchAnimes);
      window.localStorage.setItem(
        "MY_SEARCH_ITEMS",
        JSON.stringify(searchResults)
      );

      navigate(`/results/${searchAnimes}`);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    console.log({
      searchvalue: searchAnimes,
      searchResults: searchAnimeResults,
    });
  };
  const [show, setShow] = useState(true);

  return (
    <nav className="bg-neutral-900">
      <div className="container mx-auto">
        <div className="row flex justify-between items-center">
          <div className="col flex items-center space-x-2">
            <Link to={"/"} className="flex items-center">
              <img
                src={navLogo}
                alt="logo of the website"
                className="max-h-16 bg-white"
              />
              <h1 className="text-white text-3xl">
                Anime <span className="text-red-600">Hub</span>
              </h1>
            </Link>
          </div>
          {/* web view */}
          {/* SEARCH FIELD */}
          <form
            className="col w-96 sm:flex hidden space-x-1 justify-center"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              placeholder="Search here:"
              value={searchAnimes}
              onChange={handleSearch}
              className="shadow appearance-none border rounded sm:w-[5.5rem] md:w-full focus:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-500"
            />
            <button className="border rounded py-2 px-3 ">
              <BiSearchAlt className="text-white text-xl" />
            </button>
          </form>
          <div className="col text-white sm:block hidden">
            <ul className="flex space-x-4">
              {tags.map((tag, index) => (
                <NavLink
                  to={`${tag.path}`}
                  key={index}
                  className="text-white hover:underline no-underline transition-all duration-500 cursor-pointer text-lg"
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
            <div className="mobile sm:hidden absolute top-16 w-full z-20">
              <ul className="flex flex-col space-y-4 bg-neutral-800 text-white p-4">
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
              <div className="row bg-neutral-800">
                <form
                  onSubmit={handleSearchSubmit}
                  className="col flex items-center justify-center pb-4"
                >
                  <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search here:"
                    className="shadow appearance-none border rounded w-[5.25rem] md:w-full focus:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-1000"
                  />
                  <button className="border rounded py-2 px-3 ">
                    <BiSearchAlt className="text-white text-xl" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
