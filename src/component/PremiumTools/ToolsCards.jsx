import { CornerUpLeftIcon, MoveRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ToolsCards = () => {

  const [showdata, setShowdata] = useState([])
  const [showBadges, setShowBadges] = useState("")

  const handleShowData = async () => {
    const res = await fetch("./Tools.json")
    const data = await res.json()
    setShowdata(data)
  }

  useEffect(() => {
    handleShowData();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

      {showdata.map((tool) => (

        <div key={tool.id} className='relative space-y-6 flex flex-col text-start items-start border border-gray-200 p-6 rounded-2xl'>

          <img src={tool.image}  className='w-16 h-16' />

          <h3 className='text-2xl font-bold'>{tool.title}</h3>

          <p className='text-[#627382]'>{tool.description}</p>

          <div className='flex items-start'>
            <h3 className='text-2xl font-bold'>{tool.price}</h3>
            <p className='text-[#627382]'>{tool.billing}</p>
          </div>

          <p 
          // onScroll={()=> setShowBadges()}
          className={`absolute top-3 right-7 
            
            ${showBadges === "Best Seller" ? "p-5 bg-red-600" : "py-2 px-3 rounded-full font-medium bg-green-200"}
            `} >
              
            {tool.badge}
            
            </p>
          <ul>
            {tool.features.map((feature, index) => (
              <li key={index} className='text-[#627382] flex items-center gap-2'>
                <MoveRight color='green'/> {feature}
              </li>
            ))}
          </ul>
          {/* button */}

          <button
          className="text-white w-full text-[10px] md:text-[16px] font-extrabold md:font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] border border-[#3B82F6] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl
          hover:bg-linear-to-l hover:from-[#9514FA] hover:to-[#4F39F6] hover:bg-clip-text hover:text-transparent hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0
          "
        >
          Buy Now
        </button>
        </div>
      ))}

    </div>
  )
}

export default ToolsCards
