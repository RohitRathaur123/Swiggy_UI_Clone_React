import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Card } from "./Card";

export const TopRest = () => {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  const nextSlide = () => {
    if (slide >= data.length - (-15)) return false;
    setSlide(slide + 4);
  };
  const prevSlide = () => {
    if (slide <= 0) return false;
    setSlide(slide - 4);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center">
        <div className=" flex my-4 items-center justify-between">
          <div className="text-[25px] font-bold">
            Top restaurant chains in Delhi
          </div>
          <div className="flex">
            <div
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex gap-5 overflow-hidden">
          {data.map((d, i) => {
            return (
              <div
                style={{
                  transform: `translateX(-${(slide / 4) * 100}%)`,
                  transition: "transform 0.5s ease",
                }}
                key={i}
              >
                <Card {...d} key={i} />
              </div>
            );
          })}
        </div>
        <hr className="my-6 border-[1px]" />
      </div>
    </>
  );
};  
