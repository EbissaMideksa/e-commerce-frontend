import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter">
        <h1>Get Exclusive offers on your mail</h1>
        <p>Subscribe to our News Letter and get updated</p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
