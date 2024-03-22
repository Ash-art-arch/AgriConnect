import React from 'react'
import bg from '../assets/bg.svg'
const Hero = () => {
  return (
    <>
    <div className='bg-image' style={{ backgroundImage: `url(${bg})` }}></div>
    
    <div className='content'>
        <div className='heading'>
          <h1>Empowering Farmers and Makers with Real-time Connectivity</h1>
        </div>
        <div className='sub-heading'>
          <h3>The Digital Nexus where Farmers and Makers Embrace Real-time  Connectivity, Empowering Growth, Collaboration, and Innovation Hand in  Hand</h3>
        </div>
        <div className='join'>
          <button className='farmer' onClick={() => window.location.href = "/login?role=farmer"}>Login as Farmer</button>
          <button className='buyer' onClick={() => window.location.href = "/login?role=buyer"}>Login as Buyer</button>
        </div>
      </div>
    </>
   
  )
}

export default Hero