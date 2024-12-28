import React from "react";

export default function BottomBanner() {
    return <>
        <section className="banner-wrapper" id="sectionHire">
            <div className="bottom-CTA-container">
                <div className="banner-block">
                    <div className="hero-mini-photo">
                        <img src="./images/hero-mini-photo.webp" alt="" />
                    </div>
                    <p className="highlight">Romeo Martin Rosales ⚡ Product Designer + Developer</p>
                    <h1>Let&apos;s work together.
                    </h1>
                    <p>Collaborate with me to transform your ideas into impactful designs that make a difference.</p>
                    <div className="cta-set-wrapper">
                        <a className="cta" id="linkedin-cta" href="https://www.linkedin.com/in/takierosales"
                            target="_blank" rel="noreferrer">Connect with me on LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}