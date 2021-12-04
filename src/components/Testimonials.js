import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
    return (
        <div>
            <div className="slider-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>See what our Students/Clients had to say about us</h3>

                    
                                        
                                        <Carousel autoPlay={true} widht={"120%"} showIndicators={false} showStatus={false} infiniteLoop={true} interval={5000} showThumbs={false}>
                                    
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-1.jpg" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">I took the SEO training course about a year ago and I am very happy. It taught me all the basics of search engine optimization and some tricks.</div>
                                                <div className="testimonial-author">Jude Thorn - Online Marketer</div>
                                            </div> 
                                        </div> 
                                        
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-2.jpg" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Awesome course for the money. I never thought I could learn so much about search engine optimization in such a short amount of time. Highly recommend.</div>
                                                <div className="testimonial-author">Roy Smith - Developer</div>
                                            </div> 
                                        </div> 
                                        
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-3.jpg" alt="alternative" />
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Corso is the best SEO training course in the market. It teaches you all the basics but it also adds value with some advanced tips & tricks the are great.</div>
                                                <div className="testimonial-author">Martin Singer - Online Marketer</div>
                                            </div> 
                                        </div>
                                
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/testimonial-4.jpg" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Learning SEO can actually be fun. I attended Corso SEO training and I had a great time with my peer students and the instructors. Highly recommended course.</div>
                                                <div className="testimonial-author">Ronda Louis - Business Owner</div>
                                            </div> 
                                        </div> 
                                
                                    </Carousel>
                                    </div> 
                                    

                               
                    </div> 
                </div> 
            </div> 

        </div>
    )
}

export default Testimonials
