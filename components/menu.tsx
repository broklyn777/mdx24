"use client"; // Markerar att komponenten är en Client Component

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md p-4 z-20 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Länk till Hem */}
        <Link href="/" className="text-2xl font-bold">
          MSK
        </Link>

        {/* Hamburgerknapp för mobil, dold när menyn är öppen */}

        {/* <button
          className={`text-white block md:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button> */}

        <button
          className={`text-white block md:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8" // Storlek på ikonen
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2} // Ändra tjockleken på strecken här
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {/* Länkar - gömda på mobil, visas på desktop */}
        <ul
          className={`md:flex md:space-x-6 absolute right-0 top-full mt-2 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } bg-green-700 w-3/4 md:w-auto md:static md:bg-transparent md:justify-end`}
        >
          <li>
            <Link
              href="/"
              className="text-white hover:text-yellow-400 block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Hem
            </Link>
          </li>
          <li>
            <Link
              href="/blogg"
              className="text-white hover:text-yellow-400 block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Blogg
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-white hover:text-yellow-400 block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </li>
          <li>
            <Link
              href="/resurser"
              className="text-white hover:text-yellow-400 block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Resurser
            </Link>
          </li>

          {/* Stäng-knapp för mobil */}
          <li className="block md:hidden mt-2">
            <button
              className="text-white px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Stäng
            </button>
          </li>
        </ul>
        {/* Call to Action */}
        <div className=" md:block">
          <Link
            href="/kontakt"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all"
          >
            Boka Nu!
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
