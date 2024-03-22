import React from 'react'
import Navbar from '../components/Navbar'
import regbg from "../assets/regbg.svg"
import "./register.css"
const Register = () => {
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
                        <p>Already have an account? <a href="/login" className='login-a'>Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register