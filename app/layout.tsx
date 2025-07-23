
import "./globals.css";
import { Albert_Sans , Montserrat_Alternates } from "next/font/google";
import { RootLayoutProps } from "@/app/types"; //no need to use /index.ts in import as 
import Navbar from "./components/Navbar";
                                                // it(index) is the default file in the folder

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap"
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat-alternates"
});


export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
