import React from 'react'
import Navbar from '../components/Navbar'
import logbg from "../assets/loginbg.svg"
import "./login.css"
import { Link } from 'react-router-dom'
const Login = ({role}) => {
  // Get the current URL
var currentURL = window.location.href;

// Replace 'login' with 'register'
var newURL = currentURL.replace('/login', '/register');

// Redirect to the new URL


  return (
    <div className='login-main'>
        <Navbar/>
        <div className='bg-image' style={{ backgroundImage: `url(${logbg})` }}></div>
        <div className='login-container'>
                <div className='login-box'>
                    <h1>Log In</  h1>
                    <form>
                <div className='email'>
                <i class="ri-user-line"></i>
                <input type="email" placeholder='Email' />
                </div>
                <div className='password'>
                <i class="ri-key-2-line"></i>
                <input type="password" placeholder='Password' />
                </div>
                <div className='forgotdiv'>
                <a href="/forgot" className='forgot'>Forgot Your Password?</a>
                </div>
              
                <button>Login</button>
                <p>Don't have an account? <Link to={newURL} className='login-a'>Register</Link></p>
              </form>
                </div>
        </div>
    </div>
  )
}

export default Login