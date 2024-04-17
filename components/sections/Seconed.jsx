import React from 'react'
import LogoThree from '@/components/three/Logo'
import PriceList from '@/components/ui/Pricelist'
import Prompt from '@/components/ui/Prompt'

const Seconed = () => {
  return (
    <div className='flex flex-col gap-8 overflow-hidden justify-center items-center w-full h-screen text-black bg-brGreen'>
      <PriceList/>
      <Prompt/>
      {/* <LogoThree/> */}
    </div>
  )
}

export default Seconed
