import React, { useEffect } from "react";
import "./hero.css";
import "aos/dist/aos.css";
import Aos from "aos";

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section>
      <div className="bg-container py-[8rem] bg-right sm:bg-right-top">
        <div className="row">
          <div className="col">
            <h2
              data-aos="fade-up"
              data-aos0-duration="500"
              data-aos-anchor-placement="center-bottom"
              className="text-3xl sm:text-6xl text-center text-white"
            >
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
