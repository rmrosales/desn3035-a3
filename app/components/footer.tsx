import React, { useState, useEffect } from "react";
export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-items-left">
                    <img src="./images/footer-logo-ico.svg" alt="" />
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="./index.html#section3">About</a></li>
                            <li><a href="./index.html#section2">Case Studies</a></li>
                            <li><a href="#">Resume</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Dribbble</a></li>
                            <li><a href="#">LinkedIn</a></li>
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