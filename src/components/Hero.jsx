import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
    <div className='hero h-96 flex items-center flex-col sm:flex-row border border-gray-400'>
      {/* Hero left */}
      <div className='w-full sm:w-1/2  flex items-center justify-center py-10 sm:py-0'>
        <div className='text-gray-200'>
          <div className='flex items-center gap-2'>
              <p className='font-medium text-sm md-text-base'>OUR BESTSELLING</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Refreshing Drinks</h1>
          <div className='flex items-center gap-2'>
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
       {/* hero right */}
       <img className='w-80 sm:w-1/2' src={assets.hero_img} alt=""/>
    </div>
  )
}

export default Hero