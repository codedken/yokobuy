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
import { Lock, Mail, Phone, User2, UserPlus2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z
  .object({
    firstname: z
      .string()
      .min(1, {
        message: "firstname is required",
      })
      .max(100),
    lastname: z.string().min(1, {
      message: "lastname is required",
    }),
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

const RegForm = () => {
  const { toast } = useToast();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
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
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name *</FormLabel>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-200 outline-none"
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
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    {...field}
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-200 outline-none"
                  />
                </FormControl>
                <UserPlus2 className="absolute top-0 bottom-0 my-auto left-4 w-6 h-6 text-gray-600" />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>

              <div className="w-full relative">
                <FormControl className="w-full py-3 pr-6 pl-14">
                  <input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-200 outline-none"
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
              <FormLabel>Phone Number *</FormLabel>

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
              <FormLabel>Password *</FormLabel>

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
              <FormLabel>Confirm Password *</FormLabel>

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
          className="group w-1/4 bg-black hover:bg-black text-white font-bold border-none rounded-none"
          variant="outline"
        >
          <span className="text-white text-xs sm:text-sm group-hover:underline">
            REGISTER
          </span>
        </Button>
      </form>
    </Form>
  );
};

export default RegForm;
