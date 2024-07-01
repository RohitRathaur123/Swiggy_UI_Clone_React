import React from "react";
import { RxCaretDown } from "react-icons/rx";

export const NearMe = () => {
  const restaurants = [
    "Chinese",
    "South Indian",
    "Indian",
    "Kerala",
    "Korean",
    "North Indian",
    "Seafood",
    "Bengali",
    "Punjabi",
    "Italian",
    "Andhra",
  ];

  const chunk = (array, size) => {
    return array.reduce(
      (acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]),
      []
    );
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center">
        <div className="flex my-4 items-center justify-between">
          <div className="text-[25px] font-bold mt-5">
            Best Cuisines Near Me
            {chunk(restaurants, 4).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex text-[#414449] text-[16px] gap-8 my-5 font-medium"
              >
                {row.map((restaurant, restaurantIndex) => (
                  <div
                    key={restaurantIndex}
                    className="flex justify-center border border-gray-300 p-3 rounded-2xl w-[270px] h-[52px]"
                  >
                    {restaurant} Restaurant Near Me
                  </div>
                ))}
                {rowIndex === chunk(restaurants, 4).length - 1 &&
                  restaurants.length % 4 !== 0 && (
                    <div className="flex font-bold justify-center border border-gray-300 p-3 rounded-2xl w-[270px] h-[52px]">
                      Show More
                      <RxCaretDown className="w-[22px] h-[22px]" />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
