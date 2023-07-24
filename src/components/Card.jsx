import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ title, synopsis, image, aired, genres, id }) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img className="rounded-t-lg mt-3 w-full" src={image} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
          {synopsis}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {aired}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
          {genres.map((genre, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2"
            >
              {genre.name}
            </span>
          ))}
        </p>
        <Link
          to={`/anime-info/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Card;
