import { createContext, useState } from "react";
import {products} from '../assets/assets'
import {useNavigate} from 'react-router-dom'


export const ProductsContext = createContext();
   

const ProductsContextProvider = (props) => {
    const currency = 'KES'
    const deliveryFee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setshowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
    
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }
   
    const getCartCount = () => {
        let totalCount = 0;
        
        for (const items in cartItems) {
            try {
                if (cartItems[items] > 0) {
                    totalCount += cartItems[items];
                }
            } catch (error) {
                console.log(error)
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity;
        setCartItems(cartData); 
    }

    const getTotalAmount = () => {
        let totalAmont = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product)=> product._id == items);
            try {
                if (cartItems[items]) {
                    totalAmont += itemInfo.price * cartItems[items];
                }
            } catch (error) {
                console.log(error)
            }
            console.log(typeof(items));
        }
        
        return totalAmont;
    }

    const value = {
        products,
        currency,
        search,
        showSearch,
        cartItems,
        deliveryFee,
        navigate,
        setSearch,
        setshowSearch,
        addToCart,
        getCartCount,
        updateQuantity,
        getTotalAmount
    }
    
    return (
        <ProductsContext.Provider value={value}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;