import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./popular.css";

function Popular() {
  const popularUrl = "https://api.jikan.moe/v4/top/anime";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [PopularAnime, setPopularAnime] = useState([]);

  useEffect(() => {
    fetch(popularUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPopularAnime(data.data || []); // Assuming the 'data' object contains the actual array of popular anime
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("PopularAnime:", PopularAnime);
  }, [PopularAnime]);

  return (
    <section className="bg-neutral-900 p-5">
      <div className="container mx-auto">
        <div className="row">
          <div className="col text-center">
            <h3 className="text-4xl mb-4 text-white">Popular Anime</h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="row flex justify-center flex-wrap gap-4">
          {/* CARD COMPONENT */}
          {PopularAnime.map((anime, index) => {
            return (
              <Card
                key={index}
                title={anime.title}
                synopsis={anime.synopsis}
                image={anime.images.jpg.large_image_url}
                loading={loading}
                aired={anime.aired.string}
                genres={anime.genres}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;
