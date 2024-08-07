"use client";
import Image from "next/image";
import upload from "../public/upload.svg";
import { Modal } from "./Modal";
import { useState } from "react";
export function Submit() {
  const [file, setFile] = useState<File | null>(null);
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#0D0D0D]  px-[1.5rem] pt-[1.5rem] rounded-[32px] border-[#FFFFFF] dark:border-[#0D0D0D] border h-[24.25rem] py-auto w-[41.625rem]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-1">
          <h1 className="font-[Kanit] font-[500] text-[24px] leading-[24px] text-[#000000] dark:text-[#FFFFFF]">
            Submit photos
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[80%]">
        <div className="relative w-[12.5rem] gap-2 h-[3.5rem] bg-[#000000] dark:bg-[#FFFFFF] text-center rounded-[8px] flex flex-row justify-center items-center cursor-pointer">
          {isModalOpen ? (
            <Modal setIsModalOpen={setIsModalOpen} />
          ) : (
            <div className="flex flex-row items-center gap-2">
              <Image src={upload} alt="upload-icon" />
              <p className="font-[Kanit] font-[400] text-[16px] leading-[16px] text-[white] dark:text-[black]">
                Upload photos
              </p>
            </div>
          )}
        </div>

        <p className="font-[Kanit] w-[34rem] text-center font-[300] pt-4 text-[14px] leading-[18px] text-[#808080]">
          Submit your works for review for our{" "}
          <span className="font-[500]">STUCRUUM </span>project. Remember to tick
          ☑ the ARTRUUM’ checkbox if you’re also submitting for our
          <span className="font-[500]">ARTRUUM</span> project.
        </p>
      </div>
    </div>
  );
}
