import { URL } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import React from "react";

const RestroCards = (props) => {
  //   console.log("wrokign");
  const { resData } = props;
  const { name, avgRating, cuisines } = resData?.info;
  const cloudinaryImageid = resData?.info.cloudinaryImageId;
  const { deliveryTime } = resData?.info.sla;

  //   const { name, avgRating, cuisines } = resData?.card.card.info;
  //   const cloudinaryImageid = resData?.card.card.info.cloudinaryImageId;
  //   const { deliveryTime } = resData?.card.card.info.sla;
  //   card.card.info;

  return (
    <div className="cards w-[300px] h-[400px] m-4 flex flex-col border-2 rounded-b-lg p-3 bg-blue-100">
      <div className="h-1/2 w-full">
        <img
          className="h-full w-full rounded-lg"
          src={`${IMAGE_URL}${cloudinaryImageid}`}
          alt="restaurant Image"
          id="Restro-image"
        />
      </div>
      <div className="header h-full max-h-full flex flex-col justify-between p-2 gap-1  text-black ">
        <h3 className="resto-heading">Restaurant Name: {name}</h3>
        <h4 className="resto-heading">Cusines: {cuisines.join(", ")}</h4>
        <h4 className="resto-heading">Rating: {avgRating}</h4>
        <h4 className="resto-heading">Delivery Time: {deliveryTime} mins</h4>
      </div>
    </div>
  );
};

//Higher ordre componenet and took the restroCard as a parameter
export const PromotedRestro = (RestroCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-black text-amber-50 rounded-lg">
          PromotedRestro
        </label>
        <RestroCards {...props} />
      </div>
    );
  };
};

export default RestroCards;
