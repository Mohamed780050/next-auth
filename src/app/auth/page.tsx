import { redirect } from "next/navigation";

function page() {
  return redirect("/auth/login");
}
export default page;
