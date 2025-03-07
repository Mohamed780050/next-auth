import { db } from "@/lib/db";
async function getUserByEmail(identifier: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        email: identifier,
      },
    });
    return user;
  } catch {
    return null;
  }
}
async function getUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch {
    return null;
  }
}
const user = { getUserByEmail, getUserById };
export default user;
