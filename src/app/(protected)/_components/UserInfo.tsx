import { CardContent, CardTitle } from "@/components/ui/card";
import { UserRole } from "@prisma/client";

function UserInfo({
  label,
  id,
  username,
  email,
  role,
  isTwoFactorEnabled,
}: {
  label: string;
  id: string;
  username: string;
  email: string;
  role: UserRole;
  isTwoFactorEnabled: boolean;
}) {
  return (
    <>
      <CardTitle className="text-center">{label}</CardTitle>
      <CardContent className="flex flex-col gap-2 mt-4">
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow p-2.5">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow p-2.5">
          <p className="text-sm font-medium">Username</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {username}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow p-2.5">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow p-2.5">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow p-2.5">
          <p className="text-sm font-medium">Two Factor</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {isTwoFactorEnabled ? "Enabled" : "disabled"}
          </p>
        </div>
      </CardContent>
    </>
  );
}
export default UserInfo;
