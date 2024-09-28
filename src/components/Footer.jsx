import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' bg-black text-gray-200 px-4 sm:px-24 w-full'>
       <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 text-sm py-6 mb-10'>
            <div>
                <img src={assets.logo} alt=" " className='mb-5 w-10'/>
                <p className='w-full md:w-2/3 text-base text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia aliquam neque excepturi harum fugiat perspiciatis optio! Voluptate.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
                <ul className='flex flex-col gap-1 text-base text-gray-400'>
                    <Link to='/' className='hover:text-gray-200 duration-150'><li>Home</li></Link>
                    <Link to='/about' className='hover:text-gray-200 duration-150'><li>About Us</li></Link>
                    <Link to='/products' className='hover:text-gray-200 duration-150'><li>All Products</li></Link>
                    <Link to='#' className='hover:text-gray-200 duration-150'><li>Privacy Policy</li></Link>
                 
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-base text-gray-400'>
                    <li className='flex items-center gap-2'>
                        <FaPhoneAlt className=' text-sm'/>
                       <p>+254 752943240</p>
                    </li>
                    <li className='flex items-center gap-2'>
                        <FaEnvelope className=' text-sm'/>
                       <p>thinksmoothie@gmail.com</p>
                    </li>
        
                </ul>
            </div>
        </div>

        <div>
            <hr className='border-none w-full h-[1px] bg-gray-700'/>
            <p className='py-5 text-sm text-center  text-gray-400'>&copy;2024 thinksmoothie.com All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer