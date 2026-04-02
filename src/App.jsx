import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Info from './component/Info/Info'
import PremiumTools from './component/PremiumTools/PremiumTools'
import ThreeeSteps from './component/ThreeSteps/ThreeeSteps'
import Pricing from './component/Pricing/Pricing'
import CTA from './component/CTA/CTA'
import Footer from './component/Footer/Footer'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const App = () => {

  const [AddToCart, setAddToCart] = useState([]);


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
  return (
    <div >
      <Navbar cartItem={AddToCart.length}/>
      <Banner />
      <Info/>

      <PremiumTools AddToCart={AddToCart} handleAddToCart={handleAddToCart} setAddToCart={setAddToCart}/>

      <ThreeeSteps/>
      <Pricing />
      <CTA />
     <Footer/>
     <ToastContainer />
    </div>
  )
}

export default App
