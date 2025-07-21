import { currentUserInfo } from "@/lib/user";
import ChangeRole from "../_components/ChangeRole";

async function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = await currentUserInfo();
  console.log(user);
  return (
    <div>
      <ChangeRole role={user?.role ? user.role : "USER"} />
    </div>
  );
}
export default page;
