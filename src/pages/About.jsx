import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div className='min-h-[100vh] border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-40'>
      <div className='flex flex-col items-center w-full mt-4'>
        <Title text1={"ABOUT"} text2={"THINKSMOOTHIE"}/>
        <div className='flex flex-col mt-3 gap-12 border p-4'>
          <div className='flex flex-col md:flex-row gap-10'>
            <img src={assets.about_img_2} alt="" className='w-72' />
            <div className='flex flex-col gap-4'>
              <h1 className='text-gray-800 text-2xl'>Our Story</h1>
              <p className='text-base text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente quia aliquam in corporis! Qui accusantium voluptate eos eligendi rerum harum ea exercitationem labore perspiciatis ratione illum facere perferendis dolores natus, dolorum ex, corporis ipsam fugit tempore unde ducimus commodi! Assumenda ducimus beatae, ut ex dignissimos incidunt! Dolorum, porro. Aperiam?</p>
              <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni voluptate consequuntur quibusdam laborum iste quisquam similique temporibus itaque consequatur?</p>
              <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas esse itaque repellendus eveniet possimus. Officia expedita vel qui vitae necessitatibus soluta quisquam nobis nostrum asperiores cum</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-gray-800 text-2xl'>Our Mission</h1>
              <p className='text-base text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente quia aliquam in corporis! Qui accusantium voluptate eos eligendi rerum harum ea exercitationem labore perspiciatis ratione illum facere perferendis dolores natus, dolorum ex, corporis ipsam fugit tempore unde ducimus commodi! Assumenda ducimus beatae, ut ex dignissimos incidunt! Dolorum, porro. Aperiam?</p>
              <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni voluptate consequuntur quibusdam laborum iste quisquam similique temporibus itaque consequatur?</p>
              <p className='text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas esse itaque repellendus eveniet possimus. Officia expedita vel qui vitae necessitatibus soluta quisquam nobis nostrum asperiores cum</p>
            </div>
            <img src={assets.about_img_3} alt="" className='w-72' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About