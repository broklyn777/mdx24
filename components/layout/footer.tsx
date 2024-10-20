import React from "react";
import Link from "next/link";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Sociala ikoner

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Menylänkar */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/" className="hover:text-yellow-400">
                Hem
              </Link>
            </li>
            <li>
              <Link href="/blogg" className="hover:text-yellow-400">
                Blogg
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-yellow-400">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/resurser" className="hover:text-yellow-400">
                Resurser
              </Link>
            </li>
          </ul>
        </div>

        {/* Sociala medier */}
        {/* <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
          >
            <FaInstagram size={24} />
          </a>
        </div> */}

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          &copy; {currentYear} Motorsågskörkortet.se | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
