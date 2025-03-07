import React, {useContext} from 'react'
import Hero from '../components/Hero'
import ExploreMenu from '../components/ExploreMenu'
import FeaturedProducts from '../components/FeaturedProducts'
import Policy from './Policy'
import NewsLetter from '../components/NewsLetter'
import { ProductsContext } from '../context/ProductsContext'

const Home = () => {
  const {useDocumentTitle} = useContext(ProductsContext);
  useDocumentTitle("Thinksmoothie | Home");
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-[100vh]'>
      <Hero/>
      <ExploreMenu/>
      <hr className='w-full border-none bg-gray-300 h-0.5'/>
      <FeaturedProducts/>
      <Policy/>
      <NewsLetter/>
    </div>
  )
}

export default Home