"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "./button";

export default function NavBar() {
  // Local state to track if the mobile nav is open
  const [isActive, setIsActive] = useState(false);

  // Toggles the mobile nav
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Closes the mobile nav, e.g., after a link is clicked
  const closeNavbar = () => {
    setIsActive(false);
  };

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
                color: "lightgreen",
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
                <Link href="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="set">
                <Link href="/plants/" onClick={closeNavbar}>
                  Plants
                </Link>
              </li>
              <li className="set">
                <Link href="/butterflies/" onClick={closeNavbar}>
                  Butterflies
                </Link>
              </li>
              <li className="set">
                <Link href="/blog/" onClick={closeNavbar}>
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
}
