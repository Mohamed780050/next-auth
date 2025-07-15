"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { User2 } from "lucide-react";

function UserAvatar() {
  const user = useCurrentUser();
  return (
    <Avatar>
      <AvatarImage src={user?.image ? user.image : ""} />
      <AvatarFallback className="bg-sky-500">
        <User2 />
      </AvatarFallback>
    </Avatar>
  );
}
export default UserAvatar;
