import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import Newsletter from '../components/NewsLetter'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom'


const Contact = () => {
  return (
    <div className='min-h-[100vh] border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='mt-5 flex flex-col items-center mb-14 '>
        <Title text1={'CONTACT'} text2={"US"}/>
        <div className='mt-10 flex flex-col items-center sm:flex-row gap-10 px-8 py-8 login shadow rounded-[15px]'>
          <img src={assets.contact_img} className='w-80 rounded-[15px]' alt=""/>
          <div className='flex flex-col gap-4'>
            <h1>Our Address:</h1>
            <div>
              <p className='flex items-start gap-2 text-gray-800'>
                <FaLocationDot className='mt-1'/>
                Mombasa EMEA, 80100.<br/>
                Haile Selassie Rd
              </p>
            </div>

            <div className='flex flex-col gap-4'>
              <h1>Quick call or Email Us:</h1>
              <div>
                <p className='flex items-center gap-2 text-gray-800'>
                  <FaPhoneAlt className='text-sm'/>
                  +254 793810919
                </p>
                <p className='flex items-center gap-2 text-gray-800'>
                  <FaEnvelope className='text-sm mt-1'/>
                  thinksmoothie@gmail.com
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              <h1>Follow us:</h1>
              <div className='flex gap-4'>
                <Link to='https://www.facebook.com/thinksmoothie' target='_blank'><FaFacebook className='hover:scale-110 duration-100 text-2xl cursor-pointer text-gray-700'/></Link>
                <Link to='https://www.instagram.com/thinksmoothie/' target='_blank'><FaInstagram className='hover:scale-110 duration-100 text-2xl cursor-pointer text-gray-700'/></Link>
                <Link to='https://www.linkedin.com/company/thinksmoothie/' target='_blank'><FaLinkedin className='hover:scale-110 duration-100 text-2xl cursor-pointer text-gray-700'/></Link>
                <Link to='https://x.com/thinksmoothie' target='_blank'><FaXTwitter className='hover:scale-110 duration-100 text-2xl cursor-pointer text-gray-700'/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Contact