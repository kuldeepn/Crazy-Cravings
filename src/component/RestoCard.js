import { CDN_URL } from "../utils/constants";
import Star from "../utils/icons/Star";

const RestoCard = (props) => {
  const { resInfo } = props;

  const {
    name,
    cuisines,
    avgRating,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    areaName,
  } = resInfo?.info;

  const maxCuisinesDisplay = 3;

  const hasOverflow = cuisines.length > maxCuisinesDisplay;
  displayedCuisines = hasOverflow
    ? cuisines.slice(0, maxCuisinesDisplay)
    : cuisines;

  {
    /*
     * *This is Optional chaining means if suppose object not having particular value then it will not give an error
     */
  }

  return (
    <div
      data-testid="cards-item"
      className="relative m-4 w-[220px] h-[320px] rounded-xl shadow-2xl bg-slate-200"
    >
      <div className="relative w-full h-[150px] rounded-xl overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover "
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        {/* Blackish gradient at the bottom of the image */}
        <div className="absolute bottom-0 left-0 w-full h-[81px] bg-gradient-to-t from-black pb-8"></div>
        <div className="text-white absolute bottom-0 left-0 w-full text-center font-extrabold text-lg">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold py-1 font-roboto">{name}</h2>
        <h5 className="flex pb-2">
          <Star />
          <div className="px-2 font-roboto font-bold">
            {avgRating} . {sla.deliveryTime} Mins
          </div>
        </h5>
        <h3 className="font-roboto">
          {displayedCuisines.join(", ")}
          {hasOverflow && "..."}
        </h3>
      </div>
    </div>
  );
};

//* Higher Order Component
export const withPromotedLable = (RestoCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-[#1BA672] text-white m-1 px-2 rounded-lg font-thin z-[1]">
          Pure Veg
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
