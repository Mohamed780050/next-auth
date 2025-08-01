"use server";
import { signIn } from "@/auth";
import { loginSchema } from "@/Schema/validation";
import { AuthError } from "next-auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "../routes";
import { db } from "@/lib/db";
import { generateToken, generateTwoFactorToken } from "@/lib/tokens";
import { sendVerificationEmail, sendTwoFactorToken } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "../data/two-factor-token";
import { getTwoFactorTokenConfirmationByUserId } from "../data/two-factor-confirmation";
export async function login(values: z.infer<typeof loginSchema>) {
  try {
    const reValidation = loginSchema.safeParse(values);
    if (!reValidation.success) return { status: 400, err: "Invalid data" };
    const { identifier, password, code } = reValidation.data;
    console.log(identifier, password, code);

    const exsistingUser = await db.user.findUnique({
      where: { email: identifier },
    });

    if (!exsistingUser) return { err: "Invaild credentials" };
    const foundToken = await db.verificationToken.findFirst({
      where: { email: identifier },
    });
    console.log(exsistingUser.isEmailVerified);
    if (!exsistingUser.isEmailVerified) {
      if (foundToken) {
        await db.verificationToken.delete({ where: { id: foundToken.id } });
        const verficiationtoken = await generateToken(identifier);
        if (!verficiationtoken) return { err: "we couldn't send the token" };
        await sendVerificationEmail(identifier, verficiationtoken);
      } else {
        const verficiationtoken = await generateToken(identifier);
        if (!verficiationtoken) return { err: "we couldn't send the token" };
        await sendVerificationEmail(identifier, verficiationtoken);
      }
    }
    if (!exsistingUser.emailVerified)
      return { err: "Conformation code is send to your email." };
    if (exsistingUser.isTwoFactorEnabled && exsistingUser.email) {
      if (code) {
        const twoFactortoken = await getTwoFactorTokenByEmail(
          exsistingUser.email
        );
        if (!twoFactortoken || twoFactortoken.token !== code)
          return { err: "Invaild token" };
        const hasExpires = new Date(twoFactortoken.expires) < new Date();
        if (hasExpires) return { err: "token expired" };
        await db.twoFactorToken.delete({ where: { id: twoFactortoken.id } });
        const exsistingConfirmation =
          await getTwoFactorTokenConfirmationByUserId(exsistingUser.id);
        if (exsistingConfirmation)
          await db.twoFactorConfirmation.delete({
            where: { id: exsistingConfirmation.id },
          });
        await db.twoFactorConfirmation.create({
          data: {
            userId: exsistingUser.id,
          },
        });
      } else {
        const twoFactorToken = await generateTwoFactorToken(
          exsistingUser.email
        );
        await sendTwoFactorToken(exsistingUser.email, twoFactorToken.token);
        return { twoFactor: true };
      }
    }
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
