import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  console.log(cartItem);

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      <div className="mt-10">
        {cartItem.map((cart) => (
          <CartItems cartData={cart} key={cart.menuData.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
