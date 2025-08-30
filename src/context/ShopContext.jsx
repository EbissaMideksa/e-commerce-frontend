import React, { createContext,useEffect,useState } from "react";
//import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);
const backendUrl = 'https://ecommerce-backend-production1.up.railway.app';




const ShopContextProvider = (props) => {

 
  const [cartItems, setCartItems] = useState({});
  const [all_product, setAllProducts] = useState([]);



    const getDefaultCart = (products) => {
      let cart = {};
      for (let i = 0; i < products.length; i++) {
        cart[products[i].id] = 0;
      }
      return cart;
    };

 
    useEffect(() => {
      fetch(`${backendUrl}/all_products`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success && data.products) {
            setAllProducts(data.products);

            if (localStorage.getItem("auth-token")) {
              // ✅ logged in: fetch cart data from backend
              fetch(`${backendUrl}/getcartdata`, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "auth-token": localStorage.getItem("auth-token"),
                  "Content-Type": "application/json",
                },
                body: ""
              })
                .then((response) => response.json())
                .then((data) => {
                  setCartItems(data.cartData);
                });
            } else {
              // ❌ not logged in: reset cart
              setCartItems(getDefaultCart(data.products));
            }
          }
        });
    }, []);


  //  Add to cart function
  /*
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    //  Notify backend
    if (localStorage.getItem("auth-token")) {
      fetch(`${backendUrl}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Added to cart (backend):", data);
        });
    }
  };


  const removeFromCart = (itemId) => {
    if (window.confirm("Are you sure you want to remove this item from the cart?")) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 0,
      }));
    }

    //Notify Backend
     if (localStorage.getItem("auth-token")) {
      fetch(`${backendUrl}/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Removing from cart (backend):", data);
        });
    }
  };
  */
 //  Add to cart function
const addToCart = (itemId) => {
  if (!localStorage.getItem("auth-token")) {
    alert("⚠️ Please log in to add items to your cart.");
    return;
  }

  setCartItems((prev) => ({
    ...prev,
    [itemId]: prev[itemId] + 1,
  }));

  //  Notify backend
  fetch(`${backendUrl}/addtocart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "auth-token": localStorage.getItem("auth-token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Added to cart (backend):", data);
    });
};

//  Remove from cart function
const removeFromCart = (itemId) => {
  if (!localStorage.getItem("auth-token")) {
    alert("⚠️ Please log in to remove items from your cart.");
    return;
  }

  if (window.confirm("Are you sure you want to remove this item from the cart?")) {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));

    // Notify backend
    fetch(`${backendUrl}/removefromcart`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Removed from cart (backend):", data);
      });
  }
};


  //  Calculate total cart amount
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
    getTotalCartAmount, 
    getTotalCartQuantity, //  Expose functions and variables to context
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
