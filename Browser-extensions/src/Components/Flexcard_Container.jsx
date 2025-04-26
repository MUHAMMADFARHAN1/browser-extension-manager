import React from "react";
import Flexcard from "./Flexcard";

function Flexcard_Container() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />

      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />

      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />
    </div>
  );
}

export default Flexcard_Container;
