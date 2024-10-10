import Link from "next/link";

export default function Resurser() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Samling av Resurser</h1>

      <ul className="list-disc pl-6">
        <li className="mb-2">
          <Link href="/git-lathund" className="text-blue-500 hover:underline">
            Git Lathund
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/resurser/another-resource"
            className="text-blue-500 hover:underline"
          >
            Annat Resursexempel
          </Link>
        </li>
        {/* Lägg till fler länkar till andra MDX-filer här */}
      </ul>
    </div>
  );
}
