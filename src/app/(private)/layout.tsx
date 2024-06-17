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
    fetch(`${BASE_URL}/me`).then((res) => {
      if (res.status === 401) {
        Cookies.remove("token");
        router.push("/entrar");
      }
    });
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
