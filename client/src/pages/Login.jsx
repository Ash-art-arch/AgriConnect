import React,{useState,useContext} from 'react'
import Navbar from '../components/Navbar'
import logbg from "../assets/loginbg.svg"
import "./login.css"
import { Link,useNavigate } from 'react-router-dom'
import { UserContext } from "../providers/userProvider.jsx";
const Login = ({role}) => {
  // Get the current URL
var currentURL = window.location.href;

// Replace 'login' with 'register'
var newURL = currentURL.replace('/login', '/register');

// Redirect to the new URL
const [email,setemail]=useState("")
const [password,setPassword]=useState("")
const {setUserInfo}=useContext(UserContext)
const navigate = useNavigate();
const handleSubmit=async (e)=>{
  e.preventDefault();
  console.log(email,password)
  const response = await fetch('http://localhost:8000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(response => response.json())
  console.log(response)
  if(response.success===true){
    setUserInfo(email)
    if(response.data.role==="farmer"){
     navigate("/dashboard")
    }
    else{
      navigate("/#market")
    }
  }
}

  return (
    <div className='login-main'>
        <Navbar/>
        <div className='bg-image' style={{ backgroundImage: `url(${logbg})` }}></div>
        <div className='login-container'>
                <div className='login-box'>
                    <h1>Log In</  h1>
                    <form onSubmit={handleSubmit}>
                <div className='email'>
                <i class="ri-user-line"></i>
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className='password'>
                <i class="ri-key-2-line"></i>
                <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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