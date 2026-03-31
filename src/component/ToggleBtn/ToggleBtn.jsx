import React from 'react'

const ToggleBtn = ({IsActive, setIsActive}) => {

  return (
    <div className="flex items-center gap-5 border border-[#e2dede] rounded-full p-2 mt-5">


        {/* Products Button */}
        <button
        onClick={() => setIsActive("products")}
        className={`text-[10px] md:text-[16px] py-3 px-4 rounded-full cursor-pointer drop-shadow-xl flex items-center gap-2 transition-all duration-300 ease-in-out
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
        className={`relative z-10  text-[10px] md:text-[16px] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl transition-all duration-300 ease-in-out
        ${
          IsActive === "cart"
            ? "bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white"
            : "text-[10px] md:text-[16px] font-extrabold md:font-semibold  py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent"
        }`}
      >
        Cart
      </button>
      </div>
  )
}

export default ToggleBtn
