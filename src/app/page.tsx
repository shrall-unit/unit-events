import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import EventCategories from './components/EventCategories';
import FAQ from './components/FAQ';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';

export default function Home() {
  return (
    <Layout>
      <section className='relative flex w-full flex-col items-center justify-center'>
        <Image
          src='/images/hero-section-background.png'
          alt='Unit Events'
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes='100vw'
          className='h-screen w-full object-cover'
        />
        <div className='absolute top-0 z-10 h-screen w-screen bg-black opacity-20'></div>
        <div className='absolute z-50 flex flex-col items-center justify-center gap-y-6 px-8 text-center font-poppins font-semibold text-white xl:px-32'>
          <h1 className='text-6xl md:text-7xl'>Unit Events</h1>
          <p className='text-lg font-light tracking-wider md:text-xl'>
            Unit Network Announces an Exciting Lineup of Global Crypto Events
            for 2024
          </p>
          <Button variant='secondary' className='mt-12'>
            Explore Events
          </Button>
        </div>
      </section>
      <section className='flex flex-col items-start justify-center gap-y-8 px-8 md:items-center md:text-center xl:px-32'>
        <h2 className='text-3xl font-semibold md:text-4xl'>
          Play, Learn, Network
        </h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          Explore the future of events with Unit Network where cryptocurrency
          and blockchain enthusiasts come together to forge unforgettable
          experiences!
        </p>
      </section>
      <EventCategories />
      <UpcomingEvents />
      <PastEvents />
      <FAQ className='mb-16 md:mb-24 lg:mb-32' />
    </Layout>
  );
}
