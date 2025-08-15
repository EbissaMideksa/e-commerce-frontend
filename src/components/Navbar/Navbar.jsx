import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu,setMenu] = React.useState('shop');
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
          <li onClick={() => setMenu('shop')}><Link to="/" style={{ textDecoration: 'none' }}>Shop {menu === 'shop'? <hr /> : null}</Link></li>
          <li onClick={() => setMenu('men')}><Link to="/mens" style={{ textDecoration: 'none' }}>Men {menu === 'men' && <hr />}</Link></li>
          <li onClick={() => setMenu('women')}><Link to="/womens" style={{ textDecoration: 'none' }}>Women {menu === 'women' && <hr />}</Link></li>
          <li onClick={() => setMenu('kids')}><Link to="/kids" style={{ textDecoration: 'none' }}>Kids {menu === 'kids' ? <hr /> : <></>}</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">59</div>
      </div>
    </div>
  )
}

export default Navbar
