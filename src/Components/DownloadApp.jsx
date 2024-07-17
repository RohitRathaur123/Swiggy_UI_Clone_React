import React from "react";

export const DownloadApp = () => {
  return (
    <>
      <div className="mx-auto items-center bg-[#f0f0f5] mt-24">
          <div className="flex justify-evenly items-center text-[25px] font-extrabold text-[#02060cbf] p-4">
            <div>For better experience,download<pre/>the Swiggy app now</div>
            <div className="flex gap-6">
              <img src="images/play_store.png" alt="playSore" className="w-[200px] h-[64px] cursor-pointer"/>
              <img src="images/app_store.png" alt="AppStore" className="w-[186px] h-[64px] cursor-pointer"/>
            </div>
          </div>
      </div>
    </>
  );
};
