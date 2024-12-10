import React from "react";
import Link from "next/link";
export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-items-left">
                    <img src="./images/footer-logo-ico.svg" alt="" />
                    <div className="footer-links">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/#section3" scroll={true} >About</Link></li>
                            <li><Link href="/#section2" scroll={true} >Case Studies</Link></li>
                            <li><Link href="https://docs.google.com/document/d/1KqaQEuG12TvkFZHHofGy-mMIVG_9bF7fMXY-jlOoIog/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</Link></li>
                        </ul>
                        <ul>
                            <li><Link href="https://github.com/rmrosales" target="_blank" rel="noreferrer">Github</Link></li>
                            <li><Link href="https://dribbble.com/takierosales" target="_blank" rel="noreferrer">Dribbble</Link></li>
                            <li><Link href="https://www.linkedin.com/in/takierosales/" target="_blank" rel="noreferrer">LinkedIn</Link></li>
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