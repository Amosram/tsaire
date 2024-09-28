import React from 'react'
import {menu} from '../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='flex flex-col justify-center gap-4 mt-12 mb-12' >
        <div>
            <h2 className='text-3xl'>Explore Our Menu</h2>
            <p className='text-gray-700'>Choose from our diverse menu featuring a delactable array of delicacies</p>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 w-full justify-between gap-4 items-center'>
            {
                menu.map((item, index)=>(
                    <div key={index} className='flex flex-col bg-white py-4 gap-1 border items-center shadow'>
                        <img className='w-10 sm:w-12 sm:h-12 h-10 rounded-full' src={item.img} alt=""/>
                        <p className='text-gray-500 text-sm sm:text-base'>{item.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ExploreMenu