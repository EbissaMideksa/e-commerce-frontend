import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import dull_icon from '../Assets/star_dull_icon.png'



const ProductDisplay = (props) => {
  const { product } = props;
  return (
   /*  <div className='product-display'>
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
       <div className="product-display-right">
         <h2>{product.name}</h2>
         <p>{product.description}</p>
         <div className="product-display-right-star">
           <img src={star_icon} alt="Star" />
           <img src={star_icon} alt="Star" />
           <img src={star_icon} alt="Star" />
           <img src={star_icon} alt="Star" />
           <img src={dull_icon} alt="Dull Star" />
           <p>{product.rating} / 122</p>
         </div>
         <div className="productdisplay-right-price">
           <div className="productdisplay-right-price-old">
             <span>${product.old_price}</span>
           </div>
           <div className="productdisplay-right-price-new">
             <span>${product.new_price}</span>
           </div>
           <div className="productdisplay-right-description">
            <p>A light weighted, usually knitted pullover shirt, 
              perfect for layering  and with a stylish design, worn 
              as an under shirt or outer garment</p>
           </div>
           <div className="productdisplay-right-size">
            <p>Select Size:</p>
            <div className="productdisplay-right-size-options">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
              <span>Extra Large</span>
            </div>
           <button>Add to Cart</button>
           </div>
           <p className="productdisplay-right-size-category"><><span>Women: <span>T-shirt, Crop Top</span> </span> </></p>
           <p className="productdisplay-right-size-category"><><span>Tags: <span>Modern, Latest</span> </span> </></p>
         </div>
       </div>
    </div> */
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
      <button className="add-to-cart-btn">ADD TO CART</button>
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
