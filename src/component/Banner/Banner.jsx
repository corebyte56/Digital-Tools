import React from "react";
import Left from "./Left";
import Right from "./Right";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-10 md:py-23 py-10">
      <Left />
      <Right />
    </div>
  );
};

export default Banner;
