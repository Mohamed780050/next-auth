"use server";
import { db } from "@/lib/db";
import userInfo from "@/../data/user";
import { getVerificationTokenByToken } from "../data/verficiation-token";
export async function verifyEmialToken(token: string) {
  try {
    const existingToken = await getVerificationTokenByToken(token);
    console.log(existingToken);
    if (!existingToken) return { error: "Token does not exists." };
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) return { error: "Token expired." };
    const existingUser = await userInfo.getUserByEmail(existingToken.email);
    if (!existingUser) return { error: "something went wrong" };

    await db.user.update({
      where: { id: existingUser.id },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });
    await db.verificationToken.delete({ where: { id: existingToken.id } });
  } catch (err) {
    console.log(err);
  }
}
