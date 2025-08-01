import { currentUserInfo } from "@/lib/user";
import UserInfo from "../_components/UserInfo";

async function page() {
  const userInfo = await currentUserInfo();
  return (
    <UserInfo
      label="server Component"
      id={`${userInfo?.id}`}
      email={`${userInfo?.email}`}
      username={`${userInfo?.name}`}
      isTwoFactorEnabled={userInfo?.isTwoFactorEnabled as boolean}
      role={userInfo?.role ? userInfo.role : "USER"}
    />
  );
}
export default page;
