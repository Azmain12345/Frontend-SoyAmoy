import { createContext, useEffect, useState } from "react";

// Create a CartContext using createContext
export const CartContext = createContext({});

// CartContextProvider component to provide cart functionality
export function CartContextProvider({children}) {
// State to store cart products
    const ls = typeof window !== "undefined" ? window.localStorage : null;
// State to store cart products
    const [cartProducts,setCartProducts] = useState([]);
// Save cartProducts to localStorage when it changes
    useEffect(() => {
        if (cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);
      // Load cartProducts from localStorage on component mount
    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    }, []);
      // Function to add a product to the cart
    function addProduct(productId) {
        setCartProducts(prev => [...prev,productId]);
    }
      // Function to remove a product from the cart
    function removeProduct(productId) {
        setCartProducts(prev => {
            const pos = prev.indexOf(productId);
            if (pos !== -1) {
                return prev.filter((value,index) => index !== pos);
            }
            return prev;
        });
    }
      // Function to clear the cart
    function clearCart() {
        setCartProducts([]);
    }
      // Provide the cart context value to children components
    return (
        <CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}