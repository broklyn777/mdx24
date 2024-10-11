import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Motorsågskörkort Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <h1 className="text-2xl font-bold">Motorsågskörkortet</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Start
          </Link>
          <Link
            href="/kurser"
            className="hover:text-yellow-400 transition-colors"
          >
            Kurser
          </Link>
          <Link
            href="/blogg"
            className="hover:text-yellow-400 transition-colors"
          >
            Blogg
          </Link>
          <Link
            href="/kontakt"
            className="hover:text-yellow-400 transition-colors"
          >
            Kontakt
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link
            href="/boka"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all"
          >
            Boka Nu
          </Link>
        </div>

        {/* Mobile Menu (hamburger icon) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Replace with a hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
