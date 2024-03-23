import React ,{useContext}from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import Marketplace from '../components/Marketplace'
import { UserContext } from '../providers/userProvider'
import { useLocation } from 'react-router-dom'
const Homepage = () => {
  
const {userInfo}=useContext(UserContext)
  const username = userInfo

  return (
    <>
      <Navbar/>
     <Hero/>
     <Marketplace/>
    
    </>

  )
}

export default Homepage