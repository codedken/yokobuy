"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "provide an email address",
    })
    .email("Invalid email address"),
  password: z.string().min(1, {
    message: "password is required",
  }),
});

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [progress, setProgress] = useState(false);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setProgress(true);
    const signInData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (signInData?.error) {
      setProgress(false);
      toast({
        title: "You are not getting something right",
        description: "Maybe you entered the wrong email or password",
      });
    } else {
      setProgress(false);
      router.replace("/");
    }
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="w-full">
      <h2 className="mb-6 self-center md:text-2xl text-xl font-bold tracking-wide">
        Returning Customer? Login
      </h2>
      <div className="mb-4 flex flex-col w-full gap-2">
        <div className="flex gap-2">
          <button
            onClick={async () =>
              await signIn("google", {
                callbackUrl: "/register",
              })
            }
            type="submit"
            className="hover:bg-gray-50 px-4 py-2 w-fit
                flex border border-gray-500 gap-3 items-center 
                cursor-pointer"
          >
            <Image
              src="/google_logo_nobg.png"
              alt="Google"
              width={100}
              height={100}
              className="w-6 h-6"
            />
            <span className="text-sm text-gray-500 tracking-wide">
              Sign in with Google
            </span>
          </button>
        </div>

        <h3 className="text-gray-500">OR</h3>
        <span>Login with your email and password</span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-4 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-gray-500">Email *</FormLabel>
                    <FormMessage />
                  </div>
                  <div className="w-full relative">
                    <FormControl>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none"
                        {...field}
                      />
                    </FormControl>
                    <Mail className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel className="text-gray-500">Password *</FormLabel>
                    <FormMessage />
                  </div>
                  <div className="w-full relative">
                    <FormControl>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full py-3 pr-6 pl-14 bg-gray-200 outline-none tracking-wide"
                        {...field}
                      />
                    </FormControl>
                    <Lock className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex gap-4 justify-between">
              <Link
                href="/"
                className="text-sm sm:text-base hover:underline hover:text-primary"
              >
                <span className="whitespace-nowrap">Forgot Password?</span>
              </Link>
              <div className="text-sm sm:text-base flex flex-col justify-end">
                <span className="">Don&apos;t have an account?</span>
                <Link
                  href="/register"
                  className="text-primary hover:underline self-end"
                >
                  Register here
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              className="group flex gap-2 items-center w-fit px-4
               bg-black hover:bg-black text-white font-bold 
               border-none rounded-none"
              variant="outline"
            >
              {progress && (
                <div
                  className="animate-spin w-5 h-5 rounded-full 
            border-gray-400 border-4 border-t-white"
                />
              )}
              <span className="text-white text-xs sm:text-sm group-hover:underline">
                LOGIN
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
