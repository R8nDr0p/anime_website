import React, { useEffect } from "react";
import { useSearch } from "../context/context";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

function Results() {
  const { searchAnimeResults } = useSearch();
  const { search_term } = useParams();

  return (
    <section className="dark:bg-neutral-900 bg-neutral-400">
      <div className="container mx-auto">
        <div className="row">
          <div className="col">
            <h2 className="text-3xl text-center dark:text-white text-black">
              Results for "<span className="text-red-500">{search_term}</span>"
            </h2>
          </div>
        </div>
        <div className="row flex justify-center p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {searchAnimeResults.map((anime, index) => (
              <Card
                key={index}
                title={anime.title}
                synopsis={anime.synopsis}
                image={anime.images.jpg.large_image_url}
                aired={anime.aired.string}
                genres={anime.genres}
                id={anime.mal_id}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[80%]" />
        </div>
      </div>
    </section>
  );
}

export default Results;
