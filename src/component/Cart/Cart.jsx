import React from 'react'
import Empty from '../../assets/empty.png'
const Cart = ({showData}) => {
  console.log(showData.length);
  
  return (
    <div className='flex flex-col gap-5 items-center border border-gray-200 py-10 px-8 rounded-2xl shadow-xl '>
        
        {showData.length === 0 ? 
        
        'tyjytr'
        
        : 
        
        <div className='flex flex-col gap-5 items-center'>
          <img src={Empty} className='w-30 md:w-50' alt="Empty Cart" />
        <h1 className='text-5xl md:text-7xl font-extrabold'>Your Cart</h1>
        <p className='text-[16px] text-[#627382] mt-4'>Your cart is currently empty. Browse our premium digital tools and add them to your cart to enhance your productivity and creativity.</p>
        </div>}

    </div>
  )
}

export default Cart
