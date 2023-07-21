import React, { useEffect, useState } from "react";
import Card from "./Card";

function Popular() {
  const popularUrl = "https://api.jikan.moe/v4/top/anime";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [popularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    fetch(popularUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPopularAnime(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("popularAnime:", popularAnime);
  }, [popularAnime]);

  return (
    <section className="bg-neutral-900 p-5">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-4xl mb-4 text-white">Popular Anime</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <img
              src="https://gifdb.com/images/high/wide-mouth-anime-girl-ct08b2zx2bsp84eg.gif"
              alt=""
            />
          ) : (
            popularAnime.map((anime, index) => (
              <Card
                key={index}
                title={anime.title}
                synopsis={anime.synopsis}
                image={anime.images.jpg.large_image_url}
                aired={anime.aired.string}
                genres={anime.genres}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Popular;
