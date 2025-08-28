import React,{useContext,useState} from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext'
import star_icon from '../Assets/star_icon.png'
import dull_icon from '../Assets/star_dull_icon.png'



const ProductDisplay = (props) => {
  const {addToCart} = useContext(ShopContext);
  const { product } = props;
  const [showNotification, setShowNotification] = useState(false);

  return (
    

    <div className='product-display'>
  {/* Left: Thumbnails + Main Image */}
 

  <div className="product-display-left">
    <div className="product-display-img-list">
      <img src={product.image} alt={product.name} />
      <img src={product.image} alt={product.name} />
      <img src={product.image} alt={product.name} />
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product-display-img">
      <img className='main-image' src={product.image} alt={product.name} />
    </div>
  </div>

  {/* Right: Product Details */}
  <div className="product-display-right">
    <h2>{product.name}</h2>
    <div className="product-display-right-star">
      <img src={star_icon} alt="Star" />
      <img src={star_icon} alt="Star" />
      <img src={star_icon} alt="Star" />
      <img src={star_icon} alt="Star" />
      <img src={dull_icon} alt="Dull Star" />
      <p>({product.rating || 122})</p>
    </div>

    <div className="productdisplay-right-price">
      <div className="productdisplay-right-price-old">${product.old_price}</div>
      <div className="productdisplay-right-price-new">${product.new_price}</div>
    </div>

    <p className="productdisplay-right-description">
      A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
    </p>

    <div className="productdisplay-right-size">
      <p>Select Size:</p>
      <div className="productdisplay-right-size-options">
        <span>S</span>
        <span>M</span>
        <span>L</span>
        <span>XL</span>
        <span>XXL</span>
      </div>
       {showNotification && (
          <div className="cart-notification">
            ✅ Added to cart!
          </div>
          )}
     <button
        onClick={() => {
          addToCart(product.id);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 2000); // hide after 2s
        }}
        className="add-to-cart-btn"
      >
        ADD TO CART
      </button>
    </div>

    <p className="productdisplay-right-size-category">
      Category: <span>Women, T-shirt, Crop Top</span>
    </p>
    <p className="productdisplay-right-size-category">
      Tags: <span>Modern, Latest</span>
    </p>
  </div>
</div>

  )
}

export default ProductDisplay
