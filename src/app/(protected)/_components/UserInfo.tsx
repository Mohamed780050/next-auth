import { CardContent, CardTitle } from "@/components/ui/card";

function UserInfo({
  label,
  id,
  username,
  email,
}: {
  label: string;
  id: string;
  username: string;
  email: string;
}) {
  return (
    <>
      <CardTitle className="text-center">{label}</CardTitle>
      <CardContent className="space-y-4 mt-4">
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow-sm">
          <p className="text-sm font-medium">Username</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {username}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
            {email}
          </p>
        </div>
      </CardContent>
    </>
  );
}
export default UserInfo;
