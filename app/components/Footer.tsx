import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="flex pt-8 md:pt-16 px-4 sm:px-16 flex-col items-center border-t border-gray-300">
        <h2 className="text-xl md:text-2xl text-center text-black">
          Sign up for the newsletter and discover the latest arrivals and
          promotions.
        </h2>
        <div className="mt-8 flex items-center justify-center sm:gap-4 md:gap-16 w-full">
          <div className="h-[1px] bg-gray-300 lg:flex-grow" />
          <div className="h-10 flex justify-center items-center w-full lg:w-4/12">
            <input
              type="email"
              placeholder="Enter your email now"
              className="bg-gray-200 border-none outline-none h-full w-full 
              pl-4 placeholder:text-black/60"
            />
            <Button
              className="bg-black h-full font-semibold 
                    sm:text-base rounded-none sm:px-6 hover:underline hover:bg-black"
            >
              SUBSCRIBE
            </Button>
          </div>
          <div className="h-[1px] bg-gray-300 lg:flex-grow" />
        </div>
        <div className="grid md:grid-cols-2  gap-8 lg:grid-cols-4 w-full mt-10 md:mt-20">
          <div>
            <h4 className="text-sm lg:mb-8 mb-4 text-black font-bold tracking-wider">
              MY ACCOUNT
            </h4>
            <ul className="text-black text-sm flex flex-col gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm lg:mb-8 mb-4 text-black font-bold tracking-wider">
              CUSTOMER SERVICE
            </h4>
            <ul className="text-black text-sm flex flex-col gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  About US
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  How to shop on YokoBuy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Return and Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Terms and Condition
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm lg:mb-8 mb-4 text-black font-bold tracking-wider">
              OUR SERVICES
            </h4>
            <ul className="text-black text-sm flex flex-col gap-1.5">
              <li>
                <Link href="/" className="hover:underline">
                  Sell on YokoBuy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Branding & Production
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Request Personal Stylist
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Earn with us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Bulk Purchase & Order
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm lg:mb-8 mb-4 text-black font-bold tracking-wider">
              CONTACT US
            </h4>
            <ul className="text-black text-sm flex flex-col gap-1.5">
              <p className="text-gray-800 leading-7 text-base font-light">
                Trade Fair Complex, Lagos State, Nigeria.
              </p>
              <li>
                <Link href="/" className="hover:underline">
                  +2348066660633 (call & whatsapp)
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  yokobuy.com@gmail.com
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  sales@yokobuy.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex md:flex-row flex-col gap-6 w-full md:justify-between">
          <div className="flex self-start gap-4 text-gray-100">
            <Link
              href="/"
              className="sm-btn flex justify-center items-center w-8 h-8 
              rounded-lg hover:from-yellow-300 hover:to-pink-400 
              hover:via-pink-400 bg-gradient-to-tr from-yellow-400 via-pink-500 to-pink-500"
            >
              <FaInstagram className="text-white" size={24} />
            </Link>
            <Link
              href="/"
              className="sm-btn flex justify-center items-center w-8 h-8 
              rounded-lg hover:bg-black/70 bg-black"
            >
              <SiX className="text-white" size={20} />
            </Link>
            <Link
              href="/"
              className="sm-btn flex justify-center items-center w-8 h-8 
              rounded-lg hover:bg-blue-500 bg-blue-600"
            >
              <FaFacebookF className="text-white" size={20} />
            </Link>
            <Link
              href="/"
              className="sm-btn flex justify-center items-center w-8 h-8 
              rounded-lg hover:bg-blue-400 bg-blue-500"
            >
              <FaLinkedinIn className="text-white" size={20} />
            </Link>
            <Link
              href="/"
              className="sm-btn flex justify-center items-center w-8 h-8 
              rounded-lg hover:bg-green-400 bg-green-500"
            >
              <FaWhatsapp className="text-white" size={22} />
            </Link>
          </div>
          <div className="">
            <h4 className="text-sm lg:mb-8 mb-4 text-black font-bold tracking-wider">
              PAYMENT METHODS
            </h4>
          </div>
        </div>
      </footer>
      <div className="mt-10 bg-black/80 w-full flex justify-center py-4">
        <span className="text-sm text-white">
          Copyrights © YokoBuy.com | May, 2024
        </span>
      </div>
    </>
  );
};

export default Footer;

// bg-primary from-pink-700 to-orange-700 bg-gradient-to-br
