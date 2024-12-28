"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header-external";
import Footer from "../components/footer-external";
import BottomBanner from "../components/bottom-banner";
import Link from "next/link";

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

    const [typewriterText, setTypewriterText] = useState('');
    const txt = 'Waanderpath';
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
        <Header />
        <main>
            <div className="fade-section">
                <section className="banner-wrapper">
                    <div className="project-title-container">
                        <div className="banner-block">
                            <p className="highlight">UI / UX Design ⚡ 4 Months</p>
                            <h1><span id="typewriter">{typewriterText}</span>
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="project-hero-banner-wrapper">
                    <div className="project-hero-banner">
                        <img src="./images/cs_Wanderpath_hero_wide.webp" alt="" />
                    </div>
                </section>
            </div>
            <div className="fade-section">

                <section className="project-about-wrapper">
                    <div className="project-about-block">
                        <div className="block-intro">
                            <h4 className="section-title">About</h4>
                            <h2>A platform aimed at travel influencers and content creators to help them manage their time
                                resources and find destinations for their content through discovery.</h2>
                            <p>Wanderpath, a user-focused solution created to address a specific problem. Through a process
                                driven by user feedback and agile iteration, the app evolved into a product that delivers both
                                simplicity and an engaging experience.</p>
                        </div>
                        <div className="about-cta-set-wrapper">
                            <Link className="hero-cta" href="https://www.figma.com/proto/frMQB0OkZnzwRPAOex05VF?node-id=2493:28941" target="_blank">View The Prototype</Link>
                        </div>
                    </div>

                    <div className="project-about-block">
                        <div className="block-intro">
                            <h4 className="section-title">Role</h4>
                        </div>
                        <div className="skills-wrapper">
                            <div className="skill-item">
                                <img src="./images/digital-strategy-ico.svg" alt="" />
                                <p>Digital Strategy</p>
                            </div>
                            <div className="skill-item">
                                <img src="./images/ux-design-ico.svg" alt="" />
                                <p>UX Design</p>
                            </div>
                            <div className="skill-item">
                                <img src="./images/ui-design-ico.svg" alt="" />
                                <p>UI Design</p>
                            </div>
                            <div className="skill-item">
                                <img src="./images/branding-ico.svg" alt="" />
                                <p>Branding</p>
                            </div>
                            <div className="skill-item">
                                <img src="./images/web-development-ico.svg" alt="" />
                                <p>Web Development</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="fade-section">

                <section className="project-about-wrapper">
                    <div className="project-photo">
                        <img src="./images/cs_Wanderpath_banner_1.webp" alt="" />
                    </div>
                    <div className="project-about-block">
                        <div className="block-intro">
                            <h4 className="section-title">Overview</h4>
                            <h2>Designed to help influencers and content creators efficiently plan & optimize their content
                                creation process.</h2>
                            <p>This can result in missed opportunities to capture desired shots or content, especially if they
                                arrive at the wrong time.
                                <br />
                                <br />
                                Wanderpath aims to prevent these unexpected hurdles by providing tailored guidance and insights,
                                promoting a more efficient content creation process for influencers and content creators.
                            </p>
                        </div>
                        <div className="project-quote-block">
                            <h3>“I went to the Bangkok and wasn’t able to take my desired shot because there was a lot of
                                tourists. I need to return the next day.”</h3>
                            <div className="client">
                                <div className="client-thumbnail">
                                    <img src="./images/client-photo-1.webp" alt="" />
                                </div>
                                <p>Jesse Trudeau <br /> <span className="company">Landscape Photographer</span></p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="fade-section">

                <section className="project-about-wrapper">

                    <div className="project-about-block">
                        <div className="block-intro">
                            <h4 className="section-title">The Problem</h4>
                            <h2>Influencers and content creators new to a place often struggle to manage their time while
                                researching and choosing destinations for their content.</h2>
                            <p>Influencers and content creators new to a place often struggle to manage their time while
                                researching and choosing destinations for their content.
                                <br /><br />
                                This involves balancing the need to explore new locations, understand local culture, and
                                identify spots that will resonate with their audience, all while adhering to tight content
                                schedules. The process can be overwhelming, as they must also account for travel logistics,
                                optimal lighting for photos or videos, and aligning their visits with peak engagement times for
                                their followers.
                            </p>
                        </div>
                        <div className="project-quote-block">
                            <h3>“I went to the Bangkok and wasn’t able to take my desired shot because there was a lot of
                                tourists. I need to return the next day.”</h3>
                            <div className="client">
                                <div className="client-thumbnail">
                                    <img src="./images/client-photo-1.webp" alt="" />
                                </div>
                                <p>Jesse Trudeau <br /> <span className="company">Landscape Photographer</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="project-photo">
                        <img src="./images/cs_Wanderpath_banner_2.webp" alt="" />
                    </div>

                </section>

            </div>

            <div className="fade-section">

                <section className="project-about-wrapper">
                    <div className="project-about-block" id="solution-block">
                        <div className="block-intro">
                            <h4 className="section-title">The Solution</h4>
                            <h2>How can we simplify destination selection and time management for influencers and content
                                creators new to a country or destination?</h2>
                            <p>This involves balancing the need to explore new locations, understand local culture, and identify
                                spots that will resonate with their audience, all while adhering to tight content schedules. The
                                process can be overwhelming, as they must also account for travel logistics, optimal lighting
                                for photos or videos, and aligning their visits with peak engagement times for their followers.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <section>
                <div className="takeaways-block">
                    <h4 className="section-title">Key Takeaways</h4>
                    <div className="takeaways-container">
                        <div className="takeaway-item">
                            <img src="./images/takeaway-ico.svg" alt="" />
                            <p>Prioritizing user needs and pain points helped shape features that enhance the experience of
                                travel content discovery and planning.</p>
                        </div>
                        <div className="takeaway-item">
                            <img src="./images/takeaway-ico.svg" alt="" />
                            <p>Frequent testing and iteration allowed us to refine the platform based on real-time user
                                feedback.</p>
                        </div>
                        <div className="takeaway-item">
                            <img src="./images/takeaway-ico.svg" alt="" />
                            <p>Cross-functional teamwork between design, development, and marketing ensured a well-rounded
                                product.</p>
                        </div>
                    </div>
                    </div>
                    </section>


        <div className="fade-section">

        </div>

        <div className="fade-section">
            <BottomBanner />
        </div>
    </main >
        <Footer />

    </>
}