import React from "react";
import HamburgerMenu from "./navigation";

export default function Header() {
    return <>

<header id="header">
            <nav className="nav-wrapper">
                <div className="nav-container">
                    <a href="#"><img src="images/header-logo.svg" alt="Rom Studio" /></a>

                    <HamburgerMenu />

                </div>
            </nav>
        </header>

    </>
}