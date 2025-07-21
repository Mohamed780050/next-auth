import { UserRole } from "@prisma/client";
import RoleDropMenu from "./RoleDropMenu";

function ChangeRole({ role }: { role: UserRole }) {
  return (
    <div className="flex items-center justify-between">
      <p>your role is {role}.</p>
      <RoleDropMenu role={role} />
    </div>
  );
}
export default ChangeRole;
