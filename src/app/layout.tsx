import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./Components 3/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const elements = [
    { url: "/", name: "Info" },
    { url: "/", name: "Support" },
    { url: "/", name: " Marketing" },
    { url: "/", name: "Terms of Use" },
    { url: "/", name: " Privacy Policy" },
  ];

  let socialElements = [
    {
      url: "https://es-la.facebook.com/",
      iconUrl: "./icons/icon-facebook.svg",
      alt: "facebook",
    },
    {
      url: "https://www.instagram.com/accounts/login/?__coig_restricted=1",
      iconUrl: "./icons/icon-instagram.svg",
      alt: "Instagram",
    },
    {
      url: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D",
      iconUrl: "./icons/icon-twitter.svg",
      alt: "Twitter",
    },
  ];

  let logoImg = {
    url: "./icons/icon-Logo.svg",
    alt: "Logo",
  };
  return (
    <html lang="en">
      <head>
        <title>myPet</title>
      </head>
      <body className={inter.className}>
        <header></header>
        <main>{children}</main>
        <footer>
          <Footer
            elements={elements}
            socialElements={socialElements}
            logoImg={logoImg}
          />
        </footer>
      </body>
    </html>
  );
}
