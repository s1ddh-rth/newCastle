import React from 'react'

function Register() {
    return (
        <div>       
            <div id="register" className="form-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Register Using The Form</h2>
                                <p>It's easy to register for the course, just fill out the form and click submit. Then you will be registered for one of the best SEO training courses in the industry</p>
                                <ul className="list-unstyled li-space-lg">
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body"><strong>Your information</strong> is required to complete the registration</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body"><strong>It's safe with us</strong> and will not be used for marketing</div>
                                    </li>
                                    <li className="media">
                                        <i className="fas fa-square"></i>
                                        <div className="media-body"><strong>You will receive</strong> a confirmation email in less than 24h</div>
                                    </li>
                                </ul>
                            </div> 
                        </div> 
                        <div className="col-lg-6">

                            
                            <div className="form-container">
                                <form id="registrationForm" data-toggle="validator" data-focus="false">
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" id="rname" name="rname" required />
                                        <label className="label-control" htmlFor="rname">Complete name</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control-input" id="remail" name="remail" required />
                                        <label className="label-control" htmlFor="remail">Email address</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" id="rphone" name="rphone" required />
                                        <label className="label-control" htmlFor="rphone">Phone number</label>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group checkbox">
                                        <input type="checkbox" id="rterms" value="Agreed-to-Terms" name="rterms" required />I've read and agree to Corso's written <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms & Conditions</a>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button">REGISTER</button>
                                    </div>
                                    <div className="form-message">
                                        <div id="rmsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div> 
                            
                        </div> 
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default Register
