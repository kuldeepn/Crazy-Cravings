import { useEffect, useState } from "react";
import { REST_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import BackArrow from "../utils/icons/BackArrow";
import ForwardArrow from "../utils/icons/ForwardArrow";

const CategoryCarousel = () => {
  const [loadedCategory, setLoadedCategory] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(REST_API);
      const json = await data.json();
      setLoadedCategory(json.data.cards[0].card.card);
    } catch (error) {
      alert("Error in data fetching");
    }
  };

  const { title } = loadedCategory?.header || {};

  const handleNext = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 600;
  };

  const handlePrev = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 600;
  };

  return (
    <div className="mx-4 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold text-2xl">{title}</h1>
        <div>
          <button
            className="bg-gray-300 rounded-full p-2 mx-2"
            onClick={handlePrev}
          >
            {<BackArrow />}
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-300 rounded-full p-2 "
          >
            {<ForwardArrow />}
          </button>
        </div>
      </div>
      <div
        id="slider"
        className="flex overflow-x-scroll scroll-smooth"
        style={{ overflowX: "hidden" }}
      >
        <div className="flex h-52 gap-14 w-80 m-4 p-4">
          {(loadedCategory?.imageGridCards?.info).map((img) => (
            <img
              src={CDN_URL + img?.imageId}
              className="w-[144px] h-[180px]"
              key={img.id}
              alt={img.alt}
            ></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
