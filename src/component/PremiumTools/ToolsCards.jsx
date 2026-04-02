import { CornerUpLeftIcon, MoveRight } from "lucide-react";
import React, { Suspense, useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const ToolsCards = () => {
  const [showdata, setShowdata] = useState([]);

  const handleShowData = async () => {
    const res = await fetch("./Tools.json");
    const data = await res.json();
    setShowdata(data);
  };

  useEffect(() => {
    handleShowData();
  }, []);

  const tools = handleShowData();

  return (
    
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        {showdata.length > 0 ? <Cards showdata={showdata} tools={tools} /> : <p className="text-center text-2xl font-bold">No data found</p>}
      </Suspense> 
    
  );
};

export default ToolsCards;
