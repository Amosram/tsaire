import React, {useState, useEffect, useContext} from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Title from '../components/Title'
import ProductItems from '../components/ProductItems'
import { ProductsContext } from '../context/ProductsContext';

const AllProducts = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const {products, search, showSearch} = useContext(ProductsContext)
  const [category, setCategory] = useState([])

  const handleClick = () => {
    setShowFilter(!showFilter)
  }

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  } 

  
  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  }

  useEffect(()=> {
    applyFilter();
  }, [category, search, showSearch])


  return (
    <div className='px-4 sm:px-[5vw] mb-40 md:px-[7vw] lg:px-[9vw] flex flex-col min-h-[100vh] sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={handleClick} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          CATEGORIES
          <FaAngleRight className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`}/>
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value={'smoothies'}/>Smoothies
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value={'shakes'}/>Shakes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value={'salad'}/>Salad
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value={'juice'}/>Juice
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value={'mbogamat'}/>Mbogamat
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" onChange={toggleCategory} value={'coconut'}/>Coconut
            </p>
          </div>
        </div>
      </div>
      {/*Product side */}
      <div className='flex-1'>
        <div className='flex justify-center items-center h-10 text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PRODUCTS'}/>
        </div>
         {/* Mapping products */}
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=> (
              <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default AllProducts