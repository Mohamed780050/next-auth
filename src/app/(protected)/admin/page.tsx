import { CardContent, CardHeader } from "@/components/ui/card";
import { currentUserRole } from "@/lib/user";
import { UserCog2Icon } from "lucide-react";
import RoleGate from "../_components/RoleGate";
import { UserRole } from "@prisma/client";
import FormSuccess from "@/components/FormSuccess";

async function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const role = await currentUserRole();
  return (
    <>
      <CardHeader className="p-0 flex items-center justify-center flex-row gap-3">
        <UserCog2Icon />
        <p>Admin page</p>
      </CardHeader>
      <CardContent className="mt-4">
        <RoleGate allowedRole="ADMIN" role={role as UserRole}>
          <FormSuccess message="Your are an admin." />
        </RoleGate>
      </CardContent>
    </>
  );
}
export default page;
