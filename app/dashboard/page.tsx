"use client";

import { Submit } from "../reusables/Submit";
import { Content } from "./../reusables/Content";
import { Submissions } from "./../reusables/Submissions";
import { usePathname } from "next/navigation";

export default function Dashboard() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-[1.5rem] items-center h-[90vh] dark:bg-[#161616] justify-center">
      <div className="flex flex-col h-[80vh] justify-center items-center">
        <div className="mb-[1.5rem]">
          <Content greeting="Good afternoon!" Name="Isaac Gyamfi" />
        </div>
        <Submit />
      </div>
      <Submissions />
    </div>
  );
}
