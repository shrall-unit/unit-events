'use client';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { events } from '@/constant/event';

type PastEventImages = {
  image: string;
  caption: string;
};

const pastEventImages: PastEventImages[] = [
  {
    image: '/images/past-event-1.png',
    caption: 'Crypto Ski Week 2023 @St Moritz',
  },
  {
    image: '/images/past-event-2.png',
    caption: 'Crypto Ski Week 2023 @St Moritz',
  },
  {
    image: '/images/past-event-3.png',
    caption: 'Crypto Ski Week 2023 @St Moritz',
  },
  {
    image: '/images/past-event-4.png',
    caption: 'Crypto Ski Week 2023 @St Moritz',
  },
];
function PastEvents() {
  const currentDate = new Date();
  const pastEvents = events.filter((event) => {
    const [startDay, endDay] = event.date
      .replace(/(st|nd|rd|th)/g, '')
      .split(' - ')
      .map(Number);
    const [month, year] = event.month_year.split(', ');

    // Use the end day if it exists, otherwise use the start day
    const day = endDay || startDay;

    const eventDate = new Date(`${month} ${day}, ${year}`);
    return eventDate < currentDate;
  });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [showCounter, setShowCounter] = useState(4);

  const handleShowMore = () => {
    setShowCounter(showCounter + 3);
  };

  return (
    <section className='flex flex-col items-start justify-center gap-y-8 px-0 py-12 lg:px-8 xl:px-32 2xl:px-72'>
      <div className='flex flex-col gap-y-2 px-8 xl:px-0'>
        <h2 className='text-2xl font-semibold md:text-3xl'>
          Successful Past Events
        </h2>
        <p className='text-base text-unit-grey-40 md:text-lg'>
          Relive the magic of our past events. Experience the joy of these
          moments again, and stay tuned for more unforgettable events to come!
        </p>
      </div>
      <Carousel setApi={setApi} className='group/carousel px-0'>
        <CarouselContent className='ml-0'>
          {pastEventImages.map((image) => (
            <CarouselItem key={image.image} className='relative basis-full'>
              <div className='relative'>
                <Image
                  src={image.image}
                  alt={image.caption}
                  priority={true}
                  quality={100}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='peer w-full object-cover data-[loaded=false]:opacity-0 lg:rounded-xl'
                  data-loaded='false'
                  onLoad={(event) => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                  }}
                />
                <div className='absolute top-0 h-full w-full animate-pulse bg-unit-black-60 peer-data-[loaded=true]:hidden lg:rounded-xl' />
              </div>
              <div className='absolute bottom-12 left-0 right-0 mx-auto hidden w-fit items-center justify-center rounded-xl bg-unit-black-90/50 px-4 py-2 text-white md:flex'>
                {image.caption}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {api && (
          <div className='absolute left-16 top-6 hidden w-fit items-center justify-center rounded-xl bg-unit-black-90/50 px-4 py-2 text-white md:flex xl:left-8'>
            {api.selectedScrollSnap() + 1} / {count}
          </div>
        )}
        <div className='absolute bottom-4 left-0 right-0 mx-auto flex w-fit items-center justify-center gap-x-2'>
          {Array.from({ length: count }).map((_, index) => (
            <FaCircle
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'text-xs opacity-80 transition-all',
                index + 1 === current
                  ? 'text-white'
                  : 'cursor-pointer text-neutral-400',
              )}
            />
          ))}
        </div>
        <CarouselPrevious className='hidden opacity-0 transition-all duration-500 disabled:!opacity-0 group-hover/carousel:scale-110 group-hover/carousel:opacity-100 md:flex' />
        <CarouselNext className='hidden opacity-0 transition-all duration-500 disabled:!opacity-0 group-hover/carousel:scale-110 group-hover/carousel:opacity-100 md:flex' />
      </Carousel>
      <div className='flex w-full flex-col gap-y-8'>
        {pastEvents.slice(0, showCounter).map((event) => (
          <div key={event.name}>
            <div className='hidden shadow-lg drop-shadow-sm lg:flex'>
              <div className='relative w-96'>
                <Image
                  src={event.image}
                  alt={event.name}
                  priority={true}
                  quality={100}
                  fill
                  sizes='100vw'
                  data-loaded='false'
                  onLoad={(event) => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                  }}
                  className='peer -z-10 rounded-l-md object-cover data-[loaded=false]:hidden'
                />
                <div className='absolute -z-10 h-full w-full rounded-l-md bg-black opacity-40 peer-data-[loaded=false]:hidden' />
                <div className='absolute -z-10 h-full w-full animate-pulse rounded-l-md bg-unit-black-60 peer-data-[loaded=true]:hidden' />
                <div className='flex h-full w-full flex-col items-center justify-center gap-y-2 p-12 font-poppins text-white'>
                  <span className='text-5xl font-semibold'>{event.date}</span>
                  <span className='font-medium'>{event.month_year}</span>
                </div>
              </div>
              <Card className='flex flex-1 items-center p-4'>
                <CardHeader>
                  <CardTitle className='text-2xl'>{event.name}</CardTitle>
                  <CardDescription className='text-base text-unit-grey-40'>
                    {event.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className='flex flex-col gap-y-6 lg:hidden'>
              <div className='relative h-auto w-full'>
                <Image
                  src={event.image}
                  alt={event.name}
                  priority={true}
                  quality={100}
                  fill
                  sizes='100vw'
                  data-loaded='false'
                  onLoad={(event) => {
                    event.currentTarget.setAttribute('data-loaded', 'true');
                  }}
                  className='peer object-cover object-center data-[loaded=false]:hidden'
                />
                <div className='absolute h-full w-full bg-black opacity-40 peer-data-[loaded=false]:hidden' />
                <div className='absolute h-full w-full animate-pulse bg-unit-black-60 peer-data-[loaded=true]:hidden' />
                <div className='relative flex h-full w-full flex-col items-center justify-center gap-y-2 p-12 font-poppins text-white'>
                  <span className='text-5xl font-semibold'>{event.date}</span>
                  <span className='font-medium'>{event.month_year}</span>
                </div>
              </div>
              <div className='flex flex-col gap-y-2 px-8'>
                <h3 className='text-2xl font-semibold'>{event.name}</h3>
              </div>
              <p className='px-8 text-sm text-unit-grey-40'>
                {event.description}
              </p>
            </div>
          </div>
        ))}
        {showCounter < pastEvents.length && (
          <div
            onClick={handleShowMore}
            className='mx-auto flex w-full cursor-pointer items-center justify-center gap-x-4 bg-neutral-100 py-2 text-sm font-medium text-unit-grey-40 hover:opacity-80 lg:w-fit lg:bg-transparent lg:text-xl lg:text-slate-500'
          >
            <span className='text-sm lg:text-xl'>See More</span>
            <ChevronDownIcon />
          </div>
        )}
      </div>
    </section>
  );
}

export default PastEvents;
