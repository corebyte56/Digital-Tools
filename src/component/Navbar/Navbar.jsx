import React, { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <div>
      <div className="container mx-auto bg-transparent sticky top-0 z-10 flex justify-between px-3 items-center gap-10">
        {/* name */}
        <div>
          <h1 className="font-extrabold text-3xl bg-linear-to-l from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>

        {/* menu */}
        <div className="hidden text-[16px] font-bold md:flex items-center gap-9 list-none text-gray-500 ">
          <li className="hover:text-[#3B82F6]">
            <a href="/">Products</a>
          </li>
          <li className="hover:text-[#3B82F6]">
            <a href="/">Features</a>
          </li>
          <li className="hover:text-[#3B82F6]">
            <a href="/">Pricing</a>
          </li>
          <li className="hover:text-[#3B82F6]">
            <a href="/">Testimonials</a>
          </li>
          <li className="hover:text-[#3B82F6]">
            <a href="/">FAQ</a>
          </li>
        </div>

        {/*  */}
        <div className="hidden text-sm md:flex items-center gap-9 list-none text-gray-500 text-[16px] font-bold">
          <a className="hover:text-[#3B82F6]" href="/">
            <ShoppingCart />
          </a>
          <li className="hover:text-[#3B82F6]">
            <a href="/">Login</a>
          </li>
          <button
            className="text-white font-semibold bg-linear-to-l from-[#3B82F6] to-[#8B5CF6] border border-[#3B82F6] py-2 px-3 rounded-2xl cursor-pointer 
          hover:bg-linear-to-l hover:from-[#3B82F6] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent hover:scale-105 duration-200
          "
          >
            Get Started
          </button>
        </div>

        {/* mobile menu */}
        <div
          className="md:hidden cursor-pointer p-3 hover:bg-gray-900 rounded-2xl duration-200"
          onClick={() => setMenuShow(!menuShow)}
        >
          {menuShow ? <X color="gray" /> : <Menu size={24} color="gray" />}

          {menuShow && (
            <div className="absolute text-sm right-10 font-semibold bg-gray-900 p-7  flex flex-col justify-between items-start gap-3 list-none text-gray-500 rounded-2xl shadow-2xl  z-20">

              {/* menu */}

              <div className="md:hidden text-[16px] font-bold flex flex-col items-start gap-3 list-none text-gray-500 ">
                <li className="hover:text-[#3B82F6]">
                  <a href="/">Products</a>
                </li>
                <li className="hover:text-[#3B82F6]">
                  <a href="/">Features</a>
                </li>
                <li className="hover:text-[#3B82F6]">
                  <a href="/">Pricing</a>
                </li>
                <li className="hover:text-[#3B82F6]">
                  <a href="/">Testimonials</a>
                </li>
                <li className="hover:text-[#3B82F6]">
                  <a href="/">FAQ</a>
                </li>
              </div>

              {/*  */}
              <div className="text-sm flex flex-col items-start gap-3 justify-between  list-none text-gray-500 text-[16px] font-bold">
                <ul className="flex flex-col items-center gap-3 list-none text-gray-500 text-[16px] font-bold">
                  <li className="hover:text-[#3B82F6]">
                    <a href="/">
                      <ShoppingCart />
                    </a>
                  </li>

                  <li className="hover:text-[#3B82F6]">
                    <a href="/">login</a>
                  </li>
                </ul>
                <button
                  className="text-white font-semibold bg-linear-to-l from-[#3B82F6] to-[#8B5CF6] border border-[#3B82F6] py-2 px-3 rounded-2xl cursor-pointer 
          hover:bg-linear-to-l hover:from-[#3B82F6] hover:to-[#8B5CF6] hover:bg-clip-text hover:text-transparent hover:scale-105 duration-200
          "
                >
                  Get Started
                </button>
              </div>
              {/*  */}
            </div>
            // mobile menu condition end
          )}
        </div>
        {/* mobile menu end */}
      </div>
    </div>
  );
};

export default Navbar;
