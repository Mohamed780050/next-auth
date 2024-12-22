"use server";
import * as z from "zod";
import { registerSchema } from "@/Schema/validation";
export async function signup(values: z.infer<typeof registerSchema>) {
  try {
    const reValidation = registerSchema.safeParse(values);
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    return { success: "You sign in" };
  } catch (err) {
    console.log(err);
  }
}
