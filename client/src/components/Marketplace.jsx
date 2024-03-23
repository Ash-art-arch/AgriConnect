import React from 'react'
import "./Market.css"
import Card from './Card'
import rice from "../assets/rice.svg"
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
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
      </div>
    </div>
  )
}

export default Marketplace