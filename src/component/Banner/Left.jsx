import React from "react";
import { Play } from "lucide-react";
import circle from "../../assets/circle.png";

const Left = () => {
  return (
    <div className="flex flex-col gap-10 px-5 py-10">
      {/* Text Content */}
      <div className="space-y-5">
        <div className="flex gap-3 items-center bg-[#E1E7FF] rounded-full py-2 px-5 w-fit ">
            <img className="h-4 w-4" src={circle} alt="" />
            <p className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>
        </div>

        <h1 className="font-extrabold text-5xl md:text-7xl text-[#101727] leading-tight md:leading-20">Supercharge Your <br /> Digital Workflow</h1>
        <p className="text-[#627382] text-[18px] leading-8">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-5">
        <button
          className="text-white text-[10px] md:text-[16px] font-extrabold md:font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] border border-[#3B82F6] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl
          hover:bg-linear-to-l hover:from-[#9514FA] hover:to-[#4F39F6] hover:bg-clip-text hover:text-transparent hover:scale-105 hover:-translate-y-1 duration-200
          "
        >
          Explore Products
        </button>

        <button
          className="text-[10px] md:text-[16px] font-extrabold md:font-semibold  py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl
          bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent
          hover:bg-linear-to-l hover:from-[#9514FA] hover:to-[#4F39F6] hover:bg-clip-padding hover:text-white border border-[#3B82F6]
          hover:scale-105 hover:-translate-y-1 duration-200 flex items-center gap-2  
          "
        >
          <Play className="text-[10px] md:text-[16px] font-extrabold md:font-semibold text-[#4F39F6] hover:text-white"/> Watch Demo
        </button>
      </div>
    </div>
  );
};

export default Left;
