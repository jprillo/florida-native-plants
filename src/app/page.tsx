import Link from "next/link";

import "../styles/HomePage.scss";


const HomePage = () => {
  return (

    <main className="homepage-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Florida Native Plants and Butterflies</h1>
          <p>
            Explore the beauty of Florida's native plants and butterflies, learn how to create a thriving garden, and discover how to support your local ecosystem.
          </p>
          <Link href="/plants" className="button">
            Explore Plants
          </Link>
          <Link href="/butterflies" className="button secondary">
            Discover Butterflies
          </Link>
        </div>
      </header>

      {/* Section for Butterflies */}
      <section className="section butterflies">
        <h2>Discover Florida's Butterflies</h2>
        <p>
          Learn about the vibrant butterflies that call Florida home. Explore their life cycles, habitats, and how to attract them to your garden.
        </p>
        <Link href="/butterflies" className="button">
          Explore Butterflies
        </Link>
      </section>

      {/* Section for Plants */}
      <section className="section plants">
        <h2>Florida Native Plants</h2>
        <p>
          Dive into the world of Florida's native plants, perfect for creating a low-maintenance, eco-friendly garden that supports local wildlife.
        </p>
        <Link href="/plants" className="button">
          Explore Plants
        </Link>
      </section>

      {/* Additional Resources */}
      <section className="section resources">
        <h2>Resources for Gardeners</h2>
        <p>
          Get tips and guides to create a thriving garden, from planting to pest control, and everything in between.
        </p>
        <Link href="/resources" className="button">
          Browse Resources
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Florida Native Plants and Butterflies. All rights reserved.</p>
      </footer>
    </main>
  
  );
};

export default HomePage;
