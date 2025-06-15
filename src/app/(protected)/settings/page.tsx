import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
async function page() {
  const session = await auth();
  console.log(session?.user);
  return (
    <div>
      Setting: {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
export default page;
