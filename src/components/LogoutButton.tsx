"use client";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";

function LogoutButton() {
  return (
    <form action={() => signOut()}>
      <Button className="cursor-pointer w-full" type="submit" variant="outline">
        <LogOut />
        <p>Log out</p>
      </Button>
    </form>
  );
}
export default LogoutButton;
