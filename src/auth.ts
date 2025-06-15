import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import UserInfo from "@/../data/user";
type newSession = DefaultSession["user"] & { role: "ADMIN" | "USER" };
export const { handlers, signIn, signOut, auth } = NextAuth({
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
          
        },
      });
    },
  },
  callbacks: {
    // async signIn({ user }) {
    //   const existingUser = await UserInfo.getUserById(`${user.id}`);
    //   if (!existingUser || !existingUser.emailVerified) return false;
    //   return true;
    // },
    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user) {
        const MyNewSession: newSession = {
          ...session,
          role: token.role as "ADMIN" | "USER",
        };
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await UserInfo.getUserById(token.sub);
      token.role = existingUser?.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
