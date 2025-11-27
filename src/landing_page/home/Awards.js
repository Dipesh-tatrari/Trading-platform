import React from 'react';


function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Awards' className='img-fluid' />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>We are proud to be the largest stock broker in India, serving millions of customers with top-notch services and innovative solutions.</p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Stock and IPOs</p>
                        </li>
                        <li>
                            <p>Direct Mutual Funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    
                    <img src='media/images/pressLogos.png' alt='Awards Badges' className='img-fluid mt-3'/>
                </div>
            </div>

        </div>
     );
}

export default Awards;