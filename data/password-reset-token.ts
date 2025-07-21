import { db } from "@/lib/db";

export async function getPasswordTokenByToken(token: string) {
  try {
    const passwordToken = db.passwordResetToken.findFirst({
      where: { token },
    });
    return passwordToken;
  } catch {
    return null;
  }
}
export async function getPasswordTokenByEmail(email: string) {
  try {
    const passwordToken = db.passwordResetToken.findFirst({
      where: { email },
    });
    return passwordToken;
  } catch {
    return null;
  }
}
