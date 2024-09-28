import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext'
import Title from './Title';

const CartTotal = () => {
    const {currency, getTotalAmount, deliveryFee} = useContext(ProductsContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"TOTALS IN "} text2={"CART"}/>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getTotalAmount()}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{currency} {deliveryFee}.00</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getTotalAmount() === 0 ? 0 :getTotalAmount() + deliveryFee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal