import React from 'react'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

                
                <a className="navbar-brand logo-text page-scroll" href="index.html">Patria & Co.</a>

                
                {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logophoto.jpg" alt="alternative" /></a>  */}
                
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-awesome fas fa-bars"></span>
                    <span className="navbar-toggler-awesome fas fa-times"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#register">REGISTER <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#description">DETAILS</a>
                        </li>

                         
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle page-scroll" href="#date" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">DATE</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="article-details.html"><span className="item-text">ARTICLE DETAILS</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">TERMS CONDITIONS</span></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">PRIVACY POLICY</span></a>
                            </div>
                        </li>
                        

                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                    {/* <span className="nav-item social-icons">
                        <span className="fa-stack">
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
                        </span>
                    </span> */}
                </div>
            </nav> 
        </div>
    )
}

export default Navigation
