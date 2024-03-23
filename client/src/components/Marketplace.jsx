import React, { useEffect, useState } from 'react';
import "./Market.css";
import Card from './Card';
import rice from "../assets/rice.svg";
import corn from "../assets/corn.svg";
import wheat from "../assets/wheat.svg";
import mead from "../assets/mead.svg";
import almonds from "../assets/almonds.svg";
import urea from "../assets/urea.svg";

const Marketplace = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://bloomberg-api.p.rapidapi.com/bloomberg/agriculture';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fe83efea23msh904ae7aea3b055dp1ffb9cjsn0bcecad5f696',
          'X-RapidAPI-Host': 'bloomberg-api.p.rapidapi.com'
        }
      };
    
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const result = Object.values(data);
        // Check if the fetched data is different from the current state
        if (JSON.stringify(result) !== JSON.stringify(details)) {
          setDetails(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchData();
  }, []); // Empty dependency array means the effect runs only once on component mount

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
        {details.map((detail, index) => (
          <Card
            key={index}
            productUrl={detail.url} // Access url directly from detail object
            productName={detail.name} // Access name directly from detail object
            price={`Rs. ${detail.price}`} // Access price directly from detail object
          />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
