import unitLogoGray from '@public/images/unit-logo-gray.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='flex w-full flex-col items-center justify-center gap-y-8 bg-unit-grey-10 py-32 text-unit-grey-40'>
      <div className='flex items-center justify-center gap-x-4'>
        <Link href='https://twitter.com/theunitnetwork'>
          <FaXTwitter className='size-6' />
        </Link>
        <Link href='https://www.facebook.com/theunitnetwork'>
          <FaFacebookF className='size-6' />
        </Link>
        <Link href='https://www.linkedin.com/company/theunitnetwork/'>
          <FaLinkedinIn className='size-6' />
        </Link>
        <Link href='https://www.youtube.com/c/UnitGlobal'>
          <FaYoutube className='size-6' />
        </Link>
        <Link href='https://t.me/unitfoundation'>
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
