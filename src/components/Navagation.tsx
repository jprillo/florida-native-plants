"use client";

import React from "react";
import Link from "next/link";
import Button from "./button";


type NavBarProps = {
  toggleNavbar: () => void; // Function to toggle the navbar
  isActive: boolean; // State indicating if the navbar is active
  color?: string; // Optional color prop
};

const NavBar: React.FC<NavBarProps> = ({ toggleNavbar, isActive, color }) => {
  return (
    <section
      className={`navagation-wrap h-pad col-12 ${isActive ? "mobile-wrap" : ""}`}
    >
      <div id="main-nav-wrap">
        {/* Logo Section */}
        <div className="logo-wrap">
          <Link href="/" passHref>
            <p
              style={{
                color: color || "lightgreen", // Use `color` prop if provided
                fontWeight: "900",
                fontSize: "25px",
              }}
            >
              Florida Butterfly Gardening
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <div className={`responsive-nav ${isActive ? "mobile-nav" : ""}`}>
            <ul className="nav">
              <li className="set">
                <Link href="/" passHref>
      Home
                </Link>
              </li>
              <li className="set">
                <Link href="/native-plants/" passHref>
                 Native
                </Link>
              </li>
              <li className="set">
                <Link href="/butterflies/" passHref>
                 Butterfliues
                </Link>
              </li>
              <li className="set">
                <Link href="/blog/" passHref>
                  Blog
                </Link>
              </li>
              <li className="set" style={{ marginTop: "25px" }}>
                <Button
                  type="secondary nav-button"
                  cta="Contact"
                  link="/contact/"
                  icon=""
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div id="hamburger-wrap">
          <div
            className={`burger-open ${isActive ? "burger-close" : ""}`}
            data-target="nav-menu"
            onClick={toggleNavbar}
            aria-hidden="true"
          >
            <span className="line line01"></span>
            <span className="line line02"></span>
            <span className="line line03"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;

