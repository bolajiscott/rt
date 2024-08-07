'use client'

import Image from 'next/image';
import base from '../../app/public/image-slider.png';
import { Input } from './../reusables/Input';
import { Button } from './../reusables/Button';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathname = usePathname();

  return (
    <div className="flex flex-row  justify-center items-center h-[80vh] ">
        <div className='flex flex-row w-[100%] max-w-[100%]  justify-center gap-[3rem] items-start'>
          <Image src={base} alt='base'className='w-[100%] max-w-[50%] h-[50%]' />
        <div className='w-[100%] max-w-[50%]'>
          <div className="flex flex-row items-center gap-1">
            <h1 className='font-[500] font-[Kanit] text-[24px] leading-[24px]'>Signup • </h1> 
            <h2 className='font-[300] font-[Kanit] text-[16px] leading-[22px]'>Already have an account?</h2>
            <span className='font-[400] font-[Kanit] underline underline-offset-3 text-[16px] leading-[22px]'><Link href="/">Login</Link></span>
          </div>
          <p className='mt-4 text-[#808080] font-[Kanit] font-[300] text-[16px] leading-[22px] w-[26.875rem]'>
          Create your account to unlock your creative potential with our photography community          </p>
          <hr className='w-full my-[2.625rem]'/>
          <div className='flex flex-row gap-2 mb-3'>
            <Input label='First name' placeholder='Your name' type='name'/>
            <Input label='Last name' placeholder='Your last name' type='name'/>

          </div>

          <div className='flex flex-row gap-2 '>
            <Input label='Email' placeholder='Your email address' type='email'/>
            <Input label='Create Password' placeholder='Enter your password' type='password'/>

          </div>
          <Button buttonText="Let's go!"/>
          
          </div>
        </div>
      </div>
  );
}
