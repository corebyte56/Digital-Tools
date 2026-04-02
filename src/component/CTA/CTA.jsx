import React from 'react'

const CTA = () => {
  return (
     <div className="w-full py-20 px-4 text-center text-white 
    bg-linear-to-l from-[#9514FA] to-[#4F39F6]">

      <h1 className="text-3xl md:text-5xl font-bold">
        Ready To Transform Your Workflow?
      </h1>

      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        Start your free trial today.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">

        {/* Explore */}
        <button className="bg-white font-semibold px-6 py-3 rounded-full hover:scale-105 duration-200 active:scale-95 active:translate-y-0 cursor-pointer">
          <span className='bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>Explore Products</span>
        </button>

        {/* Pricing */}
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 hover:scale-105 duration-200 active:scale-95 active:translate-y-0  cursor-pointer">
          View Pricing
        </button>

      </div>

      <p className="mt-6 text-sm text-white/70">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
  )
}

export default CTA
