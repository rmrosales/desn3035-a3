"use client";
import React from "react";
import Header from "./components/header";
import Banner from "./components/hero-banner"
import Footer from "./components/footer";
import Projects from "./components/projects-sect";
import About from "./components/about-sect";
import Reviews from "./components/review-sect";

export default function Page() {
    return <>

    <Header />
        <main>
            <Banner />
            <Projects />
            <About />
            <Reviews />

            <section className="banner-wrapper" id="sectionHire">
                <div className="bottom-CTA-container">
                    <div className="banner-block">
                        <div className="hero-mini-photo">
                            <img src="./images/hero-mini-photo.webp" alt="" />
                        </div>
                        <p className="highlight">Romeo Martin Rosales ⚡ Product Designer + Developer</p>
                        <h1>Let's work together.
                        </h1>
                        <p>Collaborate with me to transform your ideas into impactful designs that make a difference.</p>
                        <div className="cta-set-wrapper">
                            <a className="cta" id="linkedin-cta" href="https://www.linkedin.com/in/takierosales"
                                target="_blank">Connect with me on LinkedIn</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />

        </>
  }