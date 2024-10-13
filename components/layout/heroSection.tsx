// import React from "react";
// import Link from "next/link";

// const HeroSection: React.FC = () => {
//   return (
//     <header className="relative text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
//       <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold">
//         Välkommen till Motorsågskörkortet.se
//       </h1>
//       <p className="text-lg sm:text-xl md:text-2xl font-light">
//         Din Kompletta Guide till Motorsågsarbete och Säkerhet
//       </p>
//       <Link
//         href="/faq"
//         className="mt-6 inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-green-50 transition"
//       >
//         Läs mer om våra kurser
//       </Link>
//     </header>
//   );
// };

// export default HeroSection;
// import React from "react";
// import Link from "next/link";

// const HeroSection: React.FC = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24 px-6">
//       <div className="container mx-auto text-center relative z-10">
//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
//           Välkommen till Motorsågskörkortet.se
//         </h1>
//         {/* Subtitle */}
//         <p className="text-lg md:text-2xl mb-8">
//           Din Kompletta Guide till Motorsågsarbete och Säkerhet
//         </p>
//         {/* Call to Action */}
//         <div className="mt-4">
//           <Link
//             href="/faq"
//             className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 transition duration-300"
//           >
//             Läs mer om våra kurser
//           </Link>
//         </div>
//       </div>

//       {/* Decorative Image */}
//       <div
//         className="absolute top-0 right-0 h-full w-1/2 bg-cover bg-center"
//         style={{ backgroundImage: "url('/hero-husqvarna.webp')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white z-10 py-24 px-6">
      <div className="container mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-2xl md:text-6xl font-bold mb-6">
          <span className="  font-normal">Välkommen till</span>{" "}
          Motorsågskörkortet.se
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-8">
          Din Kompletta Guide till Motorsågsarbete och Säkerhet
        </p>
        {/* Call to Action */}
        <div className="mt-4">
          <Link
            href="/faq"
            className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 transition duration-300"
          >
            Läs mer om våra kurser
          </Link>
        </div>
      </div>

      {/* Background with gradient to image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-right"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(34, 197, 94, 1), rgba(34, 197, 94, 0.5), rgba(34, 197, 94, 0)), url('/hero-husqvarna.webp')`,
        }}
      >
        {/* Overlay - om du vill ha den */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroSection;
