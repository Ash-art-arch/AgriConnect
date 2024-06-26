import React, { useEffect, useState } from 'react';
import "./dashboard.css";
import spend from "../assets/spend.svg";
import visit from "../assets/visit.svg";
import chart from "../assets/chart.svg"
const Dashboard = () => {
    const [news,setNews]=useState([])
    const [index,setIndex]=useState(0)
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=agriculture';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a91d7912damsh060d912d1b08aa9p1b464bjsned537ed89d43',
                    'X-RapidAPI-Host': 'news67.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const parsedResult = JSON.parse(result);
                // console.log(result);
                console.log(parsedResult.news)
                setNews(parsedResult.news)
                console.log(news);
            } catch (error) {
                console.error(error);
            }
        };

        // fetchData();
    

    }, []); 
    useEffect(() => {
        if (news.length > 0) {
            const interval = setInterval(() => {
                setIndex(prevIndex => (prevIndex + 1) % news.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [news]);
    return (
        <div className='dashboard'>
            <div className='dashboard-nav'>
                <div className='top'>
                   <i className="ri-menu-line"></i>
                </div>
                    <div className='pfp'></div>
                <div className='middle'>
                    <a href="">Dashboard</a>
                    <a href="">Loans</a>
                    <a href="/products">Add Items</a>
                    <a href="">Get Logistic Support</a>
                </div>
                <div className='bottom'>
                    <button> Logout</button>
                </div>
            </div>
            <div className='dashboard-content'>
                <h1>
                    DashBoard
                </h1>
                <div className='upper'>
                    <div className='charts' style={{ backgroundImage: `url(${chart})` }}></div>
                    <div className='tally'>
                        <div className='spend'>
                            <section className='earn'> 
                                <h6>Total Earnings</h6>
                                <p>2000000 USD</p>
                            </section >
                            <section className="lo" style={{ backgroundImage: `url(${spend})` }}> 

                            </section>
                        </div>
                        <div className='spend'>
                        <section className='earn'> 
                                <h6>Person Visited</h6>
                                <p>345 Impressions</p>
                            </section >
                            <section className="lo" style={{ backgroundImage: `url(${visit})` }}> 

                            </section>
                        </div>
                        <div></div>
                    </div>
                </div>
             
                {news.length > 0 && (
                <div className='lower'>
                    <div className='news'>
                        <h1>Todays News</h1>
                        <div className='news-holder'>
                            <div className='news-text'>
                            <h6 className='news-title'>{news.length>0&&news[index % news.length].Title}</h6>
                            <p className='summary'>{news.length>0&&news[index % news.length].Summary}</p>
                            </div>
                            <div className='news-img' style={{ backgroundImage: `url(${news.length>0&&news[index % news.length].Image})` }}></div>
                        </div>

                    </div>
                </div>
            )}
        
            </div>
        </div>
    );
};

export default Dashboard;
