import { auth, unstable_update } from "@/auth";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  try {
    const body = await req.json();
    const { name, email, phone, password } = body;

    // Check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUserByEmail && existingUserByEmail.phone) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    if (session?.user) {
      const updatedUser = await prisma.user.update({
        where: {
          email: session.user.email as string,
        },
        data: {
          phone,
          password: hashedPassword,
        },
      });

      await unstable_update({
        ...session,
        user: { ...session.user, phone: updatedUser.phone },
      });

      const { password: newUserPassword, ...rest } = updatedUser;

      return NextResponse.json(
        { user: rest, message: "User created successfully" },
        { status: 201 }
      );
    } else {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          phone,
          password: hashedPassword,
        },
      });

      const { password: newUserPassword, ...rest } = newUser;

      return NextResponse.json(
        { user: rest, message: "User created successfully" },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
