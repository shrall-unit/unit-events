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

type EventCategory = {
  name: string;
  description: string;
  image: string;
  type: string;
  link: string;
};

const events: EventCategory[] = [
  {
    name: 'Crypto Conference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'LEARN • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Angels',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'LEARN • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Dance Party',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'PLAY • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Football Cup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'PLAY • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto HODL Challenge',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'LEARN • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Poker Tour',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'PLAY • NETWORK',
    link: 'https://cryptopokertour.org/',
  },
  {
    name: 'Crypto Run',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'PLAY • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Ski Week',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/crypto-angels.png',
    type: 'PLAY • NETWORK',
    link: 'https://cryptoskiweek.com/',
  },
];

function EventCategories() {
  return (
    <section className='flex w-full flex-col gap-y-12'>
      <div className='flex flex-col gap-y-4 px-8 xl:px-32'>
        <h2 className='text-2xl font-semibold md:text-3xl'>Event Categories</h2>
        <p className='text-base text-unit-grey-40 md:text-lg'>
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
        <CarouselContent className='mx-8 xl:mx-32'>
          {events.map((event, index) => (
            <CarouselItem
              key={event.name}
              className='flex w-max gap-x-6 transition-all duration-500 hover:scale-105 hover:shadow-sm'
            >
              <Link
                href={event.link}
                className={cn(
                  'relative h-96 w-72 overflow-hidden rounded-2xl bg-white text-unit-black-100',
                  events.length - 1 === index && 'mr-8 md:mr-32',
                )}
              >
                <div className='flex h-full flex-col items-center justify-center gap-y-4 break-words p-6'>
                  <div className='flex w-full flex-col gap-y-1'>
                    <span className='text-xs text-unit-grey-40'>
                      {event.type}
                    </span>
                    <h4 className='mb-2 whitespace-break-spaces text-xl font-semibold'>
                      {event.name}
                    </h4>
                    <p className='text-sm font-normal text-unit-grey-40'>
                      {event.description}
                    </p>
                  </div>
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={0}
                    height={0}
                    priority={true}
                    sizes='100vw'
                    className='mt-auto w-72 translate-y-12 self-start object-contain'
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden opacity-0 transition-all duration-500 disabled:!opacity-0 group-hover/carousel:scale-110 group-hover/carousel:opacity-100 md:flex' />
        <CarouselNext className='hidden opacity-0 transition-all duration-500 disabled:!opacity-0 group-hover/carousel:scale-110 group-hover/carousel:opacity-100 md:flex' />
      </Carousel>
    </section>
  );
}

export default EventCategories;
