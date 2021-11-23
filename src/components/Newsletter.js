import React from 'react'

function Newsletter() {
    return (
        <div>
            
    
    <div className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3>Stay updated with news by subscribing to our newsletter and our social channels</h3>
                    
                    <form id="newsletterForm" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="nemail" placeholder="Email" required />
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="nterms" value="Agreed-to-Terms" required />I've read and agree to Corso's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">SIGN UP</button>
                        </div>
                        <div className="form-message">
                            <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                    </form>
                   
                    <div className="icon-container">
                        {/* <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span> */}
                        {/* <span className="fa-stack">
                            <a href="#your-link">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span> */}
                        <span className="fa-stack">
                            <a href="https://www.instagram.com/patriaandco/">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://www.linkedin.com/company/strategi-transforma-infiniti/">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://rb.gy/68lhof">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 

                </div> 
            </div> 
        </div> 
    </div> 

        </div>
    )
}

export default Newsletter
