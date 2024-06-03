import type { Metadata } from "next";
import {
  Inter,
  Ojuju,
  Roboto,
  Playfair_Display,
  Lato,
  Montserrat,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import BeforeNavBar from "./components/BeforeNavBar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "YokoBuy | We have the best of it. Be it fashion, electronics, gadgets, ",
  description: "Shop seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <CartProvider>
          <BeforeNavBar />
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Toaster position="top-center" />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
