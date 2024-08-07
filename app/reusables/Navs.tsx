"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import darkLogo from "../public/logoblack.svg";
export function Navs() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row justify-between items-center px-[1.5rem] pt-[1.25rem]">
      <Link href="/" className='cursor-pointer'>
     <Image
        src={ darkLogo}
        alt="logo"
        
      />
      </Link>
      <ul className="flex flex-row font-[Kanit] font-[400] text-[16px] text-black dark:text-[white] leading-[20px] justify-between items-center gap-[3rem]">
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            The Stock Project
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Community
          </Link>
        </li>
        <li className="w-[7.5rem] h-[3rem] bg-[#000000] dark:bg-[white] text-center rounded-[8px] flex flex-row justify-center items-center text-[white] dark:text-[black]">
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            Join us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
