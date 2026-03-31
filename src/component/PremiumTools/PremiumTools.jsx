import React from 'react'
import ToolsHeader from './ToolsHeader'
import ToolsCards from './ToolsCards'

const PremiumTools = () => {
  return (
    <div className='container mx-auto py-25 px-5 md:px-20 flex flex-col items-center text-center gap-10'>
      <ToolsHeader/>
      <ToolsCards/>
    </div>
  )
}

export default PremiumTools
