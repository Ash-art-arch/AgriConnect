import React from 'react'
import "./nav.css"
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo'><h1>Agri<span className='connect'>Connect</span></h1></div>
        <div className='menu'>
            <a href="/">Menu</a>
            <a href="#market">Market Place</a>
            <a href="">Service</a>
         </div>
        <div className='login'>
            <button onClick={() => window.location.href = "/login"}>Log In</button>
        </div>
    </div>
  )
}

export default Navbar