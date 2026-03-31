import React, { useEffect, useState } from 'react'

const ToolsCards = () => {

  const [showdata, setShowdata] = useState([])

  const handleShowData = async () => {
    const res = await fetch("./Tools.json")
    const data = await res.json()
    setShowdata(data)
    console.log(data.data[5].description); 
  }

  useEffect(() => {
    handleShowData();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default ToolsCards
