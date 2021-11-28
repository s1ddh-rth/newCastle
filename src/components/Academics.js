import React from 'react';
import {Link} from 'react-router-dom';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Description from './Description';

const imageOne = "images/details-slide-1.jpg";
const imageTwo = "images/details-slide-2.jpg";
const imageThree = "images/details-slide-3.jpg";

const MyCarousel = () => (
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
      <img src={imageOne} alt="AcadImage" />
      <img src={imageTwo} alt="AcadImage" />
      <img src={imageThree} alt="AcadImage" />
    </Carousel>
  );

function Academics() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <Link className="navbar-brand logo-text page-scroll" to="/">Patria & Co.</Link>
            </nav>
            <header id="header" className="header">
            <h1>Academic Solutions</h1>
            <div className="outer-container">
                    <div className="slider-container">
                        <div className="swiper-container image-slider-1">
                            <MyCarousel />
                        </div>
                    </div>
                </div>
            </header>
            <br /><br />
            <br />
            <Description />
        </div>
    )
}

export default Academics
