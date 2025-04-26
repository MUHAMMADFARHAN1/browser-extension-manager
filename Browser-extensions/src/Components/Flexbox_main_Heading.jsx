import React from "react";

function Flexbox_main_Heading() {
  return (
    <div className="flex justify-between w-340 pt-4 pb-4 px-4 rounded-[20px] ">
      <p className="text-white text-2xl">Extensions List</p>
      <div className="flex justify-between w-55">
        <button className="text-white bg-neutral-400 pt-[5px] pb-[5px] pr-[15px] pl-[15px] rounded-[50px]">
          All
        </button>
        <button className="text-white bg-neutral-400 pt-[5px] pb-[5px] pr-[15px] pl-[15px] rounded-[50px]">
          Active
        </button>
        <button className="text-white bg-neutral-400 pt-[5px] pb-[5px] pr-[15px] pl-[15px] rounded-[50px]">
          Inactive
        </button>
      </div>
    </div>
  );
}

export default Flexbox_main_Heading;
