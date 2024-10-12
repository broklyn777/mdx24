import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <header className="relative text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
        Välkommen till Motorsågskörkortet.se
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-light">
        Din Kompletta Guide till Motorsågsarbete och Säkerhet
      </p>
      <Link
        href="/faq"
        className="mt-6 inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition"
      >
        Läs mer om våra kurser
      </Link>
    </header>
  );
};

export default HeroSection;
