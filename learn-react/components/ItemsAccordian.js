import { Button } from "@mui/material";
import CategoryItems from "./CategoryItems";
import { useState } from "react";

const ItemsAccrodian = function (props) {
  const { index, item, isActive, SetActiveIndex } = props;

  return (
    <div className=" h-full  mt-20  w-full flex flex-col justify-center items-center content-center border-r-amber-600 rounded-b-xl">
      <div className="flex justify-between w-full bg-gray-300 content-between rounded-lg">
        <span className="pl-4">{item.card.card.title}</span>
        <button
          className=" ml-4 pl-4 "
          onClick={function () {
            isActive ? SetActiveIndex(-1) : SetActiveIndex(index);
          }}
        >
          ⬇️
        </button>
      </div>
      {/* {if the user click on the accordiono so we want to compare the active index and click index is same or not if it is same only then show the items} */}
      <div className="flex w-full flex-col  items-center content-center ">
        {isActive &&
          item.card.card.itemCards.map((items, index) => (
            <CategoryItems
              key={items.card.info.id}
              item={items}
              // isActive={isActive}
            />
          ))}
        
      </div>
      
    </div>
  );
};

export default ItemsAccrodian;
