
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar/navbar";


export const metadata: Metadata = {
  title: "Hillary Santos | Portfólio",
  description: "Generated by Hillary Santos",
};

export default function RootLayout({ children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image" href="img/meuAvatar.png" />
      </head>
      <body>
      <ThemeProvider attribute="data-theme">
        <section id="menu">
          <Navbar />
        </section>
        {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
