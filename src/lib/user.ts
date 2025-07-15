import { auth } from "@/auth";

export async function currentUserInfo() {
  const session = await auth();
  return session?.user;
}
