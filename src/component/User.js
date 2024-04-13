import React from "react";
import useUserDetails from "../utils/useUserDetails";

const User = () => {
  const userData = useUserDetails();
  console.log(userData);

  const { name, avatar_url } = userData;

  return (
    <div className="m-4 mt-7 flex flex-col items-center">
      <img className="rounded-full h-60 w-60" src={avatar_url}></img>
      <div className=" mt-2">
        <h2 className="mx-8 py-4 font-roboto">{name}</h2>
      </div>
    </div>
  );
};

export default User;
