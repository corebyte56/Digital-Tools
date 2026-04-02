import React from 'react'
import PricingHeader from './PricingHeader'
import PricingCards from './PricingCards'

const Pricing = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <PricingHeader />
      <PricingCards/>
    </div>
  )
}

export default Pricing
