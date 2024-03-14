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
    name: 'Crypto Ski Week',
    description:
      'An epic gathering of crypto enthusiasts in some of the world’s most breathtaking ski resorts.',
    image: '/images/crypto-ski-week.png',
    type: 'PLAY • NETWORK',
    link: 'https://cryptoskiweek.com/',
  },
  {
    name: 'Crypto Dance Party',
    description:
      'A unique gathering which empowers attendees to lead discussions, share insights, and collaborate on the future of crypto.',
    image: '/images/crypto-dance-party.png',
    type: 'PLAY • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Conference',
    description:
      'An empowering event where attendees lead discussions and collaborate on the future of crypto.',
    image: '/images/crypto-conference.png',
    type: 'LEARN • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Football Cup',
    description:
      'Bring together teams from around the world to compete in a friendly but competitive football tournament!',
    image: '/images/crypto-football-cup.png',
    type: 'PLAY • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Poker Tour',
    description:
      'A series of high-stakes poker tournaments where players can compete for crypto prizes and bragging rights.',
    image: '/images/crypto-poker-tour.png',
    type: 'PLAY • NETWORK',
    link: 'https://cryptopokertour.org/',
  },
  {
    name: 'Crypto Run',
    description:
      'Hit the pavement in the Crypto Run, a fun and exhilarating race through scenic routes in major cities around the world.',
    image: '/images/crypto-run.png',
    type: 'PLAY • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto HODL Challenge',
    description:
      'A thrilling competition where participants compete to see who can hold onto their crypto assets the longest.',
    image: '/images/crypto-hodl-challenge.png',
    type: 'LEARN • NETWORK',
    link: '/',
  },
  {
    name: 'Crypto Angels',
    description:
      'Showcase groundbreaking projects and meet visionary entrepreneurs, investor, and thought leaders in the crypto space.',
    image: '/images/crypto-angels.png',
    type: 'LEARN • NETWORK',
    link: '/',
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
                <div className='box-content flex h-full flex-col items-center justify-center gap-y-4 break-words p-6'>
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
                    className='w-full translate-y-4 object-contain'
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
