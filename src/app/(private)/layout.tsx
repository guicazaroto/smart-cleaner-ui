'use client'
import "../globals.css";
import Head from "./head";
import { useRouter } from "next/navigation";
import { useAuth } from "./profile/useAuth";
import { UserContext } from "./context";


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
       ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
          </div>
        </div>
       )}
      </body>
    </html>
  );
}
