'use client';
import unitLogoBlack from '@public/images/unit-logo-black.svg';
import unitLogoWhite from '@public/images/unit-logo-white.svg';
import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';

import { cn } from '@/lib/utils';

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { height } = useWindowSize();
  const checkScroll = () => {
    if (height !== null && window.scrollY >= height - 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  return (
    <Sheet>
      <div
        className={cn(
          'fixed left-0 top-0 z-50 w-full',
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent',
        )}
      >
        <div
          className={cn(
            'left-0 right-0 flex w-full items-center gap-x-8 px-8 py-6 font-poppins font-medium transition-all sm:px-16 md:px-24 lg:px-32',
            isScrolled ? 'text-unit-black' : 'text-white',
          )}
        >
          <div className='relative mr-auto size-8 lg:size-12'>
            <Image
              src={isScrolled ? unitLogoBlack : unitLogoWhite}
              alt='Unit Network'
              fill
              priority
              quality={100}
            />
          </div>
          <div className='hidden items-center gap-x-8 md:flex'>
            <Link href='#'>Unit Network</Link>
            <Link href='#'>Events</Link>
            <Link href='#'>FAQ</Link>
          </div>
          <SheetTrigger>
            <CgMenuRightAlt className='block size-8 md:hidden' />
          </SheetTrigger>
        </div>
      </div>
      <SheetContent className='w-full'>
        <ul className='flex flex-col items-end justify-end gap-y-6 font-poppins text-xl font-semibold'>
          <li>
            <Link href='#'>Unit Network</Link>
          </li>
          <li>
            <Link href='#'>Events</Link>
          </li>
          <li>
            <Link href='#'>FAQ</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Navbar;
