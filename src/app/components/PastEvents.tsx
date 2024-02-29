'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa6';

import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const images = [
  '/images/past-event-1.png',
  '/images/past-event-2.png',
  '/images/past-event-3.png',
  '/images/past-event-4.png',
];

function PastEvents() {
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
  return (
    <section className='flex w-full flex-col gap-y-12 px-8 lg:px-48 xl:px-72 2xl:px-96'>
      <div className='flex flex-col gap-y-4'>
        <h2 className='text-3xl font-semibold md:text-4xl'>Our Past Events</h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          A selection of our past events.
        </p>
      </div>
      <video controls preload='auto' loop className='w-full rounded-xl'>
        <source src='/videos/home.mp4' type='video/mp4' />
      </video>
      <Carousel setApi={setApi} className='group/carousel'>
        <CarouselContent className='ml-0'>
          {images.map((image) => (
            <CarouselItem key={image} className='basis-full'>
              <div className='relative'>
                <Image
                  src={image}
                  alt='Unit Events'
                  priority={true}
                  quality={100}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full rounded-xl object-cover'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute bottom-4 flex w-full items-center justify-center gap-x-2'>
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
    </section>
  );
}

export default PastEvents;
