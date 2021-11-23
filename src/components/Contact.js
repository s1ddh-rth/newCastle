import React from 'react'

function Contact() {
    return (
        <div>
            <div id="contact" className="form-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Contact Details</h2>
                                <p>For registration questions please get in touch using the contact details below. For any questions use the form.</p>
                                
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-mobile-alt"></i>
                                        <div className="media-body">+44 68 554 332, &nbsp;&nbsp;<i className="fas fa-mobile-alt"></i>&nbsp; +44 31 276 112</div>
                                    </li>
                                    {/* <li className="media">
                                        <i className="fas fa-envelope"></i>
                                        <div className="media-body"><a className="light-gray" href="mailto:contact@zigo.com">contact@zigo.com</a> <i className="fas fa-globe"></i><a className="light-gray" href="#your-link">www.zigo.com</a></div>
                                    </li> */}
                                </ul>
                            </div> 
                        </div> 
                        <div className="col-lg-6">

                            
                            <form id="contactForm" data-toggle="validator" data-focus="false">
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="cname" required />
                                    <label className="label-control" htmlFor="cname">Name</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control-input" id="cemail" required />
                                    <label className="label-control" htmlFor="cemail">Email</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control-textarea" id="cmessage" required></textarea>
                                    <label className="label-control" htmlFor="cmessage">Your message</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group checkbox">
                                    <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree to Corso's stated <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button">SUBMIT</button>
                                </div>
                                <div className="form-message">
                                    <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </form>
                        

                        </div> 
                    </div> 
                </div>
            </div> 
        </div>
    )
}

export default Contact
