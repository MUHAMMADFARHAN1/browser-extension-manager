import React from "react";
import Flexcard from "./Flexcard";
import array from "../../../data";
// 1.Javascript arraz or 2.json server needs to be created here or 3. simplz copy everzthing

let check = 0;
let render;

function Flexcard_Container() {
  let listItems = array.map((item) => (
    <Flexcard
      key={item.name}
      className=" col-span-1"
      active={item.isActive}
      images={item.logo}
      heading={item.name}
      text={item.description}
    />
  ));

  let Active_Item = array.filter((item) => item.isActive === true);

  let Active = Active_Item.map((Active_Item) => (
    <Flexcard
      className=" col-span-1"
      active={Active_Item.isActive}
      images={Active_Item.logo}
      heading={Active_Item.name}
      text={Active_Item.description}
    />
  ));

  let InActive_Item = array.filter((item) => item.isActive === false);

  let InActive = InActive_Item.map((InActive_Item) => (
    <Flexcard
      className=" col-span-1"
      active={InActive_Item.isActive}
      images={InActive_Item.logo}
      heading={InActive_Item.name}
      text={InActive_Item.description}
    />
  ));

  switch (check) {
    case 0:
      render = listItems;
      break;

    case 1:
      render = Active;
      break;

    case 2:
      render = InActive;
      break;
  }

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
      {/* {listItems} */}
      {render}
    </div>
  );
}

export default Flexcard_Container;

// if page is empty check devtools and then the log is to be seen
