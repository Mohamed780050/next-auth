"use server";
import bcrypt from "bcrypt";
import * as z from "zod";
import { db } from "@/lib/db";
import { registerSchema } from "@/Schema/validation";
import user from "../data/user";
export async function signup(values: z.infer<typeof registerSchema>) {
  try {
    const reValidation = registerSchema.safeParse(values);
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    const { username, email, password } = values;
    const checkUser = await user.getUserByEmail(email);
    if (checkUser) return { err: "user different identifiers" };
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: {
        username: username,
        email,
        password: hashedPassword,
      },
    });
    // TODO: make sure to check the database if it contains the same email
    return { success: "You sign in" };
  } catch (error) {
    console.log(typeof error);
    return { err: "Not working" };
  }
}
