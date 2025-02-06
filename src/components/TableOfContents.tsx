'use client';

import React, { useEffect } from 'react';
import "../styles/TableOfContents.scss"; // Import your SCSS file

// Define a type for our section objects
type Section = {
  id: string;
  title: string;
};

// List of sections to link to
const sections: Section[] = [


  { id: 'egg', title: 'Egg' },
  { id: 'caterpillar', title: 'Caterpillar' },
  { id: 'chrysalis', title: 'Chrysalis' },
  { id: 'adult-behavior', title: 'Adult Behavior' },
  { id: 'how-to-attract', title: 'How to Attract' },
  { id: 'conservation-tips', title: 'Conservation Tips' },
];

const TableOfContents: React.FC = () => {
  // Type the activeSection state as string or null.


  useEffect(() => {
    const handleScroll = () => {
      // Adjust scroll position if you have a fixed header (change offset as needed)
      const scrollPosition = window.scrollY + 100;

      // Loop through each section and check if the scroll position is within its boundaries
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {

          return; // Exit once the active section is found
        }
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    // Call once on mount in case the user is already scrolled down
    handleScroll();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to the given section
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="tocContainer">
      <h3 className="tocTitle">Table of Contents</h3>
      <ul className="tocList">
        {sections.map((section) => (
          <li
            key={section.id}
            className= "tocItem"
            onClick={() => scrollToSection(section.id)}
            style={{ cursor: 'pointer' }} // Ensures the pointer cursor on hover
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
