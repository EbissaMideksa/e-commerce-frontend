import React from 'react'
import './Footer.css'
import footer_Logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png' 
import whatsapp_icon from '../Assets/whatsapp_icon.png' 

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_Logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
       <ul className="footer-link">
        <li>About Us</li>
        <li>Contact</li>
        <li>Offices</li>
        <li>Products</li>
        <li>Privacy Policy</li> 
       </ul>
       <div className="footer-social-icon">
          <div className="footer-icons">
              <img src={instagram_icon} alt="Instagram" />
          </div>
            <div className="footer-icons">
              <img src={pinterest_icon} alt="Pinterest" />
          </div>
          <div className="footer-icons">
              <img src={whatsapp_icon} alt="WhatsApp " />
          </div>
       </div>
       <hr className="footer-divider" />

       <div className="footer-copyright">
         <p>© 2025 SHOPPER. All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer
