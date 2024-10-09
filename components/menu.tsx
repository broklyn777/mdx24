// // components/Menu.tsx
// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Menu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="flex justify-between items-center">
//         <div className="text-white font-bold">Min Webbplats</div>
//         <button
//           className="text-white block md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       <ul
//         className={`md:flex md:space-x-4 mt-2 md:mt-0 ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <li>
//           <Link href="/">
//             <a className="text-white hover:text-gray-400">Hem</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/blog">
//             <a className="text-white hover:text-gray-400">Blogg</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact">
//             <a className="text-white hover:text-gray-400">Kontakt</a>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// components/Menu.tsx

// components/Menu.tsx
"use client"; // Markerar att komponenten är en Client Component

import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Min Webbplats</div>

        {/* Hamburgerknapp för mobil */}
        <button
          className="text-white block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Länkar - gömda på mobil, visas på desktop */}
        <ul
          className={`md:flex md:space-x-8 mt-2 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:justify-end`}
        >
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Hem
            </Link>
          </li>
          <li>
            <Link href="/blogg" className="text-white hover:text-gray-400">
              Blogg
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="text-white hover:text-gray-400">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
