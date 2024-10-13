"use client"; // Detta markerar att komponenten är en Client Component

import { useState } from "react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-lg bg-gray-100 dark:bg-slate-700 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {question}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-gray-50 dark:bg-slate-600 border-l-4 border-green-500">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Vad är ett motorsågskörkort?",
      answer:
        "Ett motorsågskörkort är ett certifikat som visar att du har nödvändig kunskap och säkerhetsfärdigheter för att använda en motorsåg.",
    },
    {
      question: "Hur länge gäller ett motorsågskörkort?",
      answer:
        "Motorsågskörkortet är giltigt på obestämd tid, men det rekommenderas att hålla sig uppdaterad med nya säkerhetsföreskrifter.",
    },
    {
      question: "Vilka olika nivåer finns det för motorsågskörkort?",
      answer:
        "Det finns olika nivåer av motorsågskörkort, från A till F, beroende på vilken typ av arbete du planerar att utföra.",
    },
    {
      question: "Behöver jag förnya mitt motorsågskörkort?",
      answer:
        "Det krävs inga obligatoriska förnyelser, men det är en god idé att uppdatera dina kunskaper regelbundet.",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-center text-3xl font-bold mb-6 relative">
        Vanliga Frågor och Resurser
        <span
          style={{ height: "2px" }}
          className="block w-24 bg-green-500 mt-2 mx-auto"
        ></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
