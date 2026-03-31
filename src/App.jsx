import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Banner from './component/Banner/Banner'
import Info from './component/Info/Info'
import PremiumTools from './component/PremiumTools/PremiumTools'


const App = () => {
  return (
    <div >
      <Navbar />
      <Banner />
      <Info/>
      <PremiumTools/>
    </div>
  )
}

export default App
