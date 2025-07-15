"use client";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

function LogoutButton() {
  return (
    <div className="cursor-pointer" onClick={() => signOut()}>
      <LogOut />
    </div>
  );
}
export default LogoutButton;
