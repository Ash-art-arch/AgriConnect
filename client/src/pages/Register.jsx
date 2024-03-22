import React from 'react'
import Navbar from '../components/Navbar'
import regbg from "../assets/regbg.svg"
import "./register.css"
import { Link } from 'react-router-dom'
const Register = () => {
      // Get the current URL
var currentURL = window.location.href;

// Replace 'login' with 'register'
var newURL = currentURL.replace('/register', '/login');
  return (
    <div className='register' >
        <Navbar/>
        <div className='bg-image' style={{ backgroundImage: `url(${regbg})` }}></div>
        <div className='register-container'>

            <div className='register-box'>
                <h1>Register</h1>
                <div className='form'>
                    <form >
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <button>Register</button>
                        <p>Already have an account? <Link to={newURL} className='login-a'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register