"use server";
import * as z from "zod";
import { resetSchema } from "@/Schema/validation";
import userInfo from "@/../data/user";
export async function resetPassword(values: z.infer<typeof resetSchema>) {
  const validation = resetSchema.safeParse(values);
  if (!validation.success) return { err: "Invalid email!" };
  const { email } = validation.data;
  console.log(email);
  const existingUser = await userInfo.getUserByEmail(email);
  console.log(existingUser);
  if (!existingUser) return { err: "User Not found" };
  return { success: "email send" };
}
