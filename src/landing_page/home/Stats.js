import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>We prioritize our customers' needs and strive to provide the best service possible.</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>We do not engage in any spam or gimmicks, ensuring a transparent and trustworthy experience for our customers.</p>

                    <h3 className='fs-4'>Trading Universe</h3>
                    <p className='text-muted'>Not just an app, but an whole ecosystem for trading and investment, 30+ fintech companies offer you tailored services specific to yoour needs</p>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like nuldge and kill Switch, we don't just faciliate transactiolns, but actively help you to do better with your money.</p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 p-5'>
                    <img src='media/images/ecosystem.png' alt='Stats' className='img-fluid' />
                    <div className='text-center mt-5'>
                        <a href='#' className='me-5' style={{textDecoration:"none"}}>Explore Trading Universe<i className="fa-solid fa-arrow-right"></i></a>
                        <a href='#' className='ms-5' style={{textDecoration:"none"}}>Try Kite<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;