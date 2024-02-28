import unitLogoWhite from '@public/images/unit-logo-white.svg';
import { MoveUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

type Events = {
  name: string;
  image: string;
  link: string;
};

const events: Events[] = [
  {
    name: 'Crypto Conference',
    image: '/images/crypto-conference.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Angels',
    image: '/images/crypto-angels.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Conference',
    image: '/images/crypto-conference.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Angels',
    image: '/images/crypto-angels.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Conference',
    image: '/images/crypto-conference.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Angels',
    image: '/images/crypto-angels.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Conference',
    image: '/images/crypto-conference.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Angels',
    image: '/images/crypto-angels.jpeg',
    link: '/',
  },
];

function EventCategories() {
  return (
    <section className='flex w-full flex-col gap-y-12 pl-12 xl:pl-32'>
      <div className='flex flex-col gap-y-4 pr-12'>
        <h2 className='text-3xl font-semibold md:text-4xl'>Event Categories</h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          Discover a curated selection of events designed to captivate and
          engage every crypto enthusiast.
        </p>
      </div>
      <ScrollArea className='w-full whitespace-nowrap'>
        <div className='flex w-max gap-x-6'>
          {events.map((event, index) => (
            <div
              key={event.name}
              className={cn(
                'relative h-80 w-72 overflow-hidden rounded-md text-white',
                events.length - 1 === index && 'mr-12 md:mr-32',
              )}
            >
              <Image
                src={event.image}
                alt={event.name}
                priority
                quality={100}
                fill
                className='-z-10 object-cover'
              />
              <div className='flex h-full flex-col items-center justify-center gap-y-4 break-words p-8 text-center'>
                <Image
                  src={unitLogoWhite}
                  alt={event.name}
                  width={32}
                  height={32}
                  priority
                />
                <div className='absolute -z-10 h-full w-full bg-black opacity-40'></div>
                <h4 className='mt-auto whitespace-break-spaces text-3xl font-semibold'>
                  {event.name}
                </h4>
                <Link href={event.link}>
                  <div className='flex items-center gap-x-1 font-medium'>
                    Explore <MoveUpRightIcon />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  );
}

export default EventCategories;
