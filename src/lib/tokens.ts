import { randomUUID } from "crypto";
import { db } from "./db";
import { getVerificationToken } from "../../data/verficiation-token";

export async function generateToken(email: string) {
  try {
    const token = randomUUID().split("-")[0];
    const expires = new Date(new Date().getTime() + 3600 * 1000);
    const exsistingToken = await getVerificationToken(email);
    if (exsistingToken)
      await db.verificationToken.delete({ where: { id: exsistingToken.id } });
    const verificationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });
    return verificationToken.token;
  } catch (error) {
    console.log(error);
    return null
  }
}
