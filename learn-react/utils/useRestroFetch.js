import { useState, useEffect } from "react";
import { URL } from "../utils/constants";

const useRestroFetch = () => {
  const [Restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        const extractedRestaurants =
          data?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT
            ?.cards?.[1]?.card?.card?.restaurants || [];

        setRestaurant(extractedRestaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { Restaurant, isLoading };
};

export default useRestroFetch;
