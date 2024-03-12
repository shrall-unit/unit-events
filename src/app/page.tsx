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
      <section className='relative mt-24 grid max-h-[80vh] grid-cols-2 items-center gap-x-8 overflow-hidden'>
        <div className='flex flex-col justify-center gap-y-6 pl-8 font-poppins font-semibold xl:pl-32'>
          <h1 className='text-5xl md:text-6xl'>Unit Events</h1>
          <p className='text-lg font-light md:text-xl'>
            Unit Network Announces an Exciting Lineup of Global Crypto Events
            for 2024
          </p>
          <Button variant='default' className='mt-12 w-fit'>
            Explore Events
          </Button>
        </div>
        <Image
          src='/images/logo-3d.png'
          alt='Unit Events'
          priority={true}
          quality={100}
          width={0}
          height={0}
          sizes='100vw'
          className='w-[60vw] max-w-none'
        />
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
