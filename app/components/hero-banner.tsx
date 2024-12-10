"use client";
import React, { useState, useEffect, useRef } from "react";


export default function Banner() {
        const [typewriterText, setTypewriterText] = useState('');
        const txt = 'Woorldwide.';
        const speed = 200; // Speed in milliseconds
        const indexRef = useRef(0); // Use ref to track the index without triggering re-renders
      
        useEffect(() => {
          const typeWriter = () => {
            if (indexRef.current < txt.length) {
              setTypewriterText((prev) => prev + txt.charAt(indexRef.current));
              indexRef.current++; // Increment the index
            }
          };
      
          const intervalId = setInterval(typeWriter, speed); // Use setInterval to control the typing speed
      
          // Cleanup interval on unmount
          return () => clearInterval(intervalId);
        }, [txt, speed]); 

    return <>
            <section className="banner-wrapper">
                <div className="banner-container">
                    <div className="banner-block">
                        <div className="hero-mini-photo">
                            <img src="./images/hero-mini-photo.webp" alt="" />
                        </div>
                        <p className="highlight">Romeo Martin Rosales ⚡ Product Designer + Developer</p>
                        <h1>Designing Products <br /> That Matter To You. <span className="green-gradient" id="green-gradient">{typewriterText}</span>
                        </h1>
                        <p>I&apos;m a UI/UX designer and developer based in Toronto focused on creating user-centered <br /> and
                            interactive digital experiences for partners around the globe.</p>
                        <div className="cta-set-wrapper">
                            <a className="hero-cta" href="#sectionHire">Let&apos;s Work Together</a>
                            <a className="cta"  id="case-studies-cta"  href="#section2">Case Studies</a>
                        </div>
                    </div>
                </div>
            </section>
    </>
}