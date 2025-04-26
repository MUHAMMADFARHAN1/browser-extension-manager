import React from "react";
import Flexcard from "./Flexcard";
import array from "../../../data";
// 1.Javascript arraz or 2.json server needs to be created here or 3. simplz copy everzthing

function Flexcard_Container() {
  const listItems = array.map((item) => (
    <Flexcard
      className=" col-span-1"
      images={item.logo}
      heading={item.name}
      text={item.description}
    />
  ));

  return (
    <div className="grid grid-cols-3 gap-10">
      {/* <Flexcard className=" col-span-1" heading="dsgfd" text="dsfdsf" />
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />

      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />

      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" />
      <Flexcard className=" col-span-1" /> */}
      {listItems}
    </div>
  );
}

export default Flexcard_Container;

// if page is empty check devtools and then the log is to be seen
