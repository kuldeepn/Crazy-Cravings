import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({ menuData }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem({ menuData }));
  };

  console.log(menuData);
  return (
    <div data-testid="food-items">
      <div className="flex p-2 justify-between">
        <div>
          <span className=" font-sans font-medium">{menuData.name}</span>
          <div className="flex font-thin font-sans">
            ₹{menuData?.price / 100 || menuData?.defaultPrice / 100}
          </div>
        </div>
        <span>
          <img
            src={CDN_URL + menuData?.imageId}
            className="h-24 w-[118px] shadow-sm rounded-xl"
            alt="Food Image"
          ></img>
          <button
            onClick={handleAddItem}
            className="bg-white px-3 py-1 text-green-500 rounded-md font-bold text-xs border border-gray-300"
          >
            ADD+
          </button>
        </span>
      </div>
      <div className="flex p-2 font-light text-gray-400 border-b border-gray-400 border-w mb-4">
        <p>{menuData.description}</p>
      </div>
    </div>
  );
};

export default MenuItems;
