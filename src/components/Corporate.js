import React from 'react';
import {Link} from 'react-router-dom';
import Partners from './Partners';

function Corporate() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <Link className="navbar-brand logo-text page-scroll" to="/">Patria & Co.</Link>
            </nav>
            <header id="header" className="header">
            
            <h1>Corporate Solutions</h1>
            
            </header>
            <div className="flex-container">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <Partners />
        </div>
    )
}

export default Corporate
