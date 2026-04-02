import { Check } from 'lucide-react'
import React from 'react'

const Cards = ({ showData, handleAddToCart }) => {

  if (!showData || showData.length === 0) {
    return <div className="text-center w-full py-10">Loading Products...</div>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showData.map((tool) => (
        <div
          key={tool.id}
          className="relative space-y-6 flex flex-col text-start items-start border border-gray-200 py-7 px-8 rounded-2xl shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 duration-200 cursor-pointer  "
        >
          <img src={tool.image} className="w-16 h-16 border border-gray-300 rounded-full p-2    " />

          <h3 className="text-2xl font-bold">{tool.title}</h3>

          <p className="text-[#627382]">{tool.description}</p>

          <div className="flex items-start">
            <h3 className="text-2xl font-bold">{tool.price}</h3>
            <p className="text-[#627382]">{tool.billing}</p>
          </div>

          <p
            className={`absolute top-3 right-7 
            text-[10px] md:text-[14px] font-semibold  px-3 py-2 rounded-full
            ${
              tool.badge === "Best Seller"
                ? "bg-orange-100 text-[#BB4D00]"
                : tool.badge === "Popular"
                  ? "bg-purple-100 text-[#7B2CBF]"
                  : tool.badge === "New"
                    ? "bg-green-100  text-[#0A883E]"
                    : "bg-white"
            } `}
          >
            {tool.badge}
          </p>

          <ul>
            {tool.features.map((feature, index) => (
              <li
                key={index}
                className="text-[#627382] flex items-center gap-2"
              >
                {/* Svg */}
                <Check color='lightgreen'/>

                {/* features */}
                {feature}

              </li>
            ))}
          </ul>


          {/* button */}

          <button
          onClick={() => handleAddToCart(tool)}
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

export default Cards
