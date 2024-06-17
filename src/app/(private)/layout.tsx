'use client'
import {  useEffect } from "react";
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
        router.push("/entrar");
      }

      const user = await response.json();
      
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    getMe();
  }
  , [router]);
  
  return (
    <html lang="en">
      <body>
       <Head />
        <main>{children}</main>
      </body>
    </html>
  );
}
