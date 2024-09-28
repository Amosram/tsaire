import React, {useContext} from 'react'
import { ProductsContext } from '../context/ProductsContext'
import {Link} from 'react-router-dom'

const ProductItems = ({id,name, image, price}) => {
  const {currency} = useContext(ProductsContext)
  return (
    <Link className='text-gray-700 cursor-pointer shadow mb-1' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image} alt=""/>
        </div>
        <p className='pt-3 pb-1 text-sm pl-2 uppercase'>{name}</p>
        <p className='text-sm font-medium mb-2 pl-2'>{currency} {price}.00</p>
    </Link>
  )
}

export default ProductItems