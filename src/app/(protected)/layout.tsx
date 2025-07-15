import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "./_components/Navbar";
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
        {children}
      </SessionProvider>
    </>
  );
}
