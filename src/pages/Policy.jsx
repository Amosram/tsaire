import React from 'react'
import { MdPolicy } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";



const Policy = () => {
  return (
    <div className='login flex flex-col shadow-sm rounded-[16px] sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 tet-xs mb-14 sm:text-sm md:text-base mt-20  text-gray-700]'>
      <div>
          <MdPolicy className='m-auto text-slate-700 text-4xl mb-3'/>
          <p className='text-lg font-semibold text-slate-800'>Easy exchange policy</p>
          <p className='text-base text-gray-900'>We offer hassle-free exchange policy</p>
      </div>
      <div>
          <SiTicktick className='m-auto text-slate-700 text-4xl mb-3'/>
          <p className='text-lg font-semibold text-slate-800'>Days return policy</p>
          <p className='text-base text-gray-900'>We provide 7 days free return policy</p>
      </div>
      <div>
          <RiCustomerService2Fill className='m-auto text-slate-700 text-4xl mb-3'/>
          <p className='text-lg font-semibold text-slate-800'>Best customer support</p>
          <p className='text-base text-gray-900'>We provide 24/7 custormer support </p>
      </div>
    </div>
  )
}

export default Policy