import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover, header, title }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${
        hover === true ? "hover:bg-violet-600" : "hover:bg-zinc-700"
      } ${width} min-h-[28rem] flex flex-col justify-between hover:p-6 transition-all ease-linear duration-200`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{header}</h3>
          <IoIosArrowRoundForward className="text-xl" />
        </div>
        <h1 className="text-3xl font-medium mt-5">{title}</h1>
      </div>
      {start === true && (
        <>
          <div className="down w-full">
            <h1 className="text-7xl font-semibold leading-none">
              Start a Project
            </h1>
            <button className="mt-20 rounded-full py-2 px-5 border-[1px] border-zinc-200">
              Contect Us
            </button>
          </div>
        </>
      )}
      {para === true && (
        <>
          <p className="text-sm text-zinc-400 font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </>
      )}
    </div>
  );
}

export default Card;
