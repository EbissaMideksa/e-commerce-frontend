import React, { createContext,useEffect,useState } from "react";
//import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);



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
    fetch("http://localhost:4000/all_products")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.products) {
          setAllProducts(data.products);
          setCartItems(getDefaultCart(data.products));
          const kidsProducts = data.products.filter((p) => p.category === "kids");
          console.log("KidsProducts:", kidsProducts);

          if(localStorage.getItem("auth-token")) {
            fetch("http://localhost:4000/getcartdata", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "auth-token": `${localStorage.getItem("auth-token")}`,
                "Content-Type": "application/json",
              },
              body: "" //JSON.stringify({}),
            })
              .then((response) => response.json())
              .then((data) => {
                  setCartItems(data.cartData);
              });
          }
        }
      });
  }, []);
 

//console.log(JSON.stringify(all_product, null, 2)); // Pretty

 /*  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  }; */

  // ✅ Add to cart function
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));

    // ✅ Notify backend
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
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
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));

    //Notify Backend
     if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
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
