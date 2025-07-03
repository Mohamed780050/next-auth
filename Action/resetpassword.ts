"use server";
import * as z from "zod";
import { resetPasswordSchema } from "@/Schema/validation";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";
export async function resetPassword(
  values: z.infer<typeof resetPasswordSchema>,
  token: string
) {
  try {
    const exsistingToken = await db.passwordResetToken.findFirst({
      where: { token },
    });
    if (!exsistingToken) return { err: "Token is not found" };
    const hasExpired = new Date(exsistingToken.expires) < new Date();
    if (hasExpired) return { err: "token expired" };
    const exsistingUser = await db.user.findFirst({
      where: { email: exsistingToken.email },
    });
    if (!exsistingUser) return { err: "not found" };
    const newPassword = await bcrypt.hash(values.password, 10);
    await db.user.update({
      where: { id: exsistingUser.id },
      data: { password: newPassword },
    });
  } catch (err) {
    return { err: "something went wrong" };
  }
}
