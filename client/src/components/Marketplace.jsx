import React from 'react'
import "./Market.css"
import Card from './Card'
import rice from "../assets/rice.svg"
import corn from "../assets/corn.svg"
import wheat from "../assets/wheat.svg"
import fertilizer from "../assets/fertilizer.svg"
import almonds from "../assets/almonds.svg"
import urea from "../assets/urea.svg"
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
        <Card productUrl={rice} productName="rice" price="Rs. 2000"/>
        <Card productUrl={corn} productName="corn" price="Rs. 4000"/>
        <Card productUrl={wheat} productName="wheat" price="Rs. 2000"/>
        <Card productUrl={fertilizer} productName="fertilizer" price="Rs. 8000"/>
        <Card productUrl={almonds} productName="almonds" price="Rs. 20000"/>
        <Card productUrl={urea} productName="urea" price="Rs. 2000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
        <Card productUrl={rice} productName="rice" price="Rs. 20000"/>
      </div>
    </div>
  )
}

export default Marketplace