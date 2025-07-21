import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { db } from "./db";

export async function currentUserInfo() {
  const session = await auth();
  return session?.user;
}
export async function currentUserRole() {
  const session = await auth();
  return session?.user.role;
}
export async function ChangeUserRole(wantedRole: UserRole) {
  const session = await auth();
  if (!session) throw new Error("there is no user info.");
  await db.user.update({
    where: { id: session.user.id },
    data: { role: wantedRole },
  });
}
