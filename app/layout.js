import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Background from "./components/Background";
import Footer from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "73labs",
  description: "Where A.I does the heavy lifting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Background>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </Background>
      </body>
    </html>
  );
}
