import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-col first">
                                <h5>About Patria & Co.</h5>
                                <p className="p-small">We're passionate about teaching people how to be better at Analytical aspect of Machine Learning and how to make the best use of it.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-col third">
                                <h5>Links</h5>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body"><a href="article-details.html">Article Details</a></div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body"><a href="terms-conditions.html">Terms & Conditions</a></div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body"><a href="privacy-policy.html">Privacy Policy</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div className="footer-col fourth">
                                <h5>Social Media</h5>
                                <p className="p-small">For news & updates follow us</p>
                                {/* <a href="#your-link">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#your-link">
                                    <i className="fab fa-twitter"></i>
                                </a> */}
                                {/* <a href="#your-link">
                                    <i className="fab fa-pinterest-p"></i>
                                </a> */}
                                <a href="https://www.instagram.com/patriaandco/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/strategi-transforma-infiniti/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UC-1vD9nkkvIKewXuExq9Fcw">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    )
}

export default Footer
