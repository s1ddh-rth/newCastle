import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const imageOne = "images/customer-logo-1.png";
const imageTwo = "images/customer-logo-2.png";
const imageThree = "images/customer-logo-3.png";
const imageFour = "images/customer-logo-4.png";
const imageFive = "images/customer-logo-5.png";
const imageSix = "images/customer-logo-6.png";



const MyPartnerCarousel = () => (
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
      <img src={imageFour} alt="CorpImage" />
      <img src={imageFive} alt="CorpImage" />
      <img src={imageSix} alt="CorpImage" />

    </Carousel>
  );


function Partners() {
    return (
        <div>
            <div className="slider-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">FEATURED IN</p>

                        
                            <div className="slider-container">
                                <MyPartnerCarousel />
                            </div> 
                            

                        </div> 
                    </div>
                </div> 
            </div> 
        </div>
    )
}

export default Partners
