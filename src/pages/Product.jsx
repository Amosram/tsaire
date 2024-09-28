import React, { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {ProductsContext} from '../context/ProductsContext';
import { FaStar } from "react-icons/fa";
import RelatedProducts from '../components/RelatedProducts'


const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ProductsContext)
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === Number(productId)) {
        setProductData(item);
        setImage(item.image);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t pt-10 min-h-[100vh] transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
       {/* Product data */}
       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
            <div className="w-full sm:w-[80%]">
              <img src={image} alt="" className="w-full h-auto"/>
            </div>
          </div>
          {/* Product Information */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex h-6 items-center gap-1 mt-2">
              <FaStar className='text-orange-500'/>
              <FaStar className='text-orange-500'/>
              <FaStar className='text-orange-500'/>
             <FaStar className='text-orange-500'/> 
             <FaStar className='text-orange-200'/> 
              <p className="pl-2">(127)</p>
            </div>
            <p className="mt-5 text-2xl font-medium">{currency} {productData.price}.00</p>
            <p className="mt-5 text-gray-500 md:w-4/5 mb-6">{productData.description}</p>
            <button onClick={()=>addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
            <hr className="mt-8 sm:w-4/5"/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product</p>
              <p>Cash on delivery is available for this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
        <RelatedProducts category={productData.category}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;