import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-sm-12 mb-5'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>We preserve the concept of discount broking and price transparency in India.Flat fees and no hidden charges</p>
                    <a href='#' style={{textDecoration:"none"}}>See full pricing<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12'></div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-2 mt-3'>₹0</h1>
                            <p className='mb-3'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3 mt-3'>₹20</h1>
                            <p className='mb-3'>Intraday trades and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;