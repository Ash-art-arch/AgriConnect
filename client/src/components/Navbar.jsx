import React, { useEffect,useContext } from 'react'
import "./nav.css"
import { UserContext } from '../providers/userProvider.jsx';
const Navbar = () => {
  // useEffect(() => {
  //   fetch
  // })
  const {setUserInfo,userInfo}=useContext(UserContext)
  const username=userInfo
  const handleLogout=async ()=>{
    const response = await fetch('http://localhost:8000/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        
      })
    }).then(response => response.json())
    console.log(response)
    if(response.success===true){
      setUserInfo(null)
      window.location.href="/"
     
    }
  }
  return (
    <div className='nav'>
        <div className='logo'><h1>Agri<span className='connect'>Connect</span></h1></div>
        <div className='menu'>
            <a href="/">Menu</a>
            <a href="#market">Market Place</a>
            <a href="">Service</a>
         </div>
        <div className='login'>
           {username&&
           
           <button onClick={() =>handleLogout()}>Log Out</button>
           } 
           {!username&&
           <button onClick={() => window.location.href = "/login"}>Log In</button>
           
           }
        </div>
    </div>
  )
}

export default Navbar