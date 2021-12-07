import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const imageOne = "images/one.png";
const imageTwo = "images/two.png";
const imageThree = "images/three.png";
const imageFour = "images/four.png";
const imageFive = "images/five.png";

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
                <br />

                <div className="NewCarousel" style={{width:"80%", margin:"auto"}}>
                <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} interval={3000} showThumbs={false}>
                <div>
                <img src={imageOne} alt="demoImage" />
                {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                <img src={imageTwo} alt="demoImage" />
                {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                <img src={imageThree} alt="demoImage" />
                {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                <img src={imageFour} alt="demoImage" />
                {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                <img src={imageFive} alt="demoImage" />
                {/* <p className="legend">Legend 3</p> */}
                </div>
                
                </Carousel>
                </div>
                
            </header>

        </div>
    )
}

export default ImageCarousel
