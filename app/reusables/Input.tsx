"use client";

export function Input({ type, placeholder, label }) {
  return (
    <div className="flex flex-col">
      <label className="font-[Kanit] pb-[1rem] font-[400] text-[16px] leading-[16px] text-[#000000]">{label}</label>
      <input
        className="border outline-none focus:border-none focus:ring-0 pl-[1rem] border-[#A5A5A5] rounded-[8px] font-[Kanit] font-[300] text-[16px] text-[#A5A5A5] leading-[22px] placeholder:text-[16px] placeholder:font-[300] placeholder:leading-[22px] placeholder:font-[Kanit] placeholder:text-[#A5A5A5] w-[15.5rem] h-[3rem] bg-[#FAFAFA]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
