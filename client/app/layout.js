import localFont from "next/font/local";
import "./globals.css";

import { cookies } from "next/headers";

import jwt from "jsonwebtoken";
import { UserProvider } from "./userContext";
import { JWT_SECRET } from "@/constants/secrets";

const montSerrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montSerrat",
  weight: "100 900",
});

const poppins = localFont({
  src: "./fonts/Poppins-VariableFont_wght.otf",
  variable: "--font-poppins",
  weight: "100 900",
});

export const metadata = {
  title: "Coopers Digital - Epeixoto",
  description: "Coopers is a digital production company that crafts projects with special care and attention to detail.",
};

export default async function RootLayout({ children }) {
  let decoded;
  const token = cookies().get("coopers-session")?.value;

  if (token) {
    decoded = jwt.verify(token, JWT_SECRET);
  }

  return (
    <html lang="en">
      <UserProvider userData={decoded?.user}>
        <body
          className={`${montSerrat.variable} ${poppins.variable} font-montSerrat antialiased`}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
