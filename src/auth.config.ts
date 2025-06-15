import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig, User } from "next-auth";
import { loginSchema } from "./Schema/validation";
import bcrypt from "bcryptjs";
import user from "../data/user";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials): Promise<User | null> {
        try {
          const validation = loginSchema.safeParse(credentials);
          if (!validation.success) return null;

          const { identifier, password } = validation.data;

          const checkUser = await user.getUserByEmail(identifier);
          console.log(checkUser);
          if (!checkUser || !checkUser.password) return null;

          const checkPassword = await bcrypt.compare(
            password,
            checkUser.password
          );
          if (!checkPassword) return null;

          // Ensure the object matches the `User` type expected by NextAuth
          return {
            id: checkUser.id, // Required
            name: checkUser.username, // Optional
            email: checkUser.email, // Optional
          } satisfies User;
        } catch (err) {
          console.error("Authorize error:", err);
          return null; // Always return null on error
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
