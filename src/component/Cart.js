import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";
import emptyCart from "../utils/images/pngwing.com.png";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  console.log(cartItem);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h1 className="text-center font-bold text-2xl">Cart</h1>
      {cartItem.length === 0 ? (
        <div>
          <img src={emptyCart} className="w-76 mt-10 items-center"></img>
          <p className="font-sans font-bold text-center mt-4 text-gray-700">
            Your cart is empty..!
          </p>
        </div>
      ) : (
        <div>
          <div className="mt-4 text-center">
            <button
              className="px-2 py-1 bg-orange-500 rounded-sm text-slate-50 hover:bg-orange-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="mt-10">
            {cartItem.map((cart) => (
              <CartItems cartData={cart} key={cart.menuData.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
