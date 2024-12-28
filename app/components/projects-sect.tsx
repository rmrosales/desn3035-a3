import React from "react";
import Link from "next/link";

export default function Projects() {
    return <>
        <section className="projects-wrapper" id="section2#">
            <h4 className="section-title" id="projects-section-title">Selected Case Studies</h4>
            <div className="projects-grid-container">
                <div className="project-card">
                    <img src="./images/Wanderpath_thumbs_hero.webp" alt="" />
                    <p className="project-type">App Design / UI Design / UX Design</p>
                    <Link href="/project-wanderpath">
                        Wanderpath
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/StLawrence_thumbs_hero.webp" alt="" />
                    <p className="project-type">Illustration</p>
                    <Link href="/">
                        St. Lawrence Market
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/RateMyWebsite_thumbs_hero.webp" alt="" />
                    <p className="project-type">App Design / UI Design / UX Design</p>
                    <Link href="/">
                        Rate My Website
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/Nextus_thumbs_hero.webp" alt="" />
                    <p className="project-type">App Design / UI Design / UX Design</p>
                    <Link href="/">
                        Nextus
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/Automoviles_thumbs_hero.jpg" alt="" />
                    <p className="project-type">Illustration</p>
                    <Link href="/">
                        Automobiles
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/Nextus_thumbs_hero.webp" alt="" />
                    <p className="project-type">App Design / UI Design / UX Design</p>
                    <Link href="/">
                        Nextus
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/Wanderpath_thumbs_hero.webp" alt="" />
                    <p className="project-type">App Design / UI Design / UX Design</p>
                    <Link href="/project-wanderpath">
                        Wanderpath
                    </Link>
                </div>
                <div className="project-card">
                    <img src="./images/RateMyWebsite_thumbs_hero.webp" alt="" />
                    <p className="project-type">App Design / UI Design / UX Design</p>
                    <Link href="/">
                        Rate My Website
                    </Link>
                </div>
            </div>
        </section>
    </>
}