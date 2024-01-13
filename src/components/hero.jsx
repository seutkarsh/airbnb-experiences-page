import React from "react";
import gridImage from "../images/grid.png";

export default () => {
  return (
    <section className="hero">
      <img src={gridImage} className="hero--grid" alt="" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
