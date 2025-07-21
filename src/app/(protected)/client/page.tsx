"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import UserInfo from "../_components/UserInfo";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useCurrentUser();
  console.log(user);
  return (
    <UserInfo
      label="Client component"
      id={`${user?.id}`}
      username={`${user?.name}`}
      email={`${user?.email}`}
      isTwoFactorEnabled={user?.isTwoFactorEnabled as boolean}
      role={user?.role ? user.role : "USER"}
    />
  );
}
export default page;
