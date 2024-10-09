// import { ThemeProvider } from "@/components/theme-provider";
// import { Analytics } from "@vercel/analytics/react";
// import { GeistMono } from "geist/font/mono";
// import { GeistSans } from "geist/font/sans";
// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Next MDX Blog",
//   description: "A blog built with Next.js and MDX",
//   icons: ["/avatar.png"],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="sv"
//       className={`${GeistSans.variable} ${GeistMono.variable} bg-slate-50`}
//     >
//       <body>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//           <Analytics />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Menu from "@/components/menu"; // Importera menykomponenten
import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Next MDX Blog",
//   description: "A blog built with Next.js and MDX",
//   icons: ["/avatar.png"],
// };

export const metadata = {
  title: "Next MDX Blog",
  description: "A blog built with Next.js and MDX",
  icons: ["/avatar.png"],
  metadataBase: new URL("https://motorsagskortet.vercel.app/"), // Ersätt med din faktiska domän
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      className={`${GeistSans.variable} ${GeistMono.variable} bg-slate-50`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu /> {/* Lägger till menyn här */}
          {children} {/* Här visas det dynamiska innehållet */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
