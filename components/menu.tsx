"use client"; // Markerar att komponenten är en Client Component

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Länk till Hem */}
        <Link href="/" className="text-white font-bold">
          Min Webbplats
        </Link>

        {/* Hamburgerknapp för mobil, dold när menyn är öppen */}
        <button
          className={`text-white block md:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Länkar - gömda på mobil, visas på desktop */}
        <ul
          className={`md:flex md:space-x-8 absolute right-0 top-full mt-2 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } bg-gray-800 w-3/4 md:w-auto md:static md:bg-transparent md:justify-end`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:text-gray-400 block px-4 py-2"
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              href="/blogg"
              className="text-white hover:text-gray-400 block px-4 py-2"
            >
              Blogg
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-white hover:text-gray-400 block px-4 py-2"
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/resurser"
              className="text-white hover:text-gray-400 block px-4 py-2"
            >
              Resurser
            </Link>
          </li>

          {/* Stäng-knappen som visas när menyn är öppen på mobil */}
          <li className="block md:hidden mt-2">
            <button
              className="text-white px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Stäng
            </button>
          </li>
        </ul>
        <ModeToggle />
      </div>
    </nav>
  );
}
