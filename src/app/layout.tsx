"use client";

import { ReactNode, useState } from "react";
import NavBar from '../components/Navagation'
import '../styles/main.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        <NavBar toggleNavbar={toggleNavbar} isActive={isActive} />
        <main>{children}</main>
      </body>
    </html>
  );
}
