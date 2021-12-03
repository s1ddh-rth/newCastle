import React from 'react';
import {Link} from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Description from './Description';

const imageOne = "images/details-slide-1.jpg";
const imageTwo = "images/details-slide-2.jpg";
const imageThree = "images/details-slide-3.jpg";


function Academics() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <Link className="navbar-brand logo-text page-scroll" to="/">Patria & Co.</Link>
            </nav>
            <header id="header" className="header">
            <h1>Academic Solutions</h1>
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
            </Carousel>
            </div>
            </header>
            
            
            <Description />
        </div>
    )
}

export default Academics
