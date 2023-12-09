"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import dotenv from 'dotenv';
dotenv.config();

import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ['latin'] });


interface TokenPayload {
  id: string;
  name: string;
  email: string;
  quota: string;
  role: string;

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [tokenPayload, setTokenPayload] = useState<TokenPayload>({
    id: "",
    name: "",
    email: "",
    quota: "",
    role: ""
  });

  //Change Password state
  const path = usePathname();

  // Check if user is already logged in
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (!token && path!=="/auth") {
      window.location.href = "/auth";
    } else {
      setTokenPayload(cookies.get("payload"));
    }
  }, []);


  return (
    <>
    <html lang="en" suppressHydrationWarning={true}>
      <title>SMART DORMITORY</title>
      <body>
      <link rel="icon" href="/images/favicon.ico"></link>
      {/* <body className={inter.className}>{children}</body> */}
      {usePathname() == "/auth" ?
      <div>{children}</div> 
      :
      <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
        <div className="fixed flex z-40 md:relative md:flex-none md:w-[17rem]">
          <Sidebar role={tokenPayload.role} userId={tokenPayload.id}/>
        </div>
        <div className="md:flex-grow  w-full ">
          <Header role={tokenPayload.role} quota={tokenPayload.quota}/>
          <div>{children}</div>
        </div>
      </div>
      }
      </body>
      
    </html>
    </>
  );
}

