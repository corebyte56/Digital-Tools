import React, { Suspense, useEffect, useState } from "react";
import ToolsHeader from "./ToolsHeader";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PremiumTools = () => {
  const [IsActive, setIsActive] = useState("products");
  const [showData, setShowData] = useState([]);
  const [AddToCart, setAddToCart] = useState([]);

  // Fetch data from Tools.json
  const handleData = async () => {
    try {
      const response = await fetch("/Tools.json");
      const data = await response.json();
      setShowData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  // Add to cart function
  const handleAddToCart = (product) => {
    const isExist = AddToCart.find((item) => item.id === product.id);

    if (!isExist) {
      setAddToCart([...AddToCart, product]);
      toast("Product added to cart!");
    } else {
      toast("Already in cart!");
    }
    
  };

  // Remove from cart function
  const handleRemoveFromCart = (product) => {
    const updatedCart = AddToCart.filter((item) => item.id !== product.id);
    setAddToCart(updatedCart);
    toast("Product removed")
  };

  return (
    <div className="py-20">
      {/* Header */}
      <ToolsHeader
        IsActive={IsActive}
        setIsActive={setIsActive}
        showData={showData}
        CartCount={AddToCart.length}
      />

      {/* Content */}

      <div className="mt-10 container mx-auto">
        {IsActive === "products" ? (
          <Cards showData={showData} handleAddToCart={handleAddToCart} />
        ) : (
          <Cart addedItems={AddToCart} handleRemoveFromCart={handleRemoveFromCart} />
        )}
      </div>
    </div>
  );
};

export default PremiumTools;
