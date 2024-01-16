import React from "react";
import Card from "./card";
import pic1 from "../images/pic1.png";
import cardData from "../data/cardData";

export default () => {
  const cardList = cardData.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return <div className="card-list">{cardList}</div>;
};
