import React from "react";
export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-items-left">
                    <img src="./images/footer-logo-ico.svg" alt="" />
                    <div className="footer-links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/#section3">About</a></li>
                            <li><a href="/#section2">Case Studies</a></li>
                            <li><a href="https://docs.google.com/document/d/1KqaQEuG12TvkFZHHofGy-mMIVG_9bF7fMXY-jlOoIog/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
                        </ul>
                        <ul>
                            <li><a href="https://github.com/rmrosales" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a href="https://dribbble.com/takierosales" target="_blank" rel="noreferrer">Dribbble</a></li>
                            <li><a href="https://www.linkedin.com/in/takierosales/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-items-right">
                    <p className="copyright">© 2024 Romeo Martin Rosales</p>
                </div>
            </div>
        </footer>
    </>
}