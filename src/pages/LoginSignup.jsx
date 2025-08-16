import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>  
        <h2>Sign Up</h2>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button >Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
