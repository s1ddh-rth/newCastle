import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Instructor() {
    return (
        <div>
            <div id="instructor" className="basic-1">
                <div className="container">
                <h1 style={{textAlign:'center', marginBottom:'2rem'}}>Meet our Team</h1>
                    
                <Carousel autoPlay={true} stopOnHover={true} showIndicators={false} showStatus={false} infiniteLoop={true} interval={5000} showThumbs={true}>
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/harry.jfif" alt="alternative" />
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>I am Harry Your Trainer</h2>
                                <p>Hi everybody! I am Harry Patria, CEO & Chief Data Strategist at Patria & Co. I have more than 10 years experience in Data Science and I am very passionate about this field. Register for the course and let's meet.</p>
                                <p></p>
                            </div> 
                        </div> 
                    </div> 

                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/syedMohib.jfif" alt="alternative" />
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>I am Mohib Raza, Data Scientist at Patria and Co</h2>
                                <p>Hi everybody! I am Syed Mohib Raza. I look forward for an experience that is both intellectually and professionally valuable and hope to see myself grow as a professional and as an individual working in an innovative and competitive world. I wish to contribute to the organization & to the world.</p>
                                <p></p>
                            </div> 
                        </div> 
                    </div> 

                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/muhammad.jfif" alt="alternative" />
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>I am Ir. Muhammad R.</h2>
                                <p>Hi everybody! I am Ir. Muhammad R. . Writer, speaker and lecturer with strong expertise in machine learning and surface facilities engineering of upstream oil and gas industry. To date, has written and presented more than 15 technical papers at various national and international conferences and seminars. His papers and presentations revolve around lessons learned and best practices gained from field trials.</p>
                                <p></p>
                            </div> 
                        </div> 
                    </div> 

                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="images/mariana.jfif" alt="alternative" />
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>I am Dr. Christy Dwita Mariana</h2>
                                <p>Hi everybody!  Dr. Christy Dwita Mariana. Experienced Faculty Lecturer with a demonstrated history of working in the education management industry. Skilled in Portfolio Management, Negotiation, Enterprise Risk Management, Corporate Finance, and Company Valuation. Strong digital finance professional with a Doctoral Degree focused in Banking and Finance Management from Universitas Indonesia.</p>
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
