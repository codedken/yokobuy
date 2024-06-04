import { Button } from "@/components/ui/button";
import { Lock, Mail, Phone, User2, UserPlus2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="w-full px-4 sm:px-10 md:px-16 lg:px-44 mb-32 mt-12 gap-6 flex flex-col justify-between">
      <h2 className="text-black md:text-2xl text-xl font-semibold">REGISTER</h2>
      <div className="flex w-full md:gap-16">
        <div className="w-1/2 md:flex hidden">
          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-wider">
              Existing Customer?
            </h2>
            <h5 className="text-black font-semibold tracking-wide">
              Click on login below
            </h5>
            <p className="text-lg">
              By creating an account you will be able to shop faster, be up to
              date on an order&apos;s status, and keep track of the orders you
              have previously made.
            </p>
            <Link href="/login">
              <Button
                className="px-10 w-1/3 rounded-none border-none bg-black hover:bg-primary"
                variant="outline"
              >
                <span className="text-white font-semibold">LOGIN</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 w-full flex items-center flex-col">
          <div className="w-full">
            <h2 className="mb-8 self-center md:text-2xl text-xl font-bold tracking-wide">
              New Customer? Register
            </h2>
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none"
                />
                <User2 className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none"
                />
                <UserPlus2 className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none"
                />
                <Mail className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
              <div className="w-full relative">
                <input
                  type="phone"
                  placeholder="Phone Number"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none"
                />
                <Phone className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>

              <div className="w-full relative">
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none tracking-wide"
                />
                <Lock className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
              <div className="w-full relative">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none tracking-wide"
                />
                <Lock className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
              <div className="flex justify-between">
                <Link href="/" className="hover:underline hover:text-primary">
                  <span>Forgot Password?</span>
                </Link>
                <span>
                  Do you have an account?
                  <Link
                    href="/login"
                    className="hover:underline hover:text-primary"
                  >
                    Login here
                  </Link>
                </span>
              </div>
              <div className="flex gap-4">
                <p>Subscribe to our newsletter</p>
                <div className="">
                  <input type="radio" name="sub" id="yes" />
                  <label className="ml-1" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="">
                  <input type="radio" name="sub" id="no" />
                  <label className="ml-1" htmlFor="no">
                    No
                  </label>
                </div>
              </div>

              <Button
                className="group w-1/4 bg-black hover:bg-black text-white font-bold border-none rounded-none"
                variant="outline"
              >
                <span className="text-white text-sm group-hover:underline">
                  REGISTER
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
