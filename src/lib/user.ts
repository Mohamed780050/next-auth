import { auth } from "@/auth";

export async function currentUserInfo() {
  const session = await auth();
  return session?.user;
}
export async function currentUserRole() {
  const session = await auth();
  return session?.user.role;
}
