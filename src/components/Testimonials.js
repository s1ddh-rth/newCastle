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
                                                <img className="img-fluid" src="images/corporate/muhammadRully.jfif" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Harry is more than capable of bringing us to the world of business analytics. He has also strong background as an economist and business management scientist. He enlightened us about what descriptive analytics could do and take us. From visualization, analysis, until storytelling process to explain the insight. I can't wait for another surprise from him</div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/rully-shobar/">Muhammad Rully Chaerul Shobar</a></div>
                                            </div> 
                                        </div> 
                                        
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/corporate/ferry.jfif" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Thanks Pak Dr. Harry Patria telah membantu dalam meningkatkan kompetensi Auditor dan Risk Advisory Team kami Terkait Data Analytics, Data Analytics baik Descriptive dan Diagnostics adalah core competencies seorang Internal Auditor dan Risk Analyst untuk membantu Perusahaan memberikan rekomendasi yang optimal untuk kemajuan Bisnis. pelatihannya sangat sangat Bermanfaat dan segera kami implementasikan dalam Proses Audit Kami.</div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/fery-iriyawan-se-qia-cisa-cfe-ermcp-cia-38585a52/">Fery Iriyawan</a></div>
                                            </div> 
                                        </div> 
                                        
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/corporate/benny.jfif" alt="alternative" />
                                            </div>
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Dr. Harry is a passionate and enthusiastic person. As a mentor of Data Science and Business Intelligence, he is willing to share his knowledge with others. With a lot of experience, he easily explained the insights from the existing business case that we are currently discussed. Nice to meet you, Dr. Harry. I hope we can continue with another project. Thank you. </div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/bmachsan/">Beny Maulana Achsan</a></div>
                                            </div> 
                                        </div>
                                
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/corporate/faris.jfif" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Mr. Harry is very enthusiastic and full of curiosity, and he always willing to share his knowledge with others. So when our office is developing Business intelligence platform using Tableau, I directly asked to invite Mr. Harry to be a mentor for all of us, not only to make the application but also shares how to create and provide tips & tricks that others might not give. That value makes us satisfied in working with Mr. Harry</div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/faris-muhtadi/">Faris Muhtadi</a></div>
                                            </div> 
                                        </div> 
                                
                                
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/corporate/rizky.jfif" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Harry is our partner as Chief Economist & Strategy at PT. Indeks Komoditas Indonesia, who brings up a new approach to data analytics project workshop. Aims to focus on delivering know-how to our clients and facilitating cutting edge approach of advanced analytics so as to they are able to develop any cases in different contextual settings</div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/rizky-agung-prasetyo/">Rizky Agung Prasetyo</a></div>
                                            </div> 
                                        </div> 
                                

                                
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/corporate/nurul.gif" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">Mas Harry is a mentor on our private Tableau Workshop Support Group. He has a broad knowledge about Integrated Tableau and R programming for advanced analytics and he gives us a lot of lessons and homework to do, so that we can built our own dashboard. Our first 5-hours workshop (from overall 32 hours learning hour) includes all the basic things about Tableu and we had a chance to build our simple new dashboard.</div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/auliya/">Nurul Auliya</a></div>
                                            </div> 
                                        </div> 
                                

                                
                                        <div className="swiper-slide">
                                            <div className="image-wrapper">
                                                <img className="img-fluid" src="images/students/azhari.jfif" alt="alternative" />
                                            </div> 
                                            <div className="text-wrapper">
                                                <div className="testimonial-text">I have known Harry since we were in high school and we also have a seatmate. Harry is a very determined person, full of enthusiasm, persistent in achieving his goals and many other positive things. So it is not surprising if he can reach the current position. Apart from all that, Harry Patria is an asset for this nation</div>
                                                <div className="testimonial-author"><a href="https://www.linkedin.com/in/maulana-azhari-lubis-89a08069/">Maulana Azhari Lubis</a></div>
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
