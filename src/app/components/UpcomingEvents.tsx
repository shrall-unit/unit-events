'use client';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
    image: '/images/tokyo.jpg',
    link: '/',
    date: '21',
    month_year: 'March, 2025',
    location: 'Register for Location',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function UpcomingEvents() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className='flex w-full flex-col gap-y-12 lg:px-8 xl:px-32'>
      <div className='flex flex-col gap-y-4 px-8 lg:px-0'>
        <h2 className='text-3xl font-semibold md:text-4xl'>Upcoming Events</h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          A selection of our upcoming events.
        </p>
      </div>
      <div className='flex flex-col gap-y-8 '>
        {upcomingEvents
          .slice(0, showAll ? upcomingEvents.length : 3)
          .map((event) => (
            <div key={event.name}>
              <div className='hidden shadow-lg drop-shadow-sm lg:flex'>
                <div className='relative h-auto w-96'>
                  <Image
                    src={event.image}
                    alt={event.name}
                    priority={true}
                    quality={100}
                    fill
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
                    <CardTitle className='text-3xl'>{event.name}</CardTitle>
                    <CardDescription className='text-slate-400'>
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='text-slate-400'>
                    {event.description}
                  </CardContent>
                  <CardFooter className='text-slate-400'>
                    <Link
                      href={event.link}
                      className='ml-auto flex items-center gap-x-4'
                    >
                      <span>View Events Details</span>
                      <ArrowRightIcon />
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
                    className='-z-10 object-cover object-top'
                  />
                  <div className='absolute -z-10 h-full w-full rounded-l-md bg-black opacity-40' />
                  <div className='flex h-full w-full flex-col items-center justify-center gap-y-2 p-12 font-poppins text-white'>
                    <span className='text-5xl font-semibold'>{event.date}</span>
                    <span className='font-medium'>{event.month_year}</span>
                  </div>
                </div>
                <div className='flex flex-col gap-y-2 px-8'>
                  <h3 className='text-2xl font-semibold'>{event.name}</h3>
                  <p className='text-sm text-slate-400'>{event.location}</p>
                </div>
                <p className='px-8 text-sm text-slate-400'>
                  {event.description}
                </p>
                <Link
                  href={event.link}
                  className='flex items-center justify-center gap-x-4 px-8 text-sm text-slate-400'
                >
                  <span>View Events Details</span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          ))}
        {!showAll && (
          <div
            onClick={() => setShowAll(true)}
            className='mx-auto flex w-full cursor-pointer items-center justify-center gap-x-4 bg-neutral-100 py-2 text-sm font-medium text-slate-400 hover:opacity-80 lg:w-fit lg:bg-transparent lg:text-2xl lg:text-slate-500'
          >
            <span>See All</span>
            <ChevronDownIcon />
          </div>
        )}
      </div>
    </section>
  );
}

export default UpcomingEvents;
