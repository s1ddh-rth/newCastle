import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const imageOne = "images/details-slide-1.jpg";
const imageTwo = "images/details-slide-2.jpg";
const imageThree = "images/details-slide-3.jpg";



const MyHomeCarousel = () => (
    <Carousel 
    plugins={[
     'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 2000,
      }
    },
  ]}   
  animationSpeed={1000}>
      <img src={imageOne} alt="CorpImage" />
      <img src={imageTwo} alt="CorpImage" />
      <img src={imageThree} alt="CorpImage" />
    </Carousel>
  );

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
                <div className="outer-container">
                    <div className="slider-container">
                        <div className="swiper-container image-slider-1">

                            <MyHomeCarousel />
                        </div>
                    </div>
                </div>
               

            </header>

        </div>
    )
}

export default ImageCarousel
