import React from 'react'
import "./dashboard.css"
import spend from "../assets/spend.svg"
import visit from "../assets/visit.svg"
const Dashboard = () => {

    
  return (
    <div className='dashboard'>
        <div className='dashboard-nav'>
            <div className='top'>
               <i class="ri-menu-line"></i>
                <div className='pfp'></div>
            </div>
            <div className='middle'>
                <a href="">Dashboard</a>
                <a href="">Loans</a>
                <a href="">Add Items</a>
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
                <div className='chart'>

                </div>
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
                            <p>345 Impresseions</p>
                        </section >
                        <section className="lo" style={{ backgroundImage: `url(${visit})` }}> 

                        </section>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='lower'>
                <div className='news'>
                    <h1>Todays News</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard