import React from "react";
import Link from "next/link"; // Lägg till denna rad för att importera Link

interface CardItem {
  title: string;
  description: string;
  link: string;
}

const items: CardItem[] = [
  {
    title: "Skaderisker och Säkerhet",
    description: "Lär dig om de vanligaste skaderiskerna vid motorsågsarbete.",
    link: "/skaderisker",
  },
  // Fler objekt...
];
import { Shield, Wrench, Tree, Users } from "lucide-react"; // Lägg till ikoner

<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  <div className="p-6 border border-gray-200 rounded-lg flex items-start">
    <Shield className="h-10 w-10 mr-4 text-green-500" />
    <div>
      <h3 className="text-2xl font-semibold mb-4">Säkerhet</h3>
      <p className="mb-4">vid motorsågsarbete och hur du bäst skyddar dig.</p>
      <Link href="/skaderisker" className="text-blue-500 hover:underline">
        Läs mer
      </Link>
    </div>
  </div>
</div>;

const CardGrid: React.FC = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-6 border rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
          <p className="mb-4">{item.description}</p>
          <Link href={item.link} className="text-blue-500 hover:underline">
            Läs mer
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
