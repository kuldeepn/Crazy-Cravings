import { useState, useEffect } from "react";
import { REST_API } from "./constants";

const useRestaurant = () => {
  const [topRes, setTopRes] = useState([]);
  const [searchRes, setSearchRes] = useState([]);
  const [title, setTitle] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(REST_API);
      const json = await data.json();
      setTopRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setTitle(json?.data?.cards[2]?.card?.card);
      console.log(json);
    } catch (error) {
      alert("Error in data fetching");
    }
  };

  return { topRes, searchRes, title };
};

export default useRestaurant;
