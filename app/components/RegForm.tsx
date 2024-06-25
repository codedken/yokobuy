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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail, Phone, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { User } from "next-auth";

const FormSchema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: "name is required",
      })
      .max(100),
    email: z
      .string()
      .min(1, {
        message: "provide an email address",
      })
      .email("Invalid email address"),
    phone: z.string().min(1, {
      message: "enter your phone number.",
    }),
    password: z.string().min(1, {
      message: "password is required",
    }),
    confirmpassword: z.string().min(1, {
      message: "enter the password again",
    }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    path: ["confirmpassword"],
    message: "Password do not match",
  });

interface RegFormProps {
  user: User | null;
}
const RegForm = ({ user }: RegFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [progress, setProgress] = useState(false);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setProgress(true);
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
      }),
    });

    if (response.ok) {
      setProgress(false);
      router.push("/login");
    } else if (response.status === 409) {
      setProgress(false);
      toast({
        title: "Registration failed",
        description: "User with this email already exists!",
      });
    } else {
      setProgress(false);
      toast({
        title: "Registration failed",
        description: "Something went wrong!",
      });
    }
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: "",
      password: "",
      confirmpassword: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-1 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-500">Name *</FormLabel>
                <FormMessage />
              </div>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`bg-gray-200 ${user && "pointer-events-none"} outline-none`}
                    {...field}
                  />
                </FormControl>
                <User2 className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-500">Email Address *</FormLabel>
                <FormMessage />
              </div>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className={`bg-gray-200 ${user && "pointer-events-none"} outline-none`}
                  />
                </FormControl>
                <Mail className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-500">Phone Number *</FormLabel>
                <FormMessage />
              </div>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    {...field}
                    type="phone"
                    placeholder="Phone Number"
                    className="bg-gray-200 outline-none"
                  />
                </FormControl>
                <Phone className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
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
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    {...field}
                    type="password"
                    placeholder="New Password"
                    className="bg-gray-200 outline-none tracking-wide"
                  />
                </FormControl>
                <Lock className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmpassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel className="text-gray-500">
                  Confirm Password *
                </FormLabel>
                <FormMessage />
              </div>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    {...field}
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-gray-200 outline-none tracking-wide"
                  />
                </FormControl>
                <Lock className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
            </FormItem>
          )}
        />

        <div className="my-3">
          <p className="flex gap-1 flex-wrap text-sm sm:text-base">
            Do you have an account?
            <button
              type="submit"
              className="hover:underline text-primary 
                    hover:text-primary cursor-pointer"
            >
              Login here
            </button>
          </p>
        </div>
        <div className="flex mb-4 gap-4 text-sm sm:text-base">
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
          type="submit"
          className="group w-fit bg-black hover:bg-black 
          text-white font-bold border-none rounded-none 
          flex gap-2 items-center"
          variant="outline"
        >
          {progress && (
            <div
              className="animate-spin w-5 h-5 border-4 border-gray-500
           border-t-white rounded-full"
            />
          )}

          <span className="text-white text-xs sm:text-sm group-hover:underline">
            REGISTER
          </span>
        </Button>
      </form>
    </Form>
  );
};

export default RegForm;
