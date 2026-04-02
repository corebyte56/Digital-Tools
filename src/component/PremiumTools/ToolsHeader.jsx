import React from "react";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import Cart from "../Cart/Cart";
import Cards from "../Cards/Cards";


const ToolsHeader = ({showData, IsActive, setIsActive}) => {
    

   
  return (
    <div className="flex flex-col gap-4 items-center">

        {/* Text */}
      <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
      <p className="text-[16px] text-[#627382] mt-4">
        Choose from our curated collection of premium digital products designed <br />
        to boost your productivity and creativity.
      </p>

      {/* Buttons */}
      <ToggleBtn IsActive = {IsActive} setIsActive={setIsActive}/>

        
    
    </div>
  );
};

export default ToolsHeader;
