import React, { createContext,useState } from "react";
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[all_product[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  // ✅ Calculate total cart amount
  const getTotalCartAmount = () => {
    let total = 0;
    for (let product of all_product) {
      const quantity = cartItems[product.id];
      if (quantity > 0) {
        total += product.new_price * quantity;
      }
    }
    return total;
  };
  const getTotalCartQuantity = () => {
    let totalQuantity = 0;
    for (const itemId in cartItems) {
      if(cartItems[itemId]>0){
        totalQuantity += cartItems[itemId];

      }
      
    }
    return totalQuantity;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount, // ✅ Expose function to context
    getTotalCartQuantity, // ✅ Expose function to context
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
