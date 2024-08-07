"use client";
import Image from 'next/image';
import info from '../public/info.svg';

export function Submissions() {
  return (
    <div className='bg-[#FFFFFF] dark:bg-[#0D0D0D]  px-[1.5rem] pt-[1.5rem] rounded-[32px] border-[#FFFFFF] dark:border-[#0D0D0D] border h-[44rem] py-auto w-[41.625rem]'>
      <div className='flex flex-row justify-between'>
        <div className="flex flex-row items-center gap-1">
          <h1 className="font-[Kanit] font-[500] text-[24px] leading-[24px] text-[#000000] dark:text-[#FFFFFF]">
          Your submissions
          </h1>
       
        </div>
       
      </div>
      <div className='flex justify-center items-center h-[90%]'>
        <Image src={info} alt='content-icon'/>
        <p className="font-[Kanit] font-[300] text-[14px] leading-[16px] text-[#808080]">All submissions will appear here</p>
      </div>
    </div>
  );
}
