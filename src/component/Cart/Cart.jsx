import React from "react";
import Empty from "../../assets/empty.png";

const Cart = ({ addedItems, handleRemoveFromCart }) => {



const total = (addedItems || []).reduce(
  (sum, item) => sum + Number(item.price),
  0
);

  return (
    <div className="flex flex-col gap-5 items-center border border-gray-200 py-10 px-8 rounded-2xl shadow-xl ">
      {addedItems && addedItems.length > 0 ? (
        <div className="w-full space-y-4">
          <h1 className="text-3xl font-bold text-start mb-4">
            Your Selected Tools
          </h1>

          {addedItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 rounded-2xl shadow-xl bg-[#F9FAFC] hover:shadow-2xl hover:scale-105 hover:-translate-y-1 duration-200 cursor-pointer border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full border p-1"
                  alt={item.title}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold">{item.title}</p>

                <p className="font-bold text-gray-400">${item.price}</p>
                </div>
              </div>

              <p className="text-red-500 font-bold hover:text-red-700"
               onClick={() => handleRemoveFromCart(item)}>
                Remove
                
              </p>


            </div>
          ))}

          {/* total */}

          <div className="flex flex-col pt-8 px-6 mt-4">
            <div className="flex justify-between">
              <p className="text-[#627382]">Total :</p>
              <h3 className="text-2xl text-[#101727] font-bold">${total}</h3>
            </div>
            <button className="mt-3 text-white w-full text-[10px] md:text-[16px] font-extrabold md:font-semibold bg-linear-to-l from-[#9514FA] to-[#4F39F6] border border-[#3B82F6] py-3 px-4 rounded-3xl cursor-pointer drop-shadow-xl
          hover:bg-linear-to-l hover:from-[#9514FA] hover:to-[#4F39F6] hover:bg-clip-text hover:text-transparent hover:scale-105 hover:-translate-y-1 duration-200 active:scale-95 active:translate-y-0">
            Proceed to Checkout
            </button>
          </div>


        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col gap-5 items-center">
          <img src={Empty} className="w-30 md:w-50" alt="Empty Cart" />
          <h1 className="text-5xl md:text-7xl font-extrabold">Your Cart</h1>
          <p className="text-[16px] text-[#627382] mt-4 text-center">
            Your cart is currently empty. Browse our premium digital tools and
            add them!
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
