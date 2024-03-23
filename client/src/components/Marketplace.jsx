import React, { useEffect, useState } from 'react';
import "./Market.css";
import Card from './Card';
import rice from "../assets/rice.svg";
import soybean from "../assets/soybeans.svg";
import sugar from "../assets/sugar.svg";
import urea from "../assets/urea.svg";
import wheat from "../assets/wheat.svg";
import cocoa from "../assets/cocoa.svg";
import corn from "../assets/corn.svg";
import oats from "../assets/oats.svg"
const Marketplace = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://bloomberg-api.p.rapidapi.com/bloomberg/agriculture';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a91d7912damsh060d912d1b08aa9p1b464bjsned537ed89d43',
          'X-RapidAPI-Host': 'bloomberg-api.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = Object.values(data);
        setDetails(result);
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
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
        {details.slice(0, 9).map((detail, index) => (
          <Card
            key={index}
            productUrl={getImageUrl(detail.name)}
            productName={detail.name.split(" ")[0]}
            price={`Rs. ${detail.Price}`}
          />
        ))}
      </div>
    </div>
  );
};

const getImageUrl = (productName) => {
  switch (productName.split(" ")[0]) {
    case "Rice":
      return rice;
    case "Soybean":
      return soybean;
    case "Sugar":
      return sugar;
    case "Urea":
      return urea;
    case "Wheat":
      return wheat;
    case "Cocoa":
      return cocoa;
    case "Corn":
      return corn;
      case "Oats":
        return oats;
    default:
      return rice;
  }
};

export default Marketplace;
