import RestoCard, { withPromotedLable } from "./RestoCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import CategoryCarousel from "./CategoryCarousel";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [filter, setFilter] = useState([]); // *uses for data cleaning the data receiving from useRestaurant
  const { topRes, searchRes, title } = useRestaurant();
  const online = useOnlineStatus();

  const PromotedLableComponent = withPromotedLable(RestoCard);

  const handleFilter = () => {
    let latestTopRes = searchRes.filter((res) => res.info.avgRating > 4);
    setFilter(latestTopRes);
  };

  const filterData = (searchTxt, restaurants) => {
    const filteredNewData = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
    return filteredNewData;
  };

  const serachData = (searchTxt, restaurants) => {
    if (searchTxt !== "") {
      const filteredRes = filterData(searchTxt, restaurants);
      setFilter(filteredRes);
      // if(filteredRes.lenght==0){

      // }
    } else {
      setFilter(restaurants);
    }
  };

  if (!online) {
    return <h1>You are Offline please check your internet</h1>;
  }
  console.log(searchRes);

  // *Conditonal rendering
  return topRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <CategoryCarousel />
      {/* This is JSX comment */}
      <div className="p-4 m-4 text-center">
        <input
          data-testid="search-box"
          className="border border-slate-400 rounded-md focus:outline-none focus:ring-0 focus:border-orange-500 px-2 py-1"
          type="text"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
            serachData(e.target.value, topRes);
          }}
        ></input>
        <button
          data-testid="search-button"
          className="px-2 py-1 mx-3 bg-orange-500 rounded-sm text-slate-50 hover:bg-orange-600"
          onClick={() => {
            serachData(searchTxt, topRes);
          }}
        >
          Search
        </button>
        <button
          className="px-2 py-1 mx-3 bg-orange-500 rounded-sm text-slate-50 hover:bg-orange-600"
          onClick={handleFilter}
        >
          Filter Top Restaurants
        </button>
      </div>
      <h1 className="text-black font-bold text-2xl m-4 px-4">{title?.title}</h1>
      <div className="flex flex-wrap px-3">
        {(filter.length === 0 ? searchRes : filter).map((rest) => {
          return (
            <Link
              to={"/restmenu/" + rest.info.id}
              key={rest.info.id}
              className="hover:scale-95"
            >
              {rest?.info?.badges?.imageBadges?.[0]?.description ===
              "pureveg" ? (
                <PromotedLableComponent resInfo={rest} />
              ) : (
                <RestoCard resInfo={rest} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
