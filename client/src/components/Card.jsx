import React from 'react'
import "./card.css"
import rice from "../assets/rice.svg"
const Card = () => {
  return (
    <div className='card'>
      <div className='img' style={{ backgroundImage: `url(${rice})` }}></div>
      <div className='title'>
        <p>
        Rice
        </p>
        <p>
          Rs 20000
        </p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Card