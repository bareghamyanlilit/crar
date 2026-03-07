"use client";
import { useState } from "react";

export function Envelop() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black w-screen h-screen overflow-hidden flex py-50 ">
      <div className=" m-auto relative w-150 h-50">
        <div className="TopBlack absolute z-5 -top-100  w-400 h-100 bg-[#000000]"></div>
        <div className="BottomBlack absolute z-10 top-100 -right-50  w-400 h-100 bg-[#000000]"></div>
        <div className="LeftBlack absolute z-10 -left-100 -top-50  w-100 h-300 bg-[#000000]"></div>
        <div className="RightBlack absolute z-10 -right-100 -top-50  w-100 h-300 bg-[#000000]"></div>

        <div className=" absolute z-0 top-0 w-150 h-100 bg-[#ffffff]"></div>

        <div
          className={` absolute ${open ? "z-6" : "z-1"} top-5 w-140 h-90 left-5 bg-[#ffffff]`}
        ></div>
        <div
          className={`absolute ${open ? "z-5" : "z-1"} -top-54 left-22 bg-[#ffedb8] w-106 h-106 rotate-45`}
        ></div>

        <div
          className={`RightGreen  ${open ? "z-6" : "z-1"} absolute z-2 top-16 left-85 bg-[#ffe596] w-106 h-140 rotate-45`}
        ></div>
        <div
          className={`LeftGreen  ${open ? "z-6" : "z-1"} absolute z-2 top-16 right-85 bg-[#ffe596] w-140 h-106 rotate-45`}
        ></div>

        <img
          src="/forenvelope.png"
          alt="envelop"
          onClick={() => setOpen(!open)}
          className="absolute cursor-pointer top-50 left-60 z-20 w-30 h-30 "
        />
      </div>
    </div>
  );
}
