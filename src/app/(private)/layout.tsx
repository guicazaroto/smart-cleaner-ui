'use client'
import "../globals.css";
import Head from "./head";
import { useRouter } from "next/navigation";
import { useAuth } from "./profile/useAuth";
import { UserContext } from "./context";
import { Loader } from "@/components/loader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const user = useAuth(router);

  
  return (
    <html lang="en">
      <body>
      {user ? (
        <UserContext.Provider value={user.data}>
          <Head />
          <main>{children}</main>
        </UserContext.Provider>
       ) : <Loader />}
      </body>
    </html>
  );
}
