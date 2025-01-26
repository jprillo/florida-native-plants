"use client";

import { ReactNode, useState } from "react";
import NavBar from '../components/Navagation'

import '../styles/main.scss'

export default function RootLayout({ children }: { children: ReactNode }) {



  return (
    <html lang="en">
      <body>
        <NavBar  />
        <main>{children}</main>
              {/* Footer */}
      <footer className="footer h-pad">
        <p>&copy; {new Date().getFullYear()} Florida Native Plants and Butterflies. All rights reserved.</p>
      </footer>

      </body>
    </html>
  );
}
