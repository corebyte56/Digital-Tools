import { CornerUpLeftIcon, MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const ToolsCards = () => {
  const [showdata, setShowdata] = useState([]);
  const [showBadges, setShowBadges] = useState("");

  const handleShowData = async () => {
    const res = await fetch("./Tools.json");
    const data = await res.json();
    setShowdata(data);
  };

  useEffect(() => {
    handleShowData();
  }, []);

  return (
    
      <Cards handleShowData={handleShowData} showdata={showdata} />
    
  );
};

export default ToolsCards;
