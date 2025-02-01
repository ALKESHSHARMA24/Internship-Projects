import { useEffect, useState } from "react";
import React from "react";
import { URL } from "../utils/constants";
import RestroCards, { PromotedRestro } from "./restCards";
import SearchRestroCards from "./serachRestCards";
import { Shimmar } from "./ShimmerUI";
import { Link, matchPath } from "react-router";
import useRestroFetch from "../utils/useRestroFetch";
import { PromotedRestro } from "./restCards";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

// const { UserName } = useContext(UserContext);
const Body = () => {
  const { Restaurant, isLoading } = useRestroFetch(); // Get restaurant data from custom hook
  const [FliterRestaurant, setFliterRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { UserName } = useContext(UserContext);




  //craeted a new component which should have the promoted label in the restaurant component(New Enhance Component)
  const PromotedRestroCards = PromotedRestro(RestroCards);
  // Function to search restaurants
  const searchData = async () => {
    if (!searchInput.trim()) return; // Prevent empty searches

    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.030244474584375&lng=72.53045917390587&str=${searchInput}&trackingId=dad7d274-5d9c-06fc-e3a1-24901e037d47&submitAction=ENTER&queryUniqueId=e6085f04-f924-c1ad-8e82-ced0a11eacb6`
      );
      const data = await response.json();
      console.log("datttaL ", data);

      //IF THE RESPONSE OF THE DATA IS FOR THE DISH THEN SET THE FILTER RESTAURANT BASED ON THE DISH DATA
      //ELSE SETS THE THE RESTAURATNS DATA INTO THE FILTER RESTAURATN ARRAY
      if (
        data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards ===
        undefined
      ) {
        setFliterRestaurant(
          data.data.cards[1].groupedCard.cardGroupMap.DISH.cards
        );
      } else {
        setFliterRestaurant(
          data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
        );
      }

      // setIsInitialLoad(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="flex flex-col m-5 flex-wrap">
      <div className="flex flex-row ">
        <input
          type="text"
          className="border-2 rounded-lg"
          placeholder="Search Restaurants..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className=" ml-4 pl-4 " onClick={searchData}>
          Search
        </button>
      </div>

      <div className="w-full h-auto cards-container mt-5 flex flex-row flex-wrap ">
        {isLoading ? (
          <Shimmar />
        ) : FliterRestaurant.length > 0 ? (
          FliterRestaurant.map((element) => (
            <Link
              key={element.card.card.info.id}
              to={`/Restaurant/${element.card.card.info.id}`}
            >
              <SearchRestroCards resData={element} />
            </Link>
          ))
        ) : (
          Restaurant.map((element) => (
            //High ordre component example used
            <Link key={element.info.id} to={`/Restaurant/${element.info.id}`}>
              {element.info.promoted ? (
                <PromotedRestroCards resData={element} />
              ) : (
                <RestroCards resData={element} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
