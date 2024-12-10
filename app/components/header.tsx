import React from "react";
import NavMenu from "./navigation";
import Link from "next/link";

export default function Header() {
    return <>
        <header id="header">
            <nav className="nav-wrapper">
                <div className="nav-container">
                    <Link href="/"><img src="images/header-logo.svg" alt="Rom Studio" /></Link>

                    <NavMenu />

                </div>
            </nav>
        </header>
    </>
}