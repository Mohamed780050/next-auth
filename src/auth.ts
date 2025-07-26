import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import UserInfo from "@/../data/user";
import { getTwoFactorTokenConfirmationByUserId } from "@/../data/two-factor-confirmation";

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
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        console.log(profile);
      }
      if (account?.provider !== "credentials") return true;
      const existingUser = await UserInfo.getUserById(`${user.id}`);
      if (!existingUser || !existingUser.emailVerified) return false;
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation =
          await getTwoFactorTokenConfirmationByUserId(existingUser.id);
        if (!twoFactorConfirmation) return false;
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user)
        session.user.role = token.role as "ADMIN" | "USER";
      if (session.user)
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await UserInfo.getUserById(token.sub);
      if (!existingUser) return token;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
