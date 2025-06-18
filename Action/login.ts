"use server";
import { signIn } from "@/auth";
import { loginSchema } from "@/Schema/validation";
import { AuthError } from "next-auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { db } from "@/lib/db";
import { generateToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
export async function login(values: z.infer<typeof loginSchema>) {
  try {
    const reValidation = loginSchema.safeParse(values);
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    const { identifier, password } = reValidation.data;
    const exsistingUser = await db.user.findUnique({
      where: { email: identifier },
    });
    if (!exsistingUser) return { error: "Invaild credentials" };
    const foundToken = await db.verificationToken.findFirst({
      where: { email: identifier },
    });
    if (foundToken) {
      await db.verificationToken.delete({ where: { id: foundToken.id } });
      const verficiationtoken = await generateToken(identifier);
      if (!verficiationtoken) return { error: "we couldn't send the token" };
      await sendVerificationEmail(identifier, verficiationtoken);
    } else {
      const verficiationtoken = await generateToken(identifier);
      if (!verficiationtoken) return { error: "we couldn't send the token" };
      await sendVerificationEmail(identifier, verficiationtoken);
    }
    if (!exsistingUser.emailVerified)
      return { error: "Conformation code is send." };
    await signIn("credentials", {
      identifier,
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
