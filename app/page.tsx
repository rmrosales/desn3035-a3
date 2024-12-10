"use client";
import React, { useEffect } from "react";
import Header from "./components/header";
import Banner from "./components/hero-banner"
import Footer from "./components/footer";
import Projects from "./components/projects-sect";
import About from "./components/about-sect";
import Reviews from "./components/review-sect";
import BottomBanner from "./components/bottom-banner";

export default function Page() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        }, { threshold: 0.1 }); // Trigger the observer when 10% of the element is in view

        // Select all sections and apply the observer
        const sections = document.querySelectorAll(".fade-section");
        sections.forEach(section => {
            observer.observe(section);
        });

        // Cleanup observer on component unmount
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);


    return <>
        <Header />
        <main>
            <div className="fade-section">
                <Banner />
            </div>
            <div className="fade-section">
                <Projects />
            </div>
            <div className="fade-section">
                <About />
            </div>
            <div className="fade-section">
                <Reviews />
            </div>
            <div className="fade-section">
                <BottomBanner />
            </div>
        </main>
        <Footer />

    </>
}