import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Info from './component/Info/Info'
import PremiumTools from './component/PremiumTools/PremiumTools'
import ThreeeSteps from './component/ThreeSteps/ThreeeSteps'
import Pricing from './component/Pricing/Pricing'



const App = () => {
  return (
    <div >
      <Navbar />
      <Banner />
      <Info/>
      <PremiumTools/>
      <ThreeeSteps/>
      <Pricing />
    </div>
  )
}

export default App
