import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const cartLength = useSelector((store) => store.cart.item);

  return (
    <svg
      className="bg-white hover:text-orange-500"
      viewBox="-1 0 37 32"
      height="24"
      width="24"
      stroke={cartLength.length === 0 ? "#000000" : ""}
      fill={cartLength.length === 0 ? "#FFFFFF" : "#60b246"}
    >
      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
    </svg>
  );
};

export default CartIcon;
