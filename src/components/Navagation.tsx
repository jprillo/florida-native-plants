"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/Navagation.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Link href="/">Florida Nature</Link>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="hamburger"></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link href="/plants">Plants</Link>
          </li>
          <li>
            <Link href="/butterflies">Butterflies</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
