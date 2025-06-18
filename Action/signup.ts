"use server";
import bcrypt from "bcrypt";
import * as z from "zod";
import { db } from "@/lib/db";
import { registerSchema } from "@/Schema/validation";
import user from "../data/user";
import {generateToken} from "@/lib/tokens"
export async function signup(values: z.infer<typeof registerSchema>) {
  try {
    const reValidation = registerSchema.safeParse(values);
    
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    const { username, email, password } = values;
    const checkUser = await user.getUserByEmail(email);
    if (checkUser) return { err: "user different identifiers" };
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("working")
    await db.user.create({
      data: {
        username: username,
        email,
        password: hashedPassword,
      },
    });
    await generateToken(email)
    // TODO: make sure to check the database if it contains the same email
    return { success: "Confirmation code send to your email." };
  } catch (error) {
    console.log(typeof error);
    console.log(error);
    return { err: "Not working" };
  }
}
