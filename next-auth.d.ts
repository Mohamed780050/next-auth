import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";

export type ExtenderUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
};
declare module "next-auth" {
  interface Session {
    user: ExtenderUser;
  }
}
