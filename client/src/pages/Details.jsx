import React, { useState } from "react";

const News = () => {

    const [news, setNews] = useState([])

    const requestResponse = async() => {
        const url = 'https://bloomberg-api.p.rapidapi.com/bloomberg/agriculture';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fc44ec4515msh0fe67de729a7222p11762bjsn787045df9bfb',
                'X-RapidAPI-Host': 'bloomberg-api.p.rapidapi.com'
            }
        };
    
        try {
            const response = await fetch(url, options)
            .then((res) => res.json())
            const result = Object.keys(response).map((key) => [key, response[key]]);
            setNews(result)
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <>
            <div>News</div>
        </>
    )
}

export default News