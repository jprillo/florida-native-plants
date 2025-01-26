import React from "react";
import Link from "next/link";
import "../styles/HomePage.scss";
import { getButterflies } from "../components/getButterflies"; // Import the reusable function for butterflies
import { getPlants } from "../components/getPlants"; // Import the reusable function for plants
import ButterflyList from "../components/ButterflyList"; // Import the reusable butterfly component
import PlantsList from "../components/PlantsList"; // Import the reusable plants component

const HomePage = async () => {
  // Fetch butterfly and plant data
  const butterflies = await getButterflies();
  const plants = await getPlants();

  return (
    <main className="homepage-container">
      {/* Hero Section */}
      <header className="hero h-pad">
        <div className="hero-content">
          <h1>Florida Native Plants and Butterflies</h1>
          <p>
            Explore the beauty of Florida's native plants and butterflies, learn how to create a thriving garden, and discover how to support your local ecosystem.
          </p>
        </div>
      </header>

      {/* Section for Butterflies */}
      <section className="section h-pad">
        <h2>Discover Florida's Butterflies</h2>
        <p>
          Learn about the vibrant butterflies that call Florida home. Explore their life cycles, habitats, and how to attract them to your garden.
        </p>
        <ButterflyList butterflies={butterflies} />
        <Link href="/butterflies" className="button">
          Explore All Butterflies
        </Link>
      </section>

      {/* Section for Plants */}
      <section className="section h-pad">
        <h2>Florida Native Plants</h2>
        <p>
          Dive into the world of Florida's native plants, perfect for creating a low-maintenance, eco-friendly garden that supports local wildlife.
        </p>
        
        <PlantsList plants={plants} />
        <Link href="/plants" className="button">
          Explore All Plants
        </Link>
      </section>

      {/* Additional Resources */}
      <section className="section">
        <h2>Resources for Gardeners</h2>
        <p>
          Get tips and guides to create a thriving garden, from planting to pest control, and everything in between.
        </p>
        <Link href="/resources" className="button primary">
          Browse Resources
        </Link>
      </section>


    </main>
  );
};

export default HomePage;
