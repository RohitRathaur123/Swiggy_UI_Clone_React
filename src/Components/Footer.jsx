import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

export const Footer = () => {
  const data = {
    company: {
      title: "Company",
      items: [
        "About",
        "Careers",
        "Team",
        "Swiggy One",
        "Swiggy Instamart",
        "Swiggy Genie",
      ],
    },
    contactUs: {
      title: "Contact us",
      items: ["Help & Support", "Partner with us", "Ride with us"],
      subSections: {
        legal: {
          title: "Legal",
          items: [
            "Terms & Conditions",
            "Cookie Policy",
            "Privacy Policy",
            "Investor Relations",
          ],
        },
      },
    },
    cities: {
      title: "We deliver to:",
      items: ["Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune"],
      buttonText: "589 cities",
    },
  };

  return (
    <>
      <div className="w-full h-[485px] bg-[#02060c] text-white">
        <div className="flex justify-evenly pt-9 text-slate-400 font-medium">
          <div>
            <div>
              <img
                src="images/swg.jpg"
                alt="logo"
                className="w-[45px] h-[45px] inline"
              />
              <div className="inline font-bold text-[25px] text-[#ffffffeb]">
                Swiggy
              </div>
            </div>
            <div className="ml-3 mt-1">
              <FaRegCopyright className="inline" />
              2024 Bundl <pre />
              Technologies Pvt. Ltd
            </div>
          </div>
          {Object.keys(data).map((key) => (
            <div key={key} className="list-none">
              <div className="text-[#ffffffeb] font-bold">
                {data[key].title}
              </div>
              {data[key].items.map((item, index) => (
                <li key={index} className="mt-3">
                  {item}
                </li>
              ))}
              {data[key].subSections &&
                Object.keys(data[key].subSections).map((subKey) => (
                  <div key={subKey}>
                    <div className="text-[#ffffffeb] font-bold mt-16">
                      {data[key].subSections[subKey].title}
                    </div>
                    {data[key].subSections[subKey].items.map(
                      (subItem, subIndex) => (
                        <li key={subIndex} className="mt-3">
                          {subItem}
                        </li>
                      )
                    )}
                  </div>
                ))}
              {key === "cities" && (
                <button className="border border-slate-700 pl-2 p-1 mt-3 rounded-lg">
                  {data[key].buttonText}
                  <RxCaretDown className="inline ml-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
