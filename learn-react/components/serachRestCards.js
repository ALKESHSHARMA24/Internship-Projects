import { URL } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import React from "react";

const SearchRestroCards = (props) => {
  const { resData } = props;
    console.log("serachRestro working: ", resData);
  const { name, avgRating, cuisines } = resData?.card.card.info;
  const cloudinaryImageid = resData?.card.card.info.cloudinaryImageId;
  const { deliveryTime } = resData?.card.card.info.sla;

  return (
    <div className="cards-container">
      <div className="cards">
        <img
          src={`${IMAGE_URL}${cloudinaryImageid}`}
          alt="restaurant Image"
          id="Restro-image"
        />

        <div className="header">
          <h3 className="resto-heading">{name}</h3>
          <h4 className="resto-heading">{cuisines.join(", ")}</h4>
          <h4 className="resto-heading">Rating: {avgRating}</h4>
          <h4 className="resto-heading">Delivery Time: {deliveryTime} mins</h4>
        </div>
      </div>
    </div>
  );
};

export default SearchRestroCards;
