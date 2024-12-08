import React from "react";

export default function Header() {
    return <>

<header id="header">
            <nav className="nav-wrapper">
                <div className="nav-container">
                    <img src="images/header-logo.svg" alt="Rom Studio" />
                    <div className="main-nav" id="mainNav">
                        <ul className="nav-menu">
                            <li><a className="nav-link" href="#">Home</a></li>
                            <li><a className="nav-link" href="#section2">Case Studies</a></li>
                            <li><a className="nav-link" href="#section3">About</a></li>
                            <li><a className="nav-link" href="#">Resume</a></li>
                            <li><a className="hero-nav-link" href="https://www.linkedin.com/in/takierosales"
                                target="_blank">Hire Me</a></li>
                        </ul>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                    </div>
                </div>
            </nav>
        </header>

    </>
}