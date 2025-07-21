import { randomUUID } from "crypto";
import { db } from "./db";

import { getTwoFactorTokenByEmail } from "../../data/two-factor-token";
import { getVerificationToken } from "../../data/verficiation-token";
import { getPasswordTokenByEmail } from "../../data/password-reset-token";

export async function generatePasswordResetToken(email: string) {
  const token = randomUUID().split("-")[0];
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getPasswordTokenByEmail(email);
  if (existingToken)
    await db.passwordResetToken.delete({ where: { id: existingToken.id } });
  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
  return passwordResetToken;
}

export async function generateToken(email: string) {
  try {
    const token = randomUUID().split("-")[0];
    const expires = new Date(new Date().getTime() + 3600 * 1000);
    const existingToken = await getVerificationToken(email);
    if (existingToken)
      await db.verificationToken.delete({ where: { id: existingToken.id } });
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
    return null;
  }
}

export async function generateTwoFactorToken(email: string) {
  const token = randomUUID().split("-")[0];
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken)
    await db.twoFactorToken.delete({ where: { id: existingToken.id } });
  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      expires,
      token,
    },
  });
  return twoFactorToken;
}
