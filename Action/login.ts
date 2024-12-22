"use server";

import { loginSchema } from "@/Schema/validation";
import * as z from "zod";

export async function login(values: z.infer<typeof loginSchema>) {
  try {
    const reValidation = loginSchema.safeParse(values);
    console.log(reValidation);
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    return { success: "You sign in" };
  } catch (err) {
    console.log(err);
  }
}
