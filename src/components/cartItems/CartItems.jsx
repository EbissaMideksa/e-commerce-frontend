
import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { cartItems, all_product, removeFromCart, getTotalCartAmount,getTotalCartQuantity } = useContext(ShopContext);
  return (
    <div className='cart-items'>
      <div className="cart-items-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {all_product.map(product => {
        if (cartItems[product.id] > 0) {
          return (
            <div className="cart-item-row" key={product.id}>
              <img src={product.image} alt={product.name} className='cart-item-image' />
              <p>{product.name}</p>
              <p>${product.new_price.toFixed(2)}</p>
              <button className='cart-item-quantity'>{cartItems[product.id]}</button>
              <p>${(cartItems[product.id] * product.new_price).toFixed(2)}</p>
              <img
                src={remove_icon}
                className="cart-item-remove"
                onClick={() => removeFromCart(product.id)}
                alt="Remove"
              />
            </div>
          );
        }
        return null;
      })}
      
      {/* <div className="cartItems-down">
        <h1>Cart Total</h1>
        <div>
          <div className="cartItems-totalItem"> 
            <p>Subtotal</p>
            <p>${getTotalCartAmount().toFixed(2)}</p>
          </div>
          <div className="cartItems-totalItem"> 
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="cartItems-totalItem"> 
            <h3>Total</h3>
            <h3>${getTotalCartAmount().toFixed(2)}</h3>
          </div>
        </div>
        <button className='cartItems-checkout'>Proceed to Checkout</button>
      </div>
      <div className="cartItems-promo-code">
        <p>If you have a promo code, enter it here:</p>
        <div className='cartItems-promo-code-input'>
          <input type="text" placeholder="Promo code" />
          <button>Apply</button>
        </div>
      </div> */}

      <div className="cartItems-bottom-section">
          {/* ✅ Cart Total on the left */}
          <div className="cartItems-down">
            <h1>Cart Total</h1>
            
              <div className="cartItems-totalItem"> 
                <h4>Total Items</h4>
                <h4>{getTotalCartQuantity()}</h4>
              </div>


            <div>
              <div className="cartItems-totalItem"> 
                <p>Subtotal</p>
                <p>${getTotalCartAmount().toFixed(2)}</p>
              </div>
              <div className="cartItems-totalItem"> 
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <div className="cartItems-totalItem"> 
                <h3>Total</h3>
                <h3>${getTotalCartAmount().toFixed(2)}</h3>
              </div>
            </div>
            <button className='cartItems-checkout'>Proceed to Checkout</button>
          </div>

          {/* ✅ Promo Code on the right */}
          <div className="cartItems-promo-code">
            <p>If you have a promo code, enter it here:</p>
            <div className='cartItems-promo-code-input'>
              <input type="text" placeholder="Promo code" />
              <button>Apply</button>
            </div>
          </div>
      </div>

    </div>
  );
};

export default CartItems;
