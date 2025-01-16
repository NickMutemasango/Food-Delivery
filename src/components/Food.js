import React from "react";

const food = (props) => {
  return (
    <div className="bg-light rounded-3xl w-[45%]  flex flex-col justify-center items-center px-2 mb-16">
      <img src={props.image} alt="" className="w-20 -mt-7 pb-3" />
      <h1 className="font-bold text-[#515151]">{props.heading}</h1>
      <p className="text-comp font-semibold text-sm pb-1">
        {props.descritpion}
      </p>
      <div className="flex gap-1 pb-2 xl:pb-5">
        <p className="text-red font-bold text-base">$</p>
        <p className="font-semibold text-[#2e2e2e]">{props.price}</p>
      </div>
    </div>
  );
};

export default food;
