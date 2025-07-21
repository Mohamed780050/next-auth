import { db } from "@/lib/db";
export async function getTwoFactorTokenConfirmationByUserId(userId: string) {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });
    return twoFactorConfirmation;
  } catch {
    return null;
  }
}
