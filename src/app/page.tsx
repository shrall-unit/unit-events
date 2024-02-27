import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import EventCategories from './components/EventCategories';
import FAQ from './components/FAQ';
import UpcomingEvents from './components/UpcomingEvents';

export default function Home() {
  return (
    <Layout>
      <section className='relative flex w-full flex-col items-center justify-center'>
        <Image
          src='/images/hero-section-background.png'
          alt='Unit Events'
          priority
          quality={100}
          width={0}
          height={0}
          sizes='100vw'
          className='h-screen w-full object-cover'
        />
        <div className='absolute top-0 z-10 h-screen w-screen bg-black opacity-20'></div>
        <div className='absolute z-50 flex flex-col items-center justify-center gap-y-6 text-center font-poppins font-semibold text-white'>
          <h1 className='text-7xl'>Unit Events</h1>
          <p className='text-xl font-light tracking-wider'>
            Unit Network Announces an Exciting Lineup of Global Crypto Events
            for 2024
          </p>
          <Button variant='secondary' className='mt-12'>
            Explore Events
          </Button>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center gap-y-8 px-12 text-center xl:px-32'>
        <h2 className='text-4xl font-semibold'>Play, Learn, Network</h2>
        <p className='text-xl text-unit-gray'>
          Explore the future of events with Unit Network where cryptocurrency
          and blockchain enthusiasts come together to forge unforgettable
          experiences!
        </p>
      </section>
      <EventCategories />
      <UpcomingEvents />
      <section className='flex w-full flex-col gap-y-12 px-12 xl:px-32'>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-4xl font-semibold'>Our Past Events</h2>
          <p className='text-xl text-slate-500'>
            A selection of our past events.
          </p>
        </div>
        <video controls preload='auto' loop className='w-full rounded-xl'>
          <source src='/videos/home.mp4' type='video/mp4' />
        </video>
        <div className='relative'>
          <Image
            src='/images/past-event.png'
            alt='Unit Events'
            priority
            quality={100}
            width={0}
            height={0}
            sizes='100vw'
            className='h-screen w-full rounded-xl object-cover'
          />
        </div>
      </section>
      <FAQ className='mb-48' />
    </Layout>
  );
}
