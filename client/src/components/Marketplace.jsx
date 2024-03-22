import React from 'react'
import "./Market.css"
import Card from './Card'
const Marketplace = () => {
  return (
    <div className='market' id='market'>
        <h1>MarketPlace</h1>
        <div className='filters'>
          <p>All</p>
          <p>Seed</p>
          <p>Fertilizer</p>
          <p>Crops</p>
        </div>

      <div className='cards-holders'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Marketplace