"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateUserInfo } from "@/../Action/settings";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

function RoleDropMenu({ role }: { role: UserRole }) {
  const { update } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{role}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuItem>
          <form
            action={() => {
              if (role === "USER") toast.error("your are already a user.");
              else {
                updateUserInfo("USER");
                toast.success("Updated");
                update();
              }
            }}
          >
            <button type="submit">change to USER</button>
          </form>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <form
            action={() => {
              if (role === "ADMIN") toast.error("your are already a Admin.");
              else {
                updateUserInfo("ADMIN");
                toast.success("Updated");
                update();
              }
            }}
          >
            <button type="submit">change to ADMIN</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default RoleDropMenu;
