"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const user = useCurrentUser();
  console.log(user);
  return <div></div>;
}
export default page;
