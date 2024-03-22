import React from 'react'
import Navbar from '../components/Navbar'
import regbg from "../assets/regbg.svg"
import { useState } from 'react'
import "./register.css"
import { Link } from 'react-router-dom'
const Register = () => {
      // Get the current URL
var currentURL = window.location.href;

var role = currentURL.split("?role=")[1];
console.log(role)
// Replace 'login' with 'register'
var newURL = currentURL.replace('/register', '/login');
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
// const [role,setRole]=useState(temp_role)

const handleSubmit= async (e)=>{
  e.preventDefault()
  console.log(name,email,password)
  const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name,
          email,
          password,
          role
      })
  })
  console.log(response)
}

  return (
    <div className='register' >
        <Navbar/>
        <div className='bg-image' style={{ backgroundImage: `url(${regbg})` }}></div>
        <div className='register-container'>

            <div className='register-box'>
                <h1>Register</h1>
                <div className='form'>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <input type="text" placeholder='Name'value={name} onChange={(e)=>setName(e.target.value)} />
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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