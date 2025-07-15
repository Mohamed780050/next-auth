"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

function page() {
  const user = useCurrentUser();
  console.log(user);
  return (
    <div className="bg-white p-10 rouned-xl">
      Setting: {JSON.stringify(user)}
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
export default page;
