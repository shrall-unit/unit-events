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

type UpcomingEvents = {
  name: string;
  type: string;
  image: string;
  link: string;
  date: string;
  month_year: string;
  location: string;
  description: string;
};

const upcomingEvents: UpcomingEvents[] = [
  {
    name: 'Unit Network Unconference @ETHDenver',
    type: 'Crypto Conference',
    image: '/images/denver.jpg',
    link: '/',
    date: '1st',
    month_year: 'March, 2024',
    location: 'Denver, Colorado',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Crypto Ski Week Colorado',
    type: 'Crypto Ski Week',
    image: '/images/colorado.jpg',
    link: '/',
    date: '4th - 7th',
    month_year: 'March, 2024',
    location: 'Breckenridge, Colorado',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Crypto Ski Week Japan',
    type: 'Crypto Ski Week',
    image: '/images/hokkaido.jpg',
    link: '/',
    date: '15th - 17th',
    month_year: 'March, 2024',
    location: 'Niseko, Hokkaido',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Crypto Ski Week Chamonix',
    type: 'Crypto Ski Week',
    image: '/images/chamonix.jpg',
    link: '/',
    date: '29th - 1st',
    month_year: 'March & April, 2024',
    location: 'Chamonix, Auvergne-Rhône-Alpes',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Paris',
    type: 'Crypto Conference',
    image: '/images/paris.jpg',
    link: '/',
    date: '12th - 15th',
    month_year: 'April, 2024',
    location: 'Paris, Île-de-France',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference London',
    type: 'Crypto Conference',
    image: '/images/london.jpg',
    link: '/',
    date: '26th - 28th',
    month_year: 'April, 2024',
    location: 'London, England',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Cairo',
    type: 'Crypto Conference',
    image: '/images/cairo.jpg',
    link: '/',
    date: '10th - 11th',
    month_year: 'May, 2024',
    location: 'Cairo, Cairo Governorate',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Accra',
    type: 'Crypto Conference',
    image: '/images/accra.jpg',
    link: '/',
    date: '24th - 25th',
    month_year: 'May, 2024',
    location: 'Accra, Greater Accra Region',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Mumbai',
    type: 'Crypto Conference',
    image: '/images/mumbai.jpg',
    link: '/',
    date: '8th - 9th',
    month_year: 'June, 2024',
    location: 'Mumbai, Maharashtra',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Istanbul',
    type: 'Crypto Conference',
    image: '/images/istanbul.jpg',
    link: '/',
    date: '21th',
    month_year: 'June, 2024',
    location: 'Istanbul, Marmara Region',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference New York',
    type: 'Crypto Conference',
    image: '/images/newyork.jpg',
    link: '/',
    date: '12th - 13th',
    month_year: 'July, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Miami',
    type: 'Crypto Conference',
    image: '/images/miami.jpg',
    link: '/',
    date: '26th - 27th',
    month_year: 'July, 2024',
    location: 'Miami, Florida',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Rio',
    type: 'Crypto Conference',
    image: '/images/rio.jpg',
    link: '/',
    date: '9th - 10th',
    month_year: 'August, 2024',
    location: 'Rio de Janeiro, State of Rio de Janeiro',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Buenos Aires',
    type: 'Crypto Conference',
    image: '/images/buenosaires.jpg',
    link: '/',
    date: '23th - 24th',
    month_year: 'August, 2024',
    location: 'Buenos Aires, Buenos Aires',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference @Burning Man',
    type: 'Crypto Conference',
    image: '/images/burningman.jpg',
    link: '/',
    date: '29th',
    month_year: 'August, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Hong Kong',
    type: 'Crypto Conference',
    image: '/images/hongkong.jpg',
    link: '/',
    date: '14th - 15th',
    month_year: 'September, 2024',
    location: 'Hong Kong, Hong Kong',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Singapore',
    type: 'Crypto Conference',
    image: '/images/singapore.jpg',
    link: '/',
    date: '27th - 28th',
    month_year: 'September, 2024',
    location: 'Singapore, Singapore',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Berlin',
    type: 'Crypto Conference',
    image: '/images/berlin.jpg',
    link: '/',
    date: '11th - 12th',
    month_year: 'October, 2024',
    location: 'Berlin, Berlin',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Lisbon',
    type: 'Crypto Conference',
    image: '/images/lisbon.jpg',
    link: '/',
    date: '25th - 26th',
    month_year: 'October, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Cape Town',
    type: 'Crypto Conference',
    image: '/images/capetown.jpg',
    link: '/',
    date: '9th - 10th',
    month_year: 'November, 2024',
    location: 'Cape Town, Western Cape',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Nairobi',
    type: 'Crypto Conference',
    image: '/images/nairobi.jpg',
    link: '/',
    date: '22th',
    month_year: 'November, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Dubai',
    type: 'Crypto Conference',
    image: '/images/dubai.jpg',
    link: '/',
    date: '6th',
    month_year: 'December, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Riyadh',
    type: 'Crypto Conference',
    image: '/images/riyadh.jpg',
    link: '/',
    date: '13th',
    month_year: 'December, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference San Francisco',
    type: 'Crypto Conference',
    image: '/images/sanfrancisco.jpg',
    link: '/',
    date: '10th',
    month_year: 'December, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Los Angeles',
    type: 'Crypto Conference',
    image: '/images/losangeles.jpg',
    link: '/',
    date: '24th',
    month_year: 'December, 2024',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Mexico City',
    type: 'Crypto Conference',
    image: '/images/mexicocity.jpg',
    link: '/',
    date: '7th',
    month_year: 'February, 2025',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Seoul',
    type: 'Crypto Conference',
    image: '/images/seoul.jpg',
    link: '/',
    date: '7th',
    month_year: 'March, 2025',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Panama',
    type: 'Crypto Conference',
    image: '/images/panama.jpg',
    link: '/',
    date: '21st',
    month_year: 'March, 2025',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Unit Network Unconference Tokyo',
    type: 'Crypto Conference',
    image: '/images/tokyo.jpg',
    link: '/',
    date: '21',
    month_year: 'March, 2025',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const UpcomingEvents = React.forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, ref) => {
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
                    className='-z-10 rounded-l-md object-cover'
                  />
                  <div className='absolute -z-10 h-full w-full rounded-l-md bg-black opacity-40' />
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
                    className='object-cover object-center'
                  />
                  <div className='absolute h-full w-full bg-black opacity-40' />
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
