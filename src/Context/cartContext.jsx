import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../Product-Data/data.json";
import { cartReducer } from "../Reducers/cartReducer";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const initialValue = {
    products : data,
    saveLaterItems : [],
    cartItems : [],
    totalPrice : 0,
}

const CartProvider = ({children}) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, initialValue);


    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, useCart};