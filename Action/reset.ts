"use server";
import * as z from "zod";
import { resetSchema } from "@/Schema/validation";
import userInfo from "@/../data/user";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetToken } from "@/lib/mail";
export async function resetPassword(values: z.infer<typeof resetSchema>) {
  const validation = resetSchema.safeParse(values);
  if (!validation.success) return { err: "Invalid email!" };
  const { email } = validation.data;
  const existingUser = await userInfo.getUserByEmail(email);
  if (!existingUser) return { err: "User Not found" };
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetToken(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "email send" };
}
