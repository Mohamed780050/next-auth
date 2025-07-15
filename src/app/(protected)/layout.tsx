import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "./_components/Navbar";
import { Card } from "@/components/ui/card";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Card className="bg-white p-10 w-full max-w-[600px] mt-8 rounded-xl">
          {children}
        </Card>
      </SessionProvider>
    </>
  );
}
