import React, { useContext, useEffect, useState } from 'react'
import {ProductsContext} from '../context/ProductsContext'
import Title from '../components/Title'
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";
import CartTotal from '../components/CartTotal';


const Cart = () => {
  const {products, currency, cartItems, updateQuantity, navigate, useDocumentTitle} = useContext(ProductsContext);
  const [cartData, setCartData] = useState([]);
  useDocumentTitle("Thinksmoothie | Your Cart");


  useEffect(()=> {
    const tempData = [];
    for (const items in cartItems ) {
      if (cartItems[items]>0){
        tempData.push({
          _id:items,
          quantity:cartItems[items]
        })
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return ( 
    <div className='border-t flex flex-col text-center  py-14 min-h-[80vh] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative w-full'>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"}/>
      </div>

      {cartData.length === 0 ? 
        <div className='flex items-center justify-center mx-auto my-10 bg-gray-100 px-10 py-9'>
          <p className='text-2xl text-gray-700'>Your Cart is empty</p>
          <IoIosCart className='text-4xl text-yellow-500'/>
        </div>
        :
        <div>
          {
            cartData.map((item, index) => {
              const itemData = products.find((product)=>Number(product._id) === Number(item._id));
              return (
                <>{ item.length === 0?<p>Your cart is empty</p>:
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className='flex items-start gap-6'>
                    <img className='w-10 sm:w-15 sm:w-20' src={itemData.image}/>
                    <div>
                      <p className='text-xs sm:text-lg font-medium'>{itemData.name}</p>
                      <div className='flex items-center gap-5 mt-2'>
                          <p>{currency} {itemData.price * item.quantity}.00</p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(e)=>e.target.value ==='' || e.target.value === 0 ? null: updateQuantity(item._id, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 mr-4 sm:mr-2' type='number' min={1} defaultValue={item.quantity}/>
                  <RiDeleteBin6Line onClick={()=>updateQuantity(item._id, 0)} className="text-xl cursor-pointer"/>
                </div>
                }
                </>
              )
            })
          }
        </div>
      }

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/placeorder')} className='w-full bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Cart