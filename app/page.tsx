import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import style from '@/app/ui/home.module.css'
import { lusitana } from "@/app/ui/fonts";
import Image from 'next/image';

export default function Page() {
  return (
    <>
      {/* // This are Tailwind classes */}
      <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
        <Image 
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className='hidden md:block'
          alt='image-desktop'
        />
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className='hidden md:block'
          alt='img-mobile'
        />
      </div>
    </>
  );
}
