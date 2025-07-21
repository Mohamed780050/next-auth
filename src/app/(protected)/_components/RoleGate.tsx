"use client";

import FormError from "@/components/FormError";
import { UserRole } from "@prisma/client";
import { ReactNode } from "react";

function RoleGate({
  role,
  children,
  allowedRole,
}: {
  role: UserRole;
  children: ReactNode;
  allowedRole: UserRole;
}) {
  if (role !== allowedRole)
    return (
      <FormError message="You don't have a permission to see what is here." />
    );
  return <>{children}</>;
}
export default RoleGate;
