import React from "react";
import Link from "next/link";
import Image from "next/image";
// import HeroSection from "@/components/layout/heroSection";
// import CardGrid from "@/components/layout/cardGrid";

const Home: React.FC = () => {
  return (
    <div className=" mt-36   mx-auto">
      {/* <Header /> */}
      <header className="text-center mb-24">
        <h2 className="mb-4 break-words">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Välkommen till Motorsågskörkortet.se
          </span>
          <br />
          <span className="text-lg sm:text-xl md:text-2xl font-normal">
            Din Kompletta Guide till Motorsågsarbete och Säkerhet
          </span>
        </h2>

        <p className="text-lg">
          Här på <strong>Motorsågskörkortet.se</strong> erbjuder vi all den
          kunskap du behöver för att bli en säker och kompetent
          motorsågsanvändare. Oavsett om du är en nybörjare som just påbörjat
          din resa mot motorsågskörkort eller en erfaren användare som vill
          förbättra dina färdigheter, har vi resurserna för dig.
        </p>
      </header>
      {/* <HeroSection /> */}

      <main>
        <section className="w-full  bg-slate-100 dark:bg-slate-700 py-10">
          <h2 className="text-3xl font-semibold mb-6 text-center ">
            Upptäck Viktiga Ämnen och Innehåll
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Skaderisker och Säkerhet
              </h3>
              <p className="mb-4">
                Lär dig om de vanligaste skaderiskerna vid motorsågsarbete och
                hur du bäst skyddar dig.
              </p>
              <Link
                href="/skaderisker"
                className="text-blue-500 hover:underline"
              >
                Läs mer
              </Link>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Säkra Starttekniker
              </h3>
              <p className="mb-4">
                Att starta motorsågen korrekt är avgörande för att undvika
                kickback och andra farliga situationer.
              </p>
              <Link
                href="/starttekniker-motorsag"
                className="text-blue-500 hover:underline"
              >
                Läs mer
              </Link>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Arbetsteknik och Grundregler
              </h3>
              <p className="mb-4">
                Utforska grundläggande arbetstekniker för motorsågsarbete som
                säker arbetsställning och ergonomiska aspekter.
              </p>
              <Link
                href="/arbetsteknik"
                className="text-blue-500 hover:underline"
              >
                Läs mer
              </Link>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Trädfällning och Planering
              </h3>
              <p className="mb-4">
                Lär dig bedöma trädfällningsriktningen och förbered
                arbetsområdet för säker fällning.
              </p>
              <Link
                href="/tradafallning"
                className="text-blue-500 hover:underline"
              >
                Läs mer
              </Link>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Underhåll och Skötsel av Motorsåg
              </h3>
              <p className="mb-4">
                Upptäck hur du håller din motorsåg i toppskick genom regelbundet
                underhåll.
              </p>
              <Link href="/underhall" className="text-blue-500 hover:underline">
                Läs mer
              </Link>
            </div>
          </div>
        </section>
        <section className="text-center my-10">
          <h2 className="text-3xl font-semibold mb-6">Vår Vision</h2>
          <p className="text-lg mb-4">
            Vi vill ge dig verktygen att använda motorsåg med både skicklighet
            och respekt. Att arbeta med motorsåg kan vara både
            tillfredsställande och effektivt, men det kräver att du har rätt
            kunskap och håller dig uppdaterad om säkerhet och tekniker.
          </p>
        </section>
        <section className="text-center mb-16 py-14 bg-slate-100 dark:bg-slate-700">
          <h2 className="text-3xl font-semibold mb-6">
            Bli En Del av Gemenskapen
          </h2>
          <p className="text-lg mb-4">
            Motorsågsarbete är något som många gör på egen hand, men här på{" "}
            <strong>Motorsågskörkortet.se</strong> är vi en gemenskap som delar
            samma mål – säkerhet och kunskap.
          </p>
          <div className="mt-6">
            <Link
              href="/newsletter"
              className="text-blue-500 hover:underline mr-4"
            >
              Prenumerera på Nyhetsbrevet
            </Link>
            <Link href="/social" className="text-blue-500 hover:underline">
              Följ oss på Sociala Medier
            </Link>
          </div>
        </section>
      </main>
      <footer className="text-center mt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Vanliga Frågor och Resurser
        </h2>
        <p className="text-lg">
          Besök vår{" "}
          <Link href="/faq" className="text-blue-500 hover:underline">
            FAQ-sektion
          </Link>{" "}
          för att hitta svar på de vanligaste frågorna och fördjupa dig i våra
          resursguider.
        </p>
      </footer>
    </div>
  );
};

export default Home;
