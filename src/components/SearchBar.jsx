import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import { useLocation } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const SearchBar = () => {
  const { search, showSearch, setSearch, setshowSearch } = useContext(ProductsContext)
  const location = useLocation( );
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if (location.pathname.includes("products")) {
        setVisible(true);
    } else {
        setVisible(false)
    }
  },[location])

  return showSearch && visible ? (
    <div className="flex items-center justify-center border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="search for products"  className="flex-1 outline-none bg-inherit text-sm"/>
        <FiSearch className='text-gray-600'/>
      </div>
      <MdClose onClick={()=>setshowSearch(!showSearch)} className='inline text-gray-600 cursor-pointer text-xl'/>
    </div>
  ) : null;
};

export default SearchBar