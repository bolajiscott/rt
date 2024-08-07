'use client';

import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export function Button({ buttonText, ...props }: ButtonProps) {
  return (
    <div className="flex flex-col my-[1rem]">
      <button
        className="border text-center border-[#000000] rounded-[8px] font-[Kanit] font-[400] text-[16px] text-[white] leading-[16px] w-[32rem] h-[3rem] bg-[#000000]"
        {...props}
      >
        {buttonText}
      </button>
    </div>
  );
}
