'use client';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { events } from '@/constant/event';

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const UpcomingEvents = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
    const currentDate = new Date();
    const upcomingEvents = events.filter((event) => {
      const [startDay, endDay] = event.date
        .replace(/(st|nd|rd|th)/g, '')
        .split(' - ')
        .map(Number);
      const [month, year] = event.month_year.split(', ');

      const day = startDay;

      const eventDate = new Date(`${month} ${day}, ${year}`);
      return eventDate >= currentDate;
    });
    const [showCounter, setShowCounter] = React.useState(3);

    const handleShowMore = () => {
      setShowCounter(showCounter + 3);
    };

    return (
      <section
        className={cn(
          'flex w-full flex-col gap-y-12 lg:px-8 xl:px-32 2xl:px-72',
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className='flex flex-col gap-y-4 px-8 lg:px-0'>
          <h2 className='text-2xl font-semibold md:text-3xl'>
            All Upcoming Events
          </h2>
          <p className='text-base text-unit-grey-40 md:text-lg'>
            Explore our exciting lineup of upcoming events! From Insightful
            Conference Events to thrilling Sport Tournaments, our calendar is
            packed with unforgettable experiences!
          </p>
        </div>
        <div className='flex flex-col gap-y-8'>
          {upcomingEvents.slice(0, showCounter).map((event) => (
            <div key={event.name}>
              <div className='hidden shadow-lg drop-shadow-sm lg:flex'>
                <div className='relative h-auto w-96'>
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
                <Card className='flex-1 p-8'>
                  <CardHeader>
                    <span className='text-xs uppercase text-unit-grey-40'>
                      {event.type}
                    </span>
                    <CardTitle className='text-2xl'>{event.name}</CardTitle>
                    <CardDescription className='text-unit-grey-40'>
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='text-unit-grey-40'>
                    {event.description}
                  </CardContent>
                  <CardFooter className='text-unit-grey-40'>
                    <Link
                      href={event.link}
                      className='ml-auto flex items-center gap-x-4 text-unit-purple-60 hover:text-unit-purple-40'
                    >
                      <span>View Events Details</span>
                    </Link>
                  </CardFooter>
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
                  <p className='text-sm text-unit-grey-40'>{event.location}</p>
                </div>
                <p className='px-8 text-sm text-unit-grey-40'>
                  {event.description}
                </p>
                <Link
                  href={event.link}
                  className='flex items-center justify-center gap-x-4 px-8 text-sm text-unit-purple-60 hover:text-unit-purple-40'
                >
                  <span>View Events Details</span>
                </Link>
              </div>
            </div>
          ))}
          {showCounter < upcomingEvents.length && (
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
  },
);

export default UpcomingEvents;
