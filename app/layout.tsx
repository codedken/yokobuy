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
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import ProviderSession from "./components/ProviderSession";
import Loading from "./loading";
import { Suspense } from "react";

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
      <ProviderSession>
        <body className={`${lato.className}`}>
          <CartProvider>
            <BeforeNavBar />
            <Navbar />
            <ShoppingCartModal />
            <Suspense fallback={<Loading />}>{children}</Suspense>

            <Toaster />
            <Footer />
          </CartProvider>
        </body>
      </ProviderSession>
    </html>
  );
}
