import React from "react";
import pic1 from "../images/pic1.png";
import starpic from "../images/star.png";

export default () => {
  return (
    <div className="card">
      <img className="card--pic" src={pic1} alt="" />
      <div className="card--stats">
        <img src={starpic} alt="" />
        <span>5.0</span>
        <span>(6) ●</span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
};
