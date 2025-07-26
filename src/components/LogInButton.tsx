"use client";
import { LoginButtonProps } from "@/Interfaces/interfaces";
import { useRouter } from "next/navigation";

function LogInButton({
  children,
  // asChild,
  mode = "redirect",
}: LoginButtonProps) {
  const router = useRouter();

  function onClick() {
    router.push("auth/login");
  }

  if (mode === "modal")
    return (
      <span>
        {/*  
      // TODO: add the modal here 
     */}
      </span>
    );
  return <span onClick={onClick}>{children}</span>;
}
export default LogInButton;
