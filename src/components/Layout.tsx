import React from "react";
import "../styles/main.scss";
import "../styles/Navagation.scss";
import Navigation from "../components/Navagation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}


