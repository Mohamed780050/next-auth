"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateUserInfo(wantedRole: UserRole) {
  // try {
  //   const user = await currentUserInfo();
  //   if (!user) return { error: "unauthorized" };
  //   const existingUser = await db.user.findUnique({ where: { id: user.id } });
  //   if (!existingUser) return { error: "unauthorized" };
  //   await db.user.update({
  //     where: { id: existingUser.id },
  //     data: { ...values },
  //   });
  //   return { success: "settings updated" };
  // } catch (error) {
  //   console.log(error);
  //   return { error: "something went wrong" };
  // }
  const session = await auth();
  if (!session) throw new Error("there is no user info.");
  await db.user.update({
    where: { id: session.user.id },
    data: { role: wantedRole },
  });
  revalidatePath("/");
}
