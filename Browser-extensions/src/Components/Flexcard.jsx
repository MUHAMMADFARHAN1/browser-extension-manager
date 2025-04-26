import React from "react";
import { Switch } from "@material-tailwind/react";

function Flexcard(props) {
  return (
    <div className="bg-neutral-500 px-10 py-10 w-80 rounded-2xl flex flex-col">
      <div className="flex flex-row">
        <img src="./../../assets/images/logo-dom-snapshot.svg" alt="" />
        <div className="pl-5">
          <h1 className="text-white">{props.heading}</h1>
          <p className="text-white">{props.text}</p>
        </div>
      </div>
      <div className="flex flex-row w-50 justify-between pt-4">
        <button className="bg-white pt-[5px] pb-[5px] pr-[15px] pl-[15px] rounded-[50px]">
          Remove
        </button>
        <Switch color="blue" />
      </div>
    </div>
  );
}

export default Flexcard;
