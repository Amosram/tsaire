import React, { useContext, useState, useEffect } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import ProductItems from '../components/ProductItems'
import Title from './Title'

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts ] = useState([])
  const {products} = useContext(ProductsContext)

  useEffect(() => {
    setFeaturedProducts(products.slice(0, 10));
  },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'FEATURED'} text2={"PRODUCTS"}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatum ducimus tempore</p>
      </div>
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {featuredProducts.map((item ,index) => (
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
      </div>
  </div>
  )
}

export default FeaturedProducts