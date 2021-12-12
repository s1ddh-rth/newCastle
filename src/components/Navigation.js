import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

                
                <Link className="navbar-brand logo-text page-scroll" to="/">Patria & Co.</Link>

                
                {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logophoto.jpg" alt="alternative" /></a>  */}
                
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-awesome fas fa-bars"></span>
                    <span className="navbar-toggler-awesome fas fa-times"></span>
                </button>
                

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#about">ABOUT <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#register">REGISTER <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link page-scroll" href="#description">DETAILS</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#solutions" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">SOLUTIONS</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/academics"><span className="item-text">ACADEMIC SOLUTIONS</span></Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/corporate"><span className="item-text">CORPORATE SOLUTIONS</span></Link>
                            </div>
                        </li>
                         
                        {/* <li className="nav-item">
                            <a className="nav-link page-scroll" href="#event" role="button" aria-haspopup="true" aria-expanded="false">EVENT</a>
                        </li>
                         */}

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
