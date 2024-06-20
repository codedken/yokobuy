import { Button } from "@/components/ui/button";
import { Lock, Mail } from "lucide-react";
import { signIn, ProviderMap, auth } from "@/auth";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";

const Login = async () => {
  const names = ["google_logo_nobg"];

  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="w-full px-4 sm:px-6 lg:px-30 xl:px-44 mb-32 mt-12 gap-6 flex flex-col justify-between">
      <h2 className="text-black md:text-2xl text-xl font-semibold">LOGIN</h2>
      <div className="flex w-full md:gap-16">
        <div className="w-1/2 md:flex hidden">
          <div className="w-3/4 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold tracking-wider">
              New Customer?
            </h2>
            <h5 className="text-black font-semibold tracking-wide">
              Click on register below
            </h5>
            <p className="text-lg">
              By creating an account you will be able to shop faster, be up to
              date on an order&apos;s status, and keep track of the orders you
              have previously made.
            </p>
            <Link href="/register">
              <Button
                className="px-10 w-1/3 rounded-none border-none bg-black hover:bg-primary"
                variant="outline"
              >
                <span className="text-white font-semibold">REGISTER</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 w-full flex items-center flex-col">
          <div className="w-full">
            <h2 className="mb-6 self-center md:text-2xl text-xl font-bold tracking-wide">
              Returning Customer? Login
            </h2>
            <div className="mb-4 flex flex-col w-full gap-2">
              <div className="flex gap-2">
                {Object.values(ProviderMap).map((provider, i) => (
                  <form
                    action={async () => {
                      "use server";

                      await signIn(provider.id, {
                        redirectTo: "/",
                      });
                    }}
                    key={provider.id}
                  >
                    <button
                      type="submit"
                      className="hover:bg-gray-50 px-4 py-2 w-fit
                flex border border-gray-500 gap-3 items-center 
                cursor-pointer"
                    >
                      <img
                        src={`/${names[i]}.png`}
                        alt=""
                        className="w-6 h-6"
                      />
                      <span className="text-sm text-gray-500 tracking-wide">
                        Sign in with {provider.name}
                      </span>
                    </button>
                  </form>
                ))}
              </div>

              <h3 className="text-gray-500">OR</h3>
              <span>Login with your email and password</span>
            </div>

            <div className="flex flex-col gap-4 w-full">
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
                  type="password"
                  placeholder="Password"
                  className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none tracking-wide"
                />
                <Lock className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
              <div className="flex gap-4 justify-between">
                <Link
                  href="/"
                  className="text-sm sm:text-base hover:underline hover:text-primary"
                >
                  <span className="whitespace-nowrap">Forgot Password?</span>
                </Link>
                <span className="flex gap-1 flex-wrap text-sm sm:text-base">
                  Don&apos;t have an account?
                  <Link
                    href="/register"
                    className="hover:underline hover:text-primary"
                  >
                    Register here
                  </Link>
                </span>
              </div>
              <Button
                className="group w-1/4 bg-black hover:bg-black text-white font-bold border-none rounded-none"
                variant="outline"
              >
                <span className="text-white text-xs sm:text-sm group-hover:underline">
                  LOGIN
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
