"use client";
import Image from "next/image";
import arrow from "../public/arrow (2).svg";
import user from "../public/user.svg";
import content from "../public/content.svg";

export function Content({ Name, greeting }) {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#0D0D0D] px-[1.5rem] pt-[1.5rem] rounded-[32px] border-[#FFFFFF] dark:border-[#0D0D0D] border h-[18.25rem] py-auto w-[41.625rem]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-1">
          <h1 className="font-[Kanit] font-[500] text-[24px] leading-[24px] text-[#000000] dark:text-[#FFFFFF]">
            {Name}
          </h1>
          <p className="font-[Kanit] font-[300] text-[16px] leading-[16px] text-[#808080]">
            {greeting}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <div               className="outline-[#000000] dark:outline-[#FFFFFF]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#000000] dark:text-[#FFFFFF]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <Image src={arrow} alt="arrow-icon" />
        </div>
      </div>
      <div className="flex justify-center items-center h-[70%]">
        <Image src={content} alt="content-icon" />
      </div>
    </div>
  );
}
