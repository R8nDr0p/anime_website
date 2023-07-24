import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section>
      <div className="bg-container py-[8rem] bg-right sm:bg-right-top">
        <div className="row">
          <div className="col">
            <h2 className="text-3xl sm:text-6xl text-center text-white">
              "Where Anime Dreams Come to Life: <br /> Your Ultimate Destination
              for All Things Anime!"
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
