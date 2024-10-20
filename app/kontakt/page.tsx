export default function Kontakt() {
  return (
    <div className="min-h-screen dark:bg-slate-700 ">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-green-700">
          Kontakta oss
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kontaktformulär */}
          <div className=" p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Skicka ett meddelande
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Namn
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Ditt namn"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-post
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Din e-postadress"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meddelande
                </label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={4}
                  placeholder="Skriv ditt meddelande här"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-all"
              >
                Skicka
              </button>
            </form>
          </div>

          {/* Kontaktinformation */}
          <div className=" p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Kontaktinformation</h2>
            <p className="mb-4 ">
              Har du frågor eller funderingar? Fyll i formuläret eller använd
              informationen nedan för att kontakta oss.
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold ">E-post:</span>
                <a
                  href="mailto:info@example.com"
                  className="text-green-600 hover:underline"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <span className="font-semibold ">Telefon:</span>
                <a
                  href="tel:+46123456789"
                  className="text-green-600 hover:underline"
                >
                  +46 12 345 67 89
                </a>
              </li>
              <li>
                <span className="font-semibold ">Adress:</span>
                <p className="">
                  Exempelgatan 12
                  <br />
                  123 45 Stockholm, Sverige
                </p>
              </li>
              <li>
                <span className="font-semibold ">Öppettider:</span>
                <p className="">
                  Måndag - Fredag: 09:00 - 17:00
                  <br />
                  Lördag - Söndag: Stängt
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
