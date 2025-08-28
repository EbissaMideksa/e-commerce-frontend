import React, { useEffect,useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {ShopContext} from '../../context/ShopContext'
import drop_down from '../Assets/drop_down.png'

const Navbar = () => {
  const [menu,setMenu] = React.useState('shop');
  const { getTotalCartQuantity } = useContext(ShopContext);
  const menuRef = React.useRef(null);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();


  const dropDown=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  useEffect(() => {
    const name = localStorage.getItem('user-name');
    if (name) setUserName(name);
  }, []);

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <img className="drop-down" onClick={dropDown} src={drop_down} alt="" />
      <ul ref={menuRef} className="nav-menu">
          <li onClick={() => setMenu('shop')}><Link to="/" style={{ textDecoration: 'none' }}>Shop {menu === 'shop'? <hr /> : null}</Link></li>
          <li onClick={() => setMenu('men')}><Link to="/mens" style={{ textDecoration: 'none' }}>Men {menu === 'men' && <hr />}</Link></li>
          <li onClick={() => setMenu('women')}><Link to="/womens" style={{ textDecoration: 'none' }}>Women {menu === 'women' && <hr />}</Link></li>
          <li onClick={() => setMenu('kids')}><Link to="/kids" style={{ textDecoration: 'none' }}>Kids {menu === 'kids' ? <hr /> : <></>}</Link></li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token') ?(
            <>
            <span className="nav-username">Hi, {userName}</span>
            <button onClick={() => {
              // Handle logout logic here
             /*  if (prompt("Are you sure you want to logout?")) */
                if (window.confirm("Are you sure you want to logout?")){ 
                localStorage.removeItem('auth-token');
                localStorage.removeItem('user-name');
                //window.location.replace("/");
                navigate("/cart");

              }
            }}>
              Logout
            </button>
          </>
         ):<Link to="/login"><button>Login</button></Link>}

           
        <Link to="/cart"><img src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartQuantity()}</div>
      </div>
    </div>
  )
}

export default Navbar
