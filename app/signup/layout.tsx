"use client";

import "../globals.css";
import {Navs} from "../reusables/Navs"

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="relative h-[100vh]">
     <Navs/>
        {children}

        <div className="flex flex-row justify-center items-center w-full text-center mx-auto absolute bottom-[1rem]">
          <p className="font-[Kanit] font-[300] text-[12px] text-center leading-[14px]">2024 © PHOTORUUM FACILITY</p>
        </div>
      </body>
    </html>
  );
}
