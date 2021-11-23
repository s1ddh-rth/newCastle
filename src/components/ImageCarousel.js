import React from 'react'

function ImageCarousel() {
    return (
        <div>
            
            <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-container">
                                <div className="countdown">
                                    <span id="clock"></span>
                                </div>
                                <h1>Re-inventing business through predictive analytics</h1>
                                <p className="p-large">War is 90% information.<br />
                                Here at Patria & Co. we work with you to help you realise your full potential.<br /> Come Be A Part Of Something Awesome.</p>
                                <a className="btn-solid-lg page-scroll" href="#register">REGISTER</a>
                                <a className="btn-outline-lg page-scroll" href="#instructor">DISCOVER</a>
                            </div> 
                        </div> 
                    </div>
                </div>
                
        
                <div className="outer-container">
                    <div className="slider-container">
                        <div className="swiper-container image-slider-1">
                            <div className="swiper-wrapper">
                                
                        
                                <div className="swiper-slide" >
                                    <img className="img-fluid" src="images/details-slide-1.jpg" alt="alternative" />
                                </div>
                            

                            
                                <div className="swiper-slide">
                                    <img className="img-fluid" src="images/details-slide-2.jpg" alt="alternative" />
                                </div>
                            

                            
                                <div className="swiper-slide">
                                    <img className="img-fluid" src="images/details-slide-3.jpg" alt="alternative" />
                                </div>
                                

                            </div> 
                            
                            
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            
                            
                        </div>
                    </div>
                </div>
                

            </header>

        </div>
    )
}

export default ImageCarousel
