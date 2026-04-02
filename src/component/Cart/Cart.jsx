import React from 'react'
import Empty from '../../assets/empty.png'

const Cart = ({ addedItems }) => { 
  return (
    <div className='flex flex-col gap-5 items-center border border-gray-200 py-10 px-8 rounded-2xl shadow-xl '>
        
        {addedItems.length === 0 ? (
          // Empty State
          <div className='flex flex-col gap-5 items-center'>
            <img src={Empty} className='w-30 md:w-50' alt="Empty Cart" />
            <h1 className='text-5xl md:text-7xl font-extrabold'>Your Cart</h1>
            <p className='text-[16px] text-[#627382] mt-4 text-center'>
              Your cart is currently empty. Browse products and add them!
            </p>
          </div>
        ) : (
          // Added Items List
          <div className='w-full space-y-4'>
            <h2 className="text-3xl font-bold mb-5">Selected Tools</h2>
            {addedItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm">
                <div className="flex items-center gap-4 text-start">
                  <img src={item.image} className="w-12 h-12 rounded-full" alt="" />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
                <button className="text-red-500 font-semibold">Remove</button>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}
export default Cart