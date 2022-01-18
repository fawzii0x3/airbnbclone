import React from "react";
import photoGrid from "../img/photo-grid.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={photoGrid} className="gridimges" />
      <div className="down">
        <h1>Online Experience</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
