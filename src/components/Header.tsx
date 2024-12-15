import { LockKeyhole } from "lucide-react";

function Header({ label }: { label: string }) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl flex space-x-2 items-center font-semibold">
        <LockKeyhole size={30} />
        <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
export default Header;
