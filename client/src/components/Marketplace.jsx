import React, { useEffect, useState } from 'react'
import "./Market.css"
import Card from './Card'
import rice from "../assets/rice.svg"
import corn from "../assets/corn.svg"
import wheat from "../assets/wheat.svg"
import cotton from "../assets/cotton.svg"
import almonds from "../assets/almonds.svg"
import cocoa from "../assets/cocoa.svg"
import soybeans from "../assets/soybeans.svg"
import hay from "../assets/hay.svg"
import sugar from "../assets/sugar.svg"
const Marketplace = () => {
  const [details, setDetails] = useState([])

  // useEffect(() => {
  //   const requestResponse = async() => {
  //       const url = 'https://bloomberg-api.p.rapidapi.com/bloomberg/agriculture';
  //       const options = {
  //           method: 'GET',
  //           headers: {
  //               'X-RapidAPI-Key': '5f9ab57380msh774398badf412a8p1b2783jsn58475e466890',
  //               'X-RapidAPI-Host': 'bloomberg-api.p.rapidapi.com'
  //           }
  //       };
    
  //       try {
  //           const response = await fetch(url, options)
  //           const data = await response.json()
  //           const result = Object.keys(data).map((key) => [key, data[key]]);
  //           setDetails(result)
  //       } catch (error) {
  //           console.error(error);
  //       }
  //   }
  //   return requestResponse
  // })
    
  // console.log(details)

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
        <Card productUrl={rice} productName="Rice" price="Rs. 2000"/>
        <Card productUrl={corn} productName="Corn" price="Rs. 4000"/>
        <Card productUrl={wheat} productName="Wheat" price="Rs. 2000"/>
        <Card productUrl={cotton} productName="Cotton" price="Rs. 1000"/>
        <Card productUrl={almonds} productName="Almonds" price="Rs. 20000"/>
        <Card productUrl={cocoa} productName="Cocoa" price="Rs. 2000"/>
        <Card productUrl={soybeans} productName="Soybeans" price="Rs. 20000"/>
        <Card productUrl={sugar} productName="Sugar" price="Rs. 20000"/>
        <Card productUrl={hay} productName="Hay" price="Rs. 200"/>
      </div>
    </div>
  )
}

export default Marketplace