import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    name: 'Niseko - Crypto Ski Week',
    image: '/images/crypto-ski-week.jpeg',
    link: '/',
    date: '31st - 1st',
    month_year: 'March, 2023',
    location: 'Niseko, Japan',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: 'Niseko - Crypto Ski Week',
    image: '/images/crypto-ski-week.jpeg',
    link: '/',
    date: '31st - 1st',
    month_year: 'March, 2023',
    location: 'Niseko, Japan',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function UpcomingEvents() {
  return (
    <section className='flex w-full flex-col gap-y-12 lg:px-12 xl:px-32'>
      <div className='flex flex-col gap-y-4 px-12 lg:px-0'>
        <h2 className='text-3xl font-semibold md:text-4xl'>Upcoming Events</h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          A selection of our upcoming events.
        </p>
      </div>
      <div className='flex flex-col gap-y-8 '>
        {upcomingEvents.map((event) => (
          <div key={event.name}>
            <div className='hidden shadow-lg drop-shadow-sm lg:flex'>
              <div className='relative h-auto w-96'>
                <Image
                  src={event.image}
                  alt={event.name}
                  priority
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
                  priority
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
              <div className='flex flex-col gap-y-2 px-12'>
                <h3 className='text-2xl font-semibold'>{event.name}</h3>
                <p className='text-sm text-slate-400'>{event.location}</p>
              </div>
              <p className='px-12 text-sm text-slate-400'>
                {event.description}
              </p>
              <Link
                href={event.link}
                className='flex items-center justify-center gap-x-4 px-12 text-sm text-slate-400'
              >
                <span>View Events Details</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        ))}
        <div className='mx-auto flex w-full cursor-pointer items-center justify-center gap-x-4 bg-neutral-100 py-2 text-sm font-medium text-slate-400 lg:w-fit lg:bg-transparent lg:text-2xl lg:text-slate-500'>
          <span>See All</span>
          <ChevronDownIcon />
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
