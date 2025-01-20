import { auth } from "@/auth";
async function page() {
  const session = await auth();
  return <div>Setting: {JSON.stringify(session)}</div>;
}
export default page;
