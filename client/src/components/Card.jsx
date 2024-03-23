import React from 'react'
import "./card.css"
const Card = ({productUrl, productName, price}) => {
  return (
    <div className='card'>
      <div className='img' style={{ backgroundImage: `url(${productUrl})` }}></div>
      <div className='title'>
        <p>
          {productName}
        </p>
        <p>
          {price}
        </p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}

export default Card