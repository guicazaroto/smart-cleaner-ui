'use client'
import {  useEffect, useState } from "react";
import "../globals.css";
import Head from "./head";
import { BASE_URL } from "@/helpers/constants";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getMe() {
      const token = Cookies.get("token");

      if (!token) {
        router.push("/entrar");
        return;
      }

      const response = await fetch(`${BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        Cookies.remove("token");
        router.push("/entrar");
      }

      const user = await response.json();
      
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    getMe();
  }
  , [router]);
  
  return (
    <html lang="en">
      <body>
       <Head />
       {user ? (
         <main>{children}</main>
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
