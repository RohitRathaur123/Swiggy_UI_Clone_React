import React from "react";
import { RxCaretDown } from "react-icons/rx";

export const Place = () => {
  const cities = [
    "Bangalore",
    "Pune",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Kolkata",
    "Chennai",
    "Chandigarh",
    "Ahmedabad",
    "Jaipur",
    "Nagpur",
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
          <div className="text-[25px] font-bold">
            Best Places to Eat Across Cities
            {chunk(cities, 4).map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex text-[#414449] text-[16px] gap-8 my-5 font-medium"
              >
                {row.map((city, cityIndex) => (
                  <div
                    key={cityIndex}
                    className="flex justify-center border border-gray-300 p-3 rounded-2xl w-[270px] h-[52px] cursor-pointer"
                  >
                    Best Restaurants in {city}
                  </div>
                ))}
                {rowIndex === chunk(cities, 4).length - 1 &&
                  cities.length % 4 !== 0 && (
                    <div className="flex font-bold justify-center border border-gray-300 p-3 rounded-2xl w-[270px] h-[52px] cursor-pointer">
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
