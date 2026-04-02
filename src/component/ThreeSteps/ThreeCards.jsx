import React from 'react'
import User from '../../assets/user.png'
import Rocket from '../../assets/rocket.png'
import Package from '../../assets/package.png'
const ThreeCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>

      {/* Card 1 */}

      <div className='relative flex flex-col items-center text-center gap-4 px-6 py-7 border border-gray-200 shadow-xl bg-white rounded-2xl'>

        {/* Id */}
        <div className='absolute top-7 right-10 px-3 py-2 bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white rounded-full font-bold'>
            
            01
            
            </div>
        {/* content */}
        <img className='mt-20 bg-linear-to-l from-[#9514FA]/10 to-[#4F39F6]/10 rounded-full p-4' src={User} alt="" />
        <h2 className='font-bold text-2xl'>Create Account</h2>
        <p className='text-gray-600'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
      </div>


      {/* Card 2 */}

      <div className='relative flex flex-col items-center text-center gap-4 px-6 py-7 border border-gray-200 shadow-xl bg-white rounded-2xl'>

        {/* Id */}
        <div className='absolute top-7 right-10 px-3 py-2 bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white rounded-full font-bold'>
            
            02
            
            </div>
        {/* content */}
        <img className='mt-20 bg-linear-to-l from-[#9514FA]/10 to-[#4F39F6]/10 rounded-full p-4' src={Package} alt="" />
        <h2 className='font-bold text-2xl'>Choose Products</h2>
        <p className='text-gray-600'>Browse our catalog and select the tools <br /> that fit your needs.</p>
      </div>


      {/* Card 3 */}

      <div className='relative flex flex-col items-center text-center gap-4 px-6 py-7 border border-gray-200 shadow-xl bg-white rounded-2xl'>

        {/* Id */}
        <div className='absolute top-7 right-10 px-3 py-2 bg-linear-to-l from-[#9514FA] to-[#4F39F6] text-white rounded-full font-bold'>
            
            03
            
            </div>
        {/* content */}
        <img className='mt-20 bg-linear-to-l from-[#9514FA]/10 to-[#4F39F6]/10 rounded-full p-4' src={Rocket} alt="" />
        <h2 className='font-bold text-2xl'>Start Creating</h2>
        <p className='text-gray-600'>Download and start using your premium <br /> tools immediately.</p>
      </div>

        
    </div>
  )
}

export default ThreeCards
