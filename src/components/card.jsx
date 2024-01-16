import React from "react";
import starpic from "../images/star.png";

export default (props) => {
  return (
    <div className="card">
      {props.item.openSpots === 0 && (
        <div className="card--badge">SOLD OUT</div>
      )}
      <img className="card--pic" src={`../images/${props.item.image}`} alt="" />
      <div className="card--stats">
        <img src={starpic} alt="" />
        <span>{props.item.rating}</span>
        <span>{`(${props.item.review}) ●`}</span>
        <span>{props.item.country}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <strong>From ${props.item.price}</strong> / person
      </p>
    </div>
  );
};
