import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartitems contains product to add
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if found, increment quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    };

    // return new array with modified cart items
    return [...cartItems, { ...productToAdd, quantity: 1}];
};
const removeCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }
    return cartItems.map((cartItem) => 
    cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);

}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemsToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    },[cartItems])

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));

    }

    const removeItemsToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));

    }

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, removeItemsToCart, cartItems, cartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};