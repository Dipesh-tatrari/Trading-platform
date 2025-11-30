import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <img src='media/images/education.svg' alt='Education' className='img-fluid' />
                </div>
                
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <h1 className='mb-3 fs-2'>Free and Comprehensive Education</h1>
                    <p>Varsity, the largest and most comprehensive financial education platform in India, where you can learn basics to advanced trading concepts.</p>
                    <a href='#' style={{textDecoration:"none"}}>Explore Varsity<i className="fa-solid fa-arrow-right mb-5"></i></a>
                    <p>TradingQ&A, the most active and largest financial community in India, where you can ask questions and get answers from experts and peers.</p>
                    <a href='#' style={{textDecoration:"none"}}>Visit TradingQ&A<i className="fa-solid fa-arrow-right mb-5"></i></a>
                </div>
                
            </div>
        </div>
     );
}

export default Education;