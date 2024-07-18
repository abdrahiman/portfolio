import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Container from "./components/container";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdrahiman Developer",
  description:
    "Hey, I'm Abdrahim , I build accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          lexend.className +
          " overscroll-y-none bg-gray-950 antialiased selection:bg-violet-600/90 selection:text-white "
        }
      >
        <Container>{children}</Container>
      </body>
    </html>
  );
}
