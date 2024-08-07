"use client";
import "../../app/globals.css";
import { useState, useEffect } from "react";
import { Nav } from "../reusables/Nav";
import Image from "next/image";
import white from "../public/white.svg";
import black from "../public/black.svg";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative h-[100vh] bg-[#EFEFEF] dark:bg-[#161616]">
      <Nav darkMode={darkMode} />
      {children}

      <div className="flex flex-row ml-[1.5rem] justify-between items-center text-center mx-auto absolute bottom-[1rem]">
        <button onClick={() => setDarkMode(!darkMode)}>
          <Image src={darkMode ? white : black} alt="darkmode-icon" />
        </button>
      </div>
    </div>
  );
}