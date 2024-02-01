import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import Cart from "../utils/icons/Cart";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedin } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg ">
      <Link to={"/"}>
        <img src={LOGO} className="w-24 px-2 hover:[transform:scale(1.1)]" />
      </Link>

      <div className="">
        <ul className="flex m-4 p-4 font-roboto">
          <li className="px-4 hover:text-orange-500">
            Online Status:
            {onlineStatus ? (
              <span className="h-3 w-3 flex absolute -mt-[19px] mx-[105px]">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
              </span>
            ) : (
              "🔴"
            )}
          </li>
          <li className="px-4  hover:text-orange-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4  hover:text-orange-500">
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="px-4 hover:text-orange-500">
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Cart />
          </li>
          <li className="px-4  hover:text-orange-500">
            <Link to={"/login"}>
              <button
                onClick={() => {
                  newName = "Logout";
                  btnName === "Login"
                    ? setbtnName(newName)
                    : setbtnName("Login");
                }}
              >
                {btnName}:
              </button>
            </Link>
            <span> {loggedin}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
