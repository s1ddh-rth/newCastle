import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Instructor() {
    return (
        <div>
            <div id="instructor" className="basic-1">
                <div className="container">
                <h1 style={{textAlign:'center', marginBottom:'2rem'}}>Meet our Team</h1>
                    
                <Carousel autoPlay={true} stopOnHover={true} showIndicators={false} showStatus={false} infiniteLoop={true} interval={5000} showThumbs={false}>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/instructor.jfif" alt="alternative" />
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>I’m Harry Your Trainer</h2>
                                <p>Hi everybody! I am Harry Patria, CEO & Chief Data Strategist at Patria & Co. I have more than 10 years experience in Data Science and I am very passionate about this field. Register for the course and let's meet.</p>
                                <p></p>
                            </div> 
                        </div> 
                    </div> 

                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/instructor.jfif" alt="alternative" />
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>I’m XYZ, Data scientist at patria and co</h2>
                                <p>Hi everybody! I am Harry Patria, CEO & Chief Data Strategist at Patria & Co. I have more than 10 years experience in Data Science and I am very passionate about this field. Register for the course and let's meet.</p>
                                <p></p>
                            </div> 
                        </div> 
                    </div> 
                    </Carousel>
                </div> 
            </div>     
        </div>
    )
}

export default Instructor
