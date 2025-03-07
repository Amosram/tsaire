import React, {useContext, useState} from 'react'
import {assets} from '../assets/assets'
import {NavLink, Link} from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { ProductsContext } from '../context/ProductsContext';




const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setshowSearch, getCartCount} = useContext(ProductsContext)

  return (
    <div className='flex items-center justify-between px-4 py-4 font-medium sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Navbar start */}
      <Link to='/' className='flex items-center text-gray-600'><img className='w-8 sm:w-12' src={assets.logo} alt="thinksmoothie logo"/>T'saire</Link>

      {/* Navbar middle */}
      <ul className='hidden sm:flex gap-5 text-lg text-gray-600 font-normal'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-300 hidden"></hr>
        </NavLink>
        <NavLink to='/products' className='flex flex-col items-center gap-1'>
          <p>Products</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-300 hidden"></hr>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-300 hidden"></hr>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-orange-300 hidden"></hr>
        </NavLink>
      </ul>

      {/* Navbar end */}
      <div className='flex items-center gap-6'>
        <div className="flex items-center gap-6">
          <Link to='/products'>
            <FiSearch onClick={()=>setshowSearch(true)} className='text-xl text-gray-600 cursor-pointer'/>
          </Link>
          
          <Link className="relative " to='/cart'>
            <CiShoppingBasket className='text-2xl mb-1'/>
            <p className="absolute right-[-5px] bottom-[13px] text-center w-4 leading-4 bg-[#FFAF00] text-black text-[10px] rounded-full aspect-ratio font-bold">
              {getCartCount()}
            </p>
          </Link>
          <div className="group relative hidden sm:flex">
            <Link to='/login'><p className='text-base cursor-pointer text-gray-200 font-normal rounded-2xl px-3 py-1 bg-black'>Sign in</p></Link>
          </div>
          <HiMiniBars3BottomRight onClick={()=>setVisible(true)} className='text-2xl cursor-pointer sm:hidden'/>
        </div>
        {/* sidebar menu for small screen */}
        <div className={`fixed top-0 right-0 bottom-0 overflow-hidden text-gray-200 bg-black max-h-screen transition-all ${visible ? " w-full h-[100vh]" : "w-0"} z-50`}>
          <div className="flex flex-col  text-gray-200">
            <div onClick={()=>setVisible(false)} className="flex items-center p-3 cursor-pointer ml-2">
              <MdClose className='text-xl'/>
              <p>Close</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/products'>Products</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/about'>About us</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/contact'>Contact</NavLink>
            <hr className='border-none w-full h-[0.5px] my-2 bg-gray-500'/>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/login'>Sign in</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar