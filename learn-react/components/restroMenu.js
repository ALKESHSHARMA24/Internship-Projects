import { useEffect, useState } from "react";
import { Shimmar } from "./ShimmerUI";
import { useParams } from "react-router";
import { RESTAURANT, RESTAURANT_MENU_IMAGE } from "../utils/constants";
import BasicButtons from "./AddImage";
import ItemsAccrodian from "./ItemsAccordian";
const RestroMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [ResName, setResName] = useState(null);
  const { resId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null); //use for lifting the state up and now this component will mangae the state of its child

  useEffect(function () {
    fetchMenu();
  }, []);
  useEffect(function () {});

  async function fetchMenu() {
    try {
      const response = await fetch(RESTAURANT + resId);
      const data = await response.json();
      setResName(data);
      console.log(data);
      const filterdres =
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          function (menu) {
            return (
              menu.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
          }
        );
      setResMenu(filterdres);
      console.log(filterdres);
      console.log(ResName);
    } catch (e) {
      console.log(e.message);
    }
  }

  if (resMenu === null) return <Shimmar />;
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className=" h-full  w-full m-10 p-10 border-amber-800 border-2 flex flex-col justify-center content-center items-center">
        <p className="text-black bg-blue-300 rounded-lg w-1/3 p-4 justify-center flex">
          Restaurant Name:- {ResName.data.cards[0].card.card.text}
        </p>
        {resMenu &&
          resMenu.map((items, index) => (
            <ItemsAccrodian
              key={index}
              index={index}
              isActive={activeIndex === index}
              SetActiveIndex={function (index) {
                setActiveIndex(index);
              }}
              item={items}
            />
          ))}
      </div>
      //{" "}
    </div>
  );
};

export default RestroMenu;
