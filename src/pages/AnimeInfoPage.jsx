import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnimeInfoPage() {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const infos = [
    { key: "Aired", value: animeDetails.aired?.string },
    { key: "Season", value: animeDetails.season },
    { key: "Type", value: animeDetails.type },
    { key: "Popularity", value: animeDetails.popularity },
    { key: "Episodes", value: animeDetails.episodes },
    { key: "Duration", value: animeDetails.duration },
    { key: "Rating", value: animeDetails.rating },
    { key: "Status", value: animeDetails.status },
  ];

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.jikan.moe/v4/anime/${id}`,
    })
      .then((result) => {
        console.log("result", result.data.data);
        setAnimeDetails(result.data.data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <section className="bg-neutral-300 dark:bg-neutral-800 pt-6">
      {!loading ? (
        <div className="container mx-auto">
          <div className="row">
            <div className="col">
              <h2 className="text-center text-black dark:text-white text-3xl">
                {animeDetails.title}
              </h2>
              <h2 className="text-center text-black dark:text-white text-xl">
                {animeDetails.title_japanese}
              </h2>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col flex justify-center">
              <img src={animeDetails.images.jpg.large_image_url} alt="" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <p className="text-center text-black dark:text-white text-xl">
                {animeDetails.synopsis}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col bg-gray-500 dark:bg-gray-800 rounded border-gray-700 flex space-y-3 flex-col">
              {infos.map((info, index) => (
                <p
                  key={index}
                  className="text-center text-black dark:text-white text-md"
                >
                  {info.key}: {info.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center">
          <img
            className="h-96 w-96"
            src="https://gifdb.com/images/high/wide-mouth-anime-girl-ct08b2zx2bsp84eg.gif"
            alt=""
          />
        </div>
      )}
    </section>
  );
}

export default AnimeInfoPage;
