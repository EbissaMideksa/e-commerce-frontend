import React,{useState} from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const backendUrl = 'https://ecommerce-backend-production1.up.railway.app';


  const [state,setState] = useState('Login');
  const [agree, setAgree] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate=useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }; 



  const login=async () => {
    // Handle login logic here
    console.log('Login function called', formData);
     let responseData;
    await fetch(`${backendUrl}/login`,{
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => {
        responseData = data;
      });
      if(responseData.success){
        // Handle successful signup
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem("user-name", responseData.name);
        console.log('Login response:', responseData.name);

        // Redirect or perform any other actions
        //window.location.replace("/")
        navigate("/");
        
      } else {
        // Handle signup error
        alert(responseData.errors || "Signup failed");
      }
  }

   const signup=async () => {
    // Handle signup logic here
    let responseData;
    await fetch(`${backendUrl}/signup`,{
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => {
        responseData = data;
      });
      if(responseData.success){
        // Handle successful signup
        localStorage.setItem('auth-token', responseData.token);
        localStorage.setItem("user-name", responseData.name);
        console.log('Login response:', responseData.name);
        
        // Redirect or perform any other actions
        //window.location.replace("/")
        navigate("/");
      } else {
        // Handle signup error
        alert(responseData.errors || "Signup failed");
      }
  } 


return (
    <div className='login-signup'>
      <div className='login-signup-container'>  
        <h2>{state}</h2>
        <div className="loginsignup-fields">
          {state === 'Sign Up' ? <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Username" /> : null}
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
        </div>
        <button onClick={() => state === 'Sign Up' ? signup() : login()} >Continue</button>
        {state==='Sign Up'? <p className='loginsignup-login'>Already have an account? <span onClick={() => setState('Login')}>Login</span></p>
        :<p className='loginsignup-login'>Create an account? <span onClick={() => setState('Sign Up')}>Click here</span></p>}

        <div className="loginsignup-agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />

          <label htmlFor="agree">I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></label>
        </div>
       {/*   <button
          onClick={() => {
            if (!agree) {
              alert("You must agree to the Terms & Conditions and Privacy Policy.");
              return;
            }
            state === 'Sign Up' ? signup() : login();
          }}
        >
          Continue
        </button>

        {state === 'Sign Up'
          ? <p className='loginsignup-login'>Already have an account? <span onClick={() => setState('Login')}>Login</span></p>
          : <p className='loginsignup-login'>Create an account? <span onClick={() => setState('Sign Up')}>Click here</span></p>}
      */}
      </div>
    </div>
  )
}

export default LoginSignup


/* 
import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [agree, setAgree] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const login = async () => {
    console.log('Login function called', formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      localStorage.setItem("user-name", responseData.name);
      window.location.replace("/");
    } else {
      alert(responseData.errors || "Login failed");
    }
  };

  const signup = async () => {
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(response => response.json())
      .then(data => {
        responseData = data;
      });
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      localStorage.setItem("user-name", responseData.name);
      window.location.replace("/");
    } else {
      alert(responseData.errors || "Signup failed");
    }
  };

  // {/* ✅ Submit button triggers handleSubmit and works with Enter }
       
  // ✅ Handle form submission (triggered by Enter key or button click)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!agree && state === 'Sign Up') {
      alert("You must agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    if (state === 'Sign Up') {
      signup();
    } else {
      login();
    }
  };

  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h2>{state}</h2>

        
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {state === 'Sign Up' && (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>

            <button type="submit">Continue</button>
        </form>

        {state === 'Sign Up' ? (
          <p className='loginsignup-login'>
            Already have an account? <span onClick={() => setState('Login')}>Login</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an account? <span onClick={() => setState('Sign Up')}>Click here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />
          <label htmlFor="agree">
            I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
 */