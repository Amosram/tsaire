import React, { useContext, useState, useEffect } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'
import { ProductsContext } from '../context/ProductsContext'

const RelatedProducts = ({category}) => {
  const {products} = useContext(ProductsContext)
  const [related, setRelated] = useState([])

  useEffect(()=> {
    if (products.length > 0) {
        let productsCopy = products.slice();
        productsCopy = productsCopy.filter((item)=>category===item.category);

        setRelated(productsCopy.slice(0, 5));
    }
  }, [products])

  return (
    <div className='my-20'>
      <div className='text-center text-3xl py-2'>
          <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 justify-center h-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 w-full'>
          {related.map((item, index)=>(
              <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))}
      </div>
  </div>
  )
}

export default RelatedProducts