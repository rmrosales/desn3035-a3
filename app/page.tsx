import React from "react";
import Header from "./components/header";
import Banner from "./components/hero-banner"

export default function Page() {
    return <>

    <Header />


        <main>

            <Banner />

            <section className="projects-wrapper">
                <h4 className="section-title" id="projects-section-title">Selected Case Studies</h4>
                <div className="projects-grid-container">
                    <div className="project-card">
                        <img src="./images/Wanderpath_thumbs_hero.webp" alt="" />
                        <p className="project-type">App Design / UI Design / UX Design</p>
                        <a href="./cs-wandepath.html">Wanderpath</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/StLawrence_thumbs_hero.webp" alt="" />
                        <p className="project-type">Illustration</p>
                        <a href="#">St. Lawrence Market</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/RateMyWebsite_thumbs_hero.webp" alt="" />
                        <p className="project-type">App Design / UI Design / UX Design</p>
                        <a href="#">Rate My Website</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/Nextus_thumbs_hero.webp" alt="" />
                        <p className="project-type">App Design / UI Design / UX Design</p>
                        <a href="#">Nextus</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/Automoviles_thumbs_hero.jpg" alt="" />
                        <p className="project-type">Illustration</p>
                        <a href="#">Automobiles</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/Nextus_thumbs_hero.webp" alt="" />
                        <p className="project-type">App Design / UI Design / UX Design</p>
                        <a href="#">Nextus</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/Wanderpath_thumbs_hero.webp" alt="" />
                        <p className="project-type">App Design / UI Design / UX Design</p>
                        <a href="#">Wanderpath</a>
                    </div>
                    <div className="project-card">
                        <img src="./images/RateMyWebsite_thumbs_hero.webp" alt="" />
                        <p className="project-type">App Design / UI Design / UX Design</p>
                        <a href="#">Rate My Website</a>
                    </div>



                </div>
            </section>

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
                    <p>Let’s work together and transform your vision into a functional, engaging product. Together, we will
                        navigate the design process, ensuring that every element serves a purpose while enhancing the
                        overall user experience. </p>
                    <div className="about-cta-set-wrapper">
                        <a className="hero-cta" id="about-work-together-cta" href="#">Let's Work Together</a>
                        <a className="cta" href="#">My Resume</a>
                    </div>
                </div>
                <div className="profile-photo">
                    <img src="./images/profile-photo.png" alt="Profile Photo" />
                </div>
            </section>

            <section className="reviews-section-wrapper">
                <div className="reviews-section-container">
                    <div className="hero-review-block">
                        <h3>“Romeo's ability to blend functionality with aesthetic appeal <strong> ensured that our vision
                            was not only realized but enhanced.</strong> Will work with Romeo again.”</h3>
                        <div className="client">
                            <div className="client-thumbnail">
                                <img src="./images/client-photo-1.webp" alt="" />
                            </div>
                            <p>Elon Musk <br /> <span className="company">The Boring Company</span></p>
                        </div>
                    </div>
                    <div className="hero-review-block">
                        <h3>“Working with Rom as our product designer was an exceptional experience. He has an awesome work
                            ethic. <strong>Super-duper highly recommend!</strong>”</h3>
                        <div className="client">
                            <div className="client-thumbnail">
                                <img src="./images/client-photo-2.webp" alt="" />
                            </div>
                            <p>Sabrina Carpenter <br /> <span className="company">Cadillac Fairview</span></p>
                        </div>
                    </div>

                </div>
            </section>

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