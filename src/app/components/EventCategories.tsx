import unitLogoWhite from '@public/images/unit-logo-white.svg';
import { MoveUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
    name: 'Crypto Dance Party',
    image: '/images/crypto-dance-party.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Football Cup',
    image: '/images/crypto-football-cup.jpeg',
    link: '/',
  },
  {
    name: 'Crypto HODL Challenge',
    image: '/images/crypto-hodl-challenge.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Poker Tour',
    image: '/images/crypto-poker-tour.jpeg',
    link: 'https://cryptopokertour.org/',
  },
  {
    name: 'Crypto Run',
    image: '/images/crypto-run.jpeg',
    link: '/',
  },
  {
    name: 'Crypto Ski Week',
    image: '/images/crypto-ski.jpeg',
    link: 'https://cryptoskiweek.com/',
  },
];

function EventCategories() {
  return (
    <section id='events' className='flex w-full flex-col gap-y-12'>
      <div className='flex flex-col gap-y-4 px-12 xl:px-32'>
        <h2 className='text-3xl font-semibold md:text-4xl'>Event Categories</h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          Discover a curated selection of events designed to captivate and
          engage every crypto enthusiast.
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          skipSnaps: true,
        }}
        className='group/carousel w-full'
      >
        <CarouselContent className='mx-12 xl:mx-32'>
          {events.map((event, index) => (
            <CarouselItem
              key={event.name}
              className='flex w-max gap-x-6 transition-all duration-500 hover:scale-105 hover:shadow-sm'
            >
              <div
                className={cn(
                  'relative h-96 w-72 overflow-hidden rounded-2xl text-white',
                  events.length - 1 === index && 'mr-12 md:mr-32',
                )}
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  priority={true}
                  quality={100}
                  fill
                  className='-z-10 object-cover'
                />
                <div className='flex h-full flex-col items-center justify-center gap-y-4 break-words p-8'>
                  <Image
                    src={unitLogoWhite}
                    alt={event.name}
                    width={32}
                    height={32}
                    priority={true}
                    className='self-start'
                  />
                  <div className='absolute -z-10 h-full w-full bg-black opacity-40'></div>
                  <div className='mt-auto flex w-full flex-col'>
                    <h4 className='whitespace-break-spaces text-3xl font-semibold'>
                      {event.name}
                    </h4>
                    <p>Lorem ipsum</p>
                  </div>
                  <Link href={event.link} className='w-full'>
                    <div className='flex items-center gap-x-1 font-medium'>
                      Explore <MoveUpRightIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden !opacity-0 transition-all duration-500 group-hover/carousel:scale-110 group-hover/carousel:!opacity-100 md:flex' />
        <CarouselNext className='hidden !opacity-0 transition-all duration-500 group-hover/carousel:scale-110 group-hover/carousel:!opacity-100 md:flex' />
      </Carousel>
    </section>
  );
}

export default EventCategories;
