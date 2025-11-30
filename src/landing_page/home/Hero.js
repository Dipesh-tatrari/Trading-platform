import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center justify-content-center align-items-center '>
                    <img src='media/images/homeHero.png' alt='Hero Image' className='img-fluid mb-5' />
                    <h1 className='mt-5'>
                        Invest in Everything
                    </h1>
                    <p>Online platform to invest in stocks, bonds, and more.</p>
                    <button className="btn btn-primary" style={{width:"30%"}}>Signup now</button>

            </div>

        </div>
     );
}

export default Hero;