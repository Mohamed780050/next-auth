"use server";
import { signIn } from "@/auth";
import { loginSchema } from "@/Schema/validation";
import { AuthError } from "next-auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";

export async function login(values: z.infer<typeof loginSchema>) {
  try {
    const reValidation = loginSchema.safeParse(values);
    console.log(reValidation);
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    const { identifier, password } = reValidation.data;
    await signIn("credentials", {
      emial:identifier,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (err) {
    if (err instanceof AuthError)
      switch (err.type) {
        case "CredentialsSignin":
          return {
            error: "invalid data",
          };
        default:
          return { error: "something went wrong" };
      }
    throw err;
  }
}
