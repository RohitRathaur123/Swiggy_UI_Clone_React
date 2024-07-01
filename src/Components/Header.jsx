import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoBag } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoBag />,
      name: "Swiggy Corporate",
    },
    {
      icon: <IoSearch />,
      name: "Search",
    },
    {
      icon: <BiSolidOffer />,
      name: "Offers",
      sup: "NEW",
    },
    {
      icon: <IoHelpBuoyOutline />,
      name: "Help",
    },
    {
      icon: <VscAccount />,
      name: "Sign In",
    },
    {
      icon: <BsCart />,
      name: "Cart",
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:999999
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.jpg" alt="logo" className="w-full" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Other
            </span>
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold cursor-pointer ml-2 inline text-[#fc8019]"
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px]">
            {links.map((link, index) => {
              return (
                <ul>
                  <li
                    key={index}
                    className="cursor-pointer flex hover:text-[#fc8019] items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                    <sup>{link.sup}</sup>
                  </li>
                </ul>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};
