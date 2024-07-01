import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { FaFilter } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

export const OnlineDelivery = () => {
    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        if (componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect();
          setIsAtTop(rect.top <= 0);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains.json");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <>
      <div className="max-w-[1200px] mx-auto items-center" ref={componentRef}>
        <div className="flex my-4 items-center justify-between">
          <div className="text-[25px] font-bold">Restaurants with online food delivery in Delhi</div>
        </div>
        <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}>
            <div className="max-w-[1200px] mx-auto flex my-4 gap-4">
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Filter<FaFilter className="inline ml-1"/></div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Sort By<RxCaretDown className="inline ml-1 w-[22px] h-[22px]"/></div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Fast Delivery</div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">New on Swiggy</div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Ratings 4.0+</div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Pure Veg</div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Offers</div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Rs. 300-Rs. 600</div>
                <div className="p-3 rounded-3xl font-medium shadow border border-slate-300">Less than Rs. 300</div>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {
                data.map(
                    (d,i) => {
                        return <Card  {...d}/>
                    }
                )
            }
        </div>
        <hr className="my-6 border-[1px]" />
      </div>
    </>
  );
};
