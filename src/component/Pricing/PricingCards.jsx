import { Check } from "lucide-react";
import React from "react";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
      {/* Pricing Card 1 */}
      <div className="space-y-6 bg-[#F9FAFC] flex flex-col justify-between text-start items-start border border-gray-200 py-7 px-8 rounded-2xl shadow-2xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0 mb-16">
        <h3 className="text-2xl font-bold">Starter</h3>

        <p className="text-[#627382]">Perfect for getting started</p>

        <div className="flex items-start">
          <h3 className="text-2xl font-bold">$0</h3>
          <p className="text-[#627382]">/month</p>
        </div>

        <ul className="space-y-2">
          <li className="flex gap-2 text-[#627382]">
            {" "}
            <Check color="lightgreen" /> Access to 10 free tools
          </li>
          <li className="flex gap-2 text-[#627382]">
            {" "}
            <Check color="lightgreen" /> Basic templates
          </li>
          <li className="flex gap-2 text-[#627382]">
            {" "}
            <Check color="lightgreen" /> Community support
          </li>
          <li className="flex gap-2 text-[#627382]">
            {" "}
            <Check color="lightgreen" />1 project per month
          </li>
        </ul>

        {/* button */}

        <button
          className="text-white w-full text-[10px] md:text-[16px] font-extrabold md:font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] border border-[#3B82F6] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl
          hover:bg-linear-to-l hover:from-[#9514FA] hover:to-[#4F39F6] hover:bg-clip-text hover:text-transparent hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0
          "
        >
          Get Started Free
        </button>
      </div>

      {/* Pricing Card 2 */}

      <div className="relative -top-9 space-y-6 bg-linear-to-l from-[#9514FA] to-[#4F39F6] border border-[#3B82F6] flex flex-col justify-between text-start items-start text-white py-7 px-8 rounded-2xl shadow-2xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0">

        <p className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] py-3 px-4 rounded-full text-sm font-medium border ">Most Popular</p>

        <h3 className="text-3xl font-bold text-[#FFFFFF]">Pro</h3>

        <p className="text-[#FFFFFF] font-extralight">Perfect for getting started</p>

        <div className="flex items-start">
          <h3 className="text-4xl font-bold">$0</h3>
          <p className="text-[#FFFFFF] text-[20px]">/month</p>
        </div>

        <ul className="space-y-2">
          <li className="flex gap-2 text-[#FFFFFF] font-medium  ">
            
            <Check color="lightgreen" /> Access to all premium tools
          </li>
          <li className="flex gap-2 text-[#FFFFFF] font-medium  ">
           
            <Check color="lightgreen" /> Unlimited templates
          </li>
          <li className="flex gap-2 text-[#FFFFFF] font-medium      ">
           
            <Check color="lightgreen" /> Priority support
          </li>
          <li className="flex gap-2 text-[#FFFFFF] font-medium      ">
           
            <Check color="lightgreen" /> Unlimited projects
          </li>
          <li className="flex gap-2 text-[#FFFFFF] font-medium      ">
           
            <Check color="lightgreen" /> Cloud sync
          </li>
          <li className="flex gap-2 text-[#FFFFFF] font-medium      ">
           
            <Check color="lightgreen" />
            Advanced analytics
          </li>
        </ul>

        {/* button */}

        <button
          className="w-full text-[14px] md:text-[16px] font-extrabold py-3 px-4 rounded-3xl cursor-pointer shadow-lg hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0 bg-white 
          "
        >
          <span className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">
            Start Pro Trial
          </span>
        </button>
      </div>

      {/* Pricing Card 3 */}

      <div className="space-y-6 bg-[#F9FAFC] flex flex-col justify-between text-start items-start border border-gray-200 py-7 px-8 rounded-2xl shadow-2xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0">
        <h3 className="text-3xl font-bold">Enterprise</h3>

        <p className="text-[#627382]">For teams and businesses</p>

        <div className="flex items-start">
          <h3 className="text-4xl font-bold">$99</h3>
          <p className="text-[#627382]">/month</p>
        </div>

        <ul className="space-y-2 ">
          <li className="flex gap-2 text-[#627382] font-medium">
            {" "}
            <Check color="lightgreen" /> Everything in Pro
          </li>
          <li className="flex gap-2 text-[#627382] font-medium  ">
            {" "}
            <Check color="lightgreen" /> Team collaboration
          </li>
          <li className="flex gap-2 text-[#627382] font-medium      ">
            {" "}
            <Check color="lightgreen" /> Custom integrations
          </li>
          <li className="flex gap-2 text-[#627382] font-medium      ">
            {" "}
            <Check color="lightgreen" /> Dedicated support
          </li>
          <li className="flex gap-2 text-[#627382] font-medium      ">
            {" "}
            <Check color="lightgreen" /> SLA guarantee
          </li>
          <li className="flex gap-2 text-[#627382] font-medium      ">
            {" "}
            <Check color="lightgreen" />    
            Custom branding
          </li>
        </ul>

        {/* button */}

        <button
          className="text-white w-full text-[10px] md:text-[16px] font-extrabold md:font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] border border-[#3B82F6] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl
          hover:bg-linear-to-l hover:from-[#9514FA] hover:to-[#4F39F6] hover:bg-clip-text hover:text-transparent hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0
          "
        >
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default PricingCards;
