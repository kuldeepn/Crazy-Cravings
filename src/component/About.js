import { React } from "react";
import User from "./User";

const About = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center font-roboto font-bold text-2xl ">About Us</h1>
      <hr className="mt-1 border-black w-96 mx-auto"></hr>
      <User />
    </div>
  );
};

export default About;
