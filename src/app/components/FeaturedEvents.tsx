import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type FeaturedEvent = {
  title: string;
  image: string;
  type: string;
  schedule: string;
  description: string;
  link: string;
};

const events: FeaturedEvent[] = [
  {
    title: 'Unit Polkadot Conference',
    image: '/images/crypto-conference.jpeg',
    type: 'Crypto Conference',
    schedule: '31st March • 3:00 PM GMT+8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed ac libero nec odio',
    link: '/',
  },
  {
    title: 'Unit Conference New York',
    image: '/images/crypto-conference.jpeg',
    type: 'Crypto Conference',
    schedule: '31st March • 3:00 PM GMT+8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed ac libero nec odio',
    link: '/',
  },
  {
    title: 'Niseko Crypto Ski Week',
    image: '/images/crypto-ski-week.jpeg',
    type: 'Crypto Ski Week',
    schedule: '31st March • 3:00 PM GMT+8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed ac libero nec odio',
    link: '/',
  },
  {
    title: 'Unit Polkadot Conference',
    image: '/images/crypto-conference.jpeg',
    type: 'Crypto Conference',
    schedule: '31st March • 3:00 PM GMT+8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed ac libero nec odio',
    link: '/',
  },
];

function FeaturedEvents() {
  return (
    <section id='featured-events' className='flex w-full flex-col gap-y-12'>
      <div className='flex flex-col gap-y-4 px-8 xl:px-32'>
        <h2 className='text-3xl font-semibold md:text-4xl'>Featured Events</h2>
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
        <CarouselContent className='mx-8 xl:mx-32'>
          {events.map((event, index) => (
            <CarouselItem
              key={event.title}
              className='flex w-max gap-x-6 transition-all duration-500 hover:scale-105 hover:shadow-sm'
            >
              <Card
                className={cn(
                  'w-80',
                  events.length - 1 === index && 'mr-8 md:mr-32',
                )}
              >
                <CardHeader className='p-0'>
                  <Image
                    src={event.image}
                    alt={event.title}
                    priority={true}
                    quality={100}
                    width={0}
                    height={0}
                    sizes='w-full'
                    className='h-48 w-80 rounded-t-xl object-cover'
                  />
                </CardHeader>
                <CardContent className='mb-4 flex flex-col gap-y-1 pt-4'>
                  <span className='text-xs uppercase text-unit-grey-40'>
                    {event.type}
                  </span>
                  <h3 className='text-xl font-semibold'>{event.title}</h3>
                  <p className='text-unit-grey-40'>{event.schedule}</p>
                  <p className='text-sm text-unit-grey-40'>
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden opacity-0 transition-all duration-500 disabled:!opacity-0 group-hover/carousel:scale-110 group-hover/carousel:opacity-100 md:flex' />
        <CarouselNext className='hidden opacity-0 transition-all duration-500 disabled:!opacity-0 group-hover/carousel:scale-110 group-hover/carousel:opacity-100 md:flex' />
      </Carousel>
    </section>
  );
}

export default FeaturedEvents;
