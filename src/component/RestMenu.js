import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuItems from "../utils/useMenuItems";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const RestMenu = () => {
  const { resId } = useParams();
  const resItem = useMenuItems(resId);
  const [hide, setHide] = useState(0);

  if (resItem === null) return <Shimmer />;

  console.log(resItem);

  const { name, costForTwoMessage, cuisines } =
    resItem?.cards[2]?.card?.card?.info;

  const filteredItems =
    resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center m-4 ">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-thin">
        {cuisines.join(", ")} {costForTwoMessage}
      </p>

      {filteredItems.map((cat, index) => (
        <ItemCategory
          data={cat.card.card}
          key={cat.card.card.title}
          showItem={index === hide ? true : false}
          setShowItem={() => {
            setHide(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestMenu;
