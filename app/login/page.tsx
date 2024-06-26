import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LoginForm from "../components/LoginForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Login = async () => {
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
