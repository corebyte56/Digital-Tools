import React, { Suspense, useEffect, useState } from "react";
import ToolsHeader from './ToolsHeader'
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";


const PremiumTools = () => {
  const [IsActive, setIsActive] = useState("products");
  const [showData, setShowData] = useState([]);

  const handleData = async () => {
    try {
      const response = await fetch("/Tools.json"); 
      const data = await response.json();
      setShowData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
    
  };

  useEffect(() => {
    handleData();
  }, []);



  return (
    <div className="py-20">
      {/* Header */}
      <ToolsHeader IsActive={IsActive} setIsActive={setIsActive} showData={showData} />

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
