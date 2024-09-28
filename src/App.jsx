import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/AllProducts'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Login from './pages/Login'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <div className='min-h-[100vh] w-full'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="orders" element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App