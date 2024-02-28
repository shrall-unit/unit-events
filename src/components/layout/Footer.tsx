import unitLogoGray from '@public/images/unit-logo-gray.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex w-full flex-col items-center justify-center gap-y-8 bg-neutral-100 py-32 text-slate-400'>
      <div className='flex items-center justify-center gap-x-4'>
        <Link href='#'>
          <FaTwitter className='size-6' />
        </Link>
        <Link href='#'>
          <FaFacebookF className='size-6' />
        </Link>
        <Link href='#'>
          <FaLinkedinIn className='size-6' />
        </Link>
        <Link href='#'>
          <FaYoutube className='size-6' />
        </Link>
        <Link href='#'>
          <FaTelegram className='size-6' />
        </Link>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <Image
          src={unitLogoGray}
          alt='Unit Network'
          width={24}
          height={24}
          priority={true}
        />
        <span className='text-sm font-normal'>
          Copyright © {currentYear} Powered by Unit Network
        </span>
      </div>
    </div>
  );
}

export default Footer;
