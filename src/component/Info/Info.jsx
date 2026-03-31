import React from "react";

const Info = () => {
  return (
    <div
      className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] 
    flex flex-col gap-8 md:flex-row justify-around px-2 md:px-15 py-8 md:py-17 text-white mb-4"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-6xl font-extrabold">50K+</h1>
        <p className="text-2xl text-[#ffffff] font-light opacity-80">
          Active Users
        </p>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-6xl font-extrabold">200+</h1>
        <p className="text-2xl text-[#ffffff] font-light opacity-80">
          Premium Tools
        </p>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-6xl font-extrabold">4.9</h1>
        <p className="text-2xl text-[#ffffff] font-light opacity-80">Rating</p>
      </div>
    </div>
  );
};

export default Info;
