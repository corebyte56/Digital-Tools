import React from "react";

const Info = () => {
  return (
    <div
      className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] 
    flex justify-around px-15 py-17 text-white mb-4"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-6xl font-extrabold">50K+</h1>
        <p className="text-2xl text-[#ffffff] font-light opacity-80">Active Users</p>
      </div>


      <div className="flex flex-col items-center gap-3">
        <h1 className="text-6xl font-extrabold">200+</h1>
        <p className="text-2xl text-[#ffffff] font-light opacity-80">Premium Tools</p>
      </div>


      <div className="flex flex-col items-center gap-3">
        <h1 className="text-6xl font-extrabold">4.9</h1>
        <p className="text-2xl text-[#ffffff] font-light opacity-80">Rating</p>
      </div>

      
    </div>
  );
};

export default Info;
