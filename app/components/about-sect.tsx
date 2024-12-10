import React from "react";
export default function About() {
    return <>
    



    <section className="about-wrapper" id="section3">
                <div className="about-block">
                    <div className="block-intro">
                        <h4 className="section-title">About</h4>
                        <h2>Bridging the gap between design & development to bring ideas to life. </h2>
                        <p>With a focus on user-centered solutions, I combine creativity and technical expertise to craft
                            seamless experiences that resonate with users and meet business goals.</p>
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
                    <p>Let&apos;s work together and transform your vision into a functional, engaging product. Together, we will
                        navigate the design process, ensuring that every element serves a purpose while enhancing the
                        overall user experience.</p>
                    <div className="about-cta-set-wrapper">
                        <a className="hero-cta" id="about-work-together-cta" href="#">Let's Work Together</a>
                        <a className="cta" href="https://docs.google.com/document/d/1KqaQEuG12TvkFZHHofGy-mMIVG_9bF7fMXY-jlOoIog/edit?usp=sharing" target="_blank" rel="noreferrer">My Resume</a>
                    </div>
                </div>
                <div className="profile-photo">
                    <img src="./images/profile-photo.png" alt="Profile Photo" />
                </div>
            </section>

    </>
}