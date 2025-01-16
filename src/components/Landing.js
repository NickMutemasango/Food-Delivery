import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-[#497778]">
      <h1 className="text-[#d2c8aa] font-bold text-center text-[15px] md:text-4xl xl:w-[60%]  ">
        Welcome to Bite & Bliss were meals are satisfying, appetizing & tempting
      </h1>

      <div className="pt-10 flex gap-5">
        <Link to="/SignUp" >
          {" "}
          <button className="bg-[#d4800c] px-4 rounded-lg text-white md:px-5 lg:py-1 lg:px-5 py-1">SignUp</button>
        </Link>
        <Link to="/Login" >
          <button className="bg-[#d4800c]  px-4 rounded-lg text-white md:px-5 lg:py-1 lg:px-5 py-1">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
