import React, { useState } from "react";

const ToolsHeader = () => {
    const [IsActive, setIsActive] = useState("products");


  return (
    <div className="flex flex-col gap-4 items-center">

        {/* Text */}
      <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
      <p className="text-[16px] text-[#627382] mt-4">
        Choose from our curated collection of premium digital products designed <br />
        to boost your productivity and creativity.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-5 border border-[#e2dede] rounded-full p-2 mt-5">

        {/* Products Button */}
        <button
        onClick={() => setIsActive("products")}
        className={`text-[10px] md:text-[16px] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl duration-200 flex items-center gap-2
        ${
          IsActive === "products"
            ? "bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white"
            : "text-[10px] md:text-[16px] font-extrabold md:font-semibold  py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent"
        }`}
      >
        Products
      </button>

        {/* cart Button */}
      <button
        onClick={() => setIsActive("cart")}
        className={`text-[10px] md:text-[16px] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl duration-200
        ${
          IsActive === "cart"
            ? "bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white"
            : "text-[10px] md:text-[16px] font-extrabold md:font-semibold  py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent"
        }`}
      >
        Cart
      </button>
      </div>
    </div>
  );
};

export default ToolsHeader;
