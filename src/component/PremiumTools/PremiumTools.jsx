import React, { Suspense, useEffect, useState } from "react";
import ToolsHeader from './ToolsHeader'
import Cards from "../Cards/Cards";


const PremiumTools = () => {
  const [IsActive, setIsActive] = useState("products");
  const [showData, setShowData] = useState([]);

  // Data ekhane fetch hobe jate shobar jonno available thake
  useEffect(() => {
    fetch("./Tools.json")
      .then(res => res.json())
      .then(data => setShowData(data));
  }, []);

  return (
    <div className="py-20">
      {/* Header */}
      <ToolsHeader IsActive={IsActive} setIsActive={setIsActive} />

      {/* Content */}

      <div className="mt-10 container mx-auto">
        {IsActive === "products" ? (
        <Cards showData={showData} /> 
      ) : (
        <Cart showData={showData} />    
      )}
      </div>
    </div>
  );
};

export default PremiumTools
