import React,{useState} from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

  const [state,setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

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
    await fetch('http://localhost:4000/login',{
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
        // Redirect or perform any other actions
        window.location.replace("/")
      } else {
        // Handle signup error
        alert(responseData.errors || "Signup failed");
      }
  }

   const signup=async () => {
    // Handle signup logic here
    let responseData;
    await fetch('http://localhost:4000/signup',{
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
        localStorage.setItem('token', responseData.token);
        // Redirect or perform any other actions
        window.location.replace("/")
      } else {
        // Handle signup error
        alert(responseData.errors || "Signup failed");
      }
  } 


 /*      const signup = async () => {
  try {
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if response status is OK (200-299)
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      alert(errorData?.errors || errorData?.message || `Signup failed with status ${response.status}`);
      return;
    }

    const data = await response.json();

    if (data.success) {
      localStorage.setItem('token', data.token);
      window.location.replace('/');
    } else {
      alert('Signup failed');
    }
  } catch (error) {
    console.error('Signup error:', error);
    alert('An unexpected error occurred during signup.');
  }
};
 */
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
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span></label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
