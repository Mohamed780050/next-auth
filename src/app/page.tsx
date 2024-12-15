import LogInButton from "@/components/LogInButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LockKeyhole } from "lucide-react";
import { Poppins } from "next/font/google";

const fonts = Poppins({
  subsets: ["latin"],
  weight: "600",
});
export default function Home() {
  return (
    <div className="space-y-6">
      <h1
        className={cn(
          "text-6xl flex gap-x-2 font-semibold text-white drop-shadow-md",
          fonts.className
        )}
      >
        <LockKeyhole size={50} />
        Auth
      </h1>
      <LogInButton>
        <Button>Sign in</Button>
      </LogInButton>
    </div>
  );
}
