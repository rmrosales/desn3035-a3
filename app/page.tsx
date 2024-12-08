"use client";
import React from "react";
import Header from "./components/header";
import Banner from "./components/hero-banner"
import Footer from "./components/footer";
import Projects from "./components/projects-sect";
import About from "./components/about-sect";
import Reviews from "./components/review-sect";
import BottomBanner from "./components/bottom-banner";

export default function Page() {
    return <>

    <Header />
        <main>
            <Banner />
            <Projects />
            <About />
            <Reviews />
            <BottomBanner />
        </main>
        <Footer />

        </>
  }