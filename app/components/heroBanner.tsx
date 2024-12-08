import React from "react";
import Image from "next/image";

export default function Header() {
    return <>

<section className="banner-wrapper">
                <div className="banner-container">
                    <div className="banner-block">
                        <div className="hero-mini-photo">
                            <img src="./images/hero-mini-photo.webp" alt="" />
                        </div>
                        <p className="highlight">Romeo Martin Rosales ⚡ Product Designer + Developer</p>
                        <h1>Designing Products <br /> That Matter. <span className="green-gradient" id="green-gradient"></span>
                        </h1>
                        <p>I’m a UI/UX designer and developer based in Toronto focused on creating user-centered <br /> and
                            interactive digital experiences for partners around the globe.</p>
                        <div className="cta-set-wrapper" id="section2">
                            <a className="hero-cta" href="#sectionHire">Let's Work Together</a>
                            <a className="cta" id="case-studies-cta" href="#section2">Case Studies</a>
                        </div>
                    </div>
                </div>
            </section>

    </>
}