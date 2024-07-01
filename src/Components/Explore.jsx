import React from "react";

export const Explore = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center">
        <div className="flex my-4 items-center justify-between">
          <div className="text-[25px] font-bold mt-5">
            Explore Every Restaurants Near Me
            <div className="flex text-[#414449] text-[16px] gap-8 my-5 font-medium">
                <div className="flex justify-center border border-gray-300 p-3 rounded-2xl w-[570px] h-[52px]">Explore Restaurants Near Me</div>
                <div className="flex justify-center border border-gray-300 p-3 rounded-2xl w-[570px] h-[52px]">Explore Top Rated Restaurants Near Me</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
