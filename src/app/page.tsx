'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import { useIndexRefStore } from '@/store/useIndexRefStore';

import EventCategories from './components/EventCategories';
import FAQ from './components/FAQ';
import FeaturedEvents from './components/FeaturedEvents';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';

export default function Home() {
  const featuredEventsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const upcomingEventsRef = useRef<HTMLDivElement>(null);

  const { setFAQRef, setFeaturedEventsRef, setUpcomingEventsRef } =
    useIndexRefStore();

  useEffect(() => {
    setFeaturedEventsRef(featuredEventsRef);
    setFAQRef(faqRef);
    setUpcomingEventsRef(upcomingEventsRef);
  }, [setFAQRef, setFeaturedEventsRef, setUpcomingEventsRef]);

  return (
    <Layout>
      <section className='relative mt-32 grid w-full grid-cols-1 items-center gap-x-8 gap-y-8 overflow-hidden px-8 md:grid-cols-2 xl:px-32 2xl:px-72'>
        <div className='flex flex-col items-center justify-center gap-y-6 font-poppins font-semibold md:items-start md:pr-0'>
          <h1 className='text-5xl md:text-6xl'>
            Unit <span className='text-unit-purple-40'>Events</span>
          </h1>
          <p className='px-8 text-center text-lg font-light sm:px-24 md:px-0 md:text-start md:text-xl'>
            Unit Network Announces an Exciting Lineup of Global Crypto Events
            for 2024
          </p>
          <Button
            variant='default'
            className='mt-4 w-fit md:mt-12'
            onClick={() => {
              if (featuredEventsRef.current) {
                const top =
                  featuredEventsRef.current.getBoundingClientRect().top +
                  window.scrollY -
                  120;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
          >
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
          className='w-full object-cover'
        />
      </section>
      <section className='flex flex-col items-start justify-center gap-y-8 px-8 py-12 md:items-center md:text-center xl:px-32 2xl:px-72'>
        <div className='flex items-center gap-x-12'>
          <Image
            src='/images/technology.svg'
            alt='Technology Logo'
            priority={true}
            quality={100}
            width={40}
            height={40}
          />
          <Image
            src='/images/innovation.svg'
            alt='Innovation Logo'
            priority={true}
            quality={100}
            width={40}
            height={40}
          />
          <Image
            src='/images/life.svg'
            alt='Life Logo'
            priority={true}
            quality={100}
            width={40}
            height={40}
          />
        </div>
        <h2 className='text-2xl font-semibold md:text-3xl'>
          Play, Learn, Network
        </h2>
        <p className='text-lg text-slate-500 md:text-xl'>
          Explore the future of events with Unit Network where cryptocurrency
          and blockchain enthusiasts come together to forge unforgettable
          experiences!
        </p>
      </section>
      <FeaturedEvents ref={featuredEventsRef} />
      <EventCategories />
      <UpcomingEvents ref={upcomingEventsRef} />
      <PastEvents />
      <FAQ ref={faqRef} className='mb-16 md:mb-24 lg:mb-32' />
    </Layout>
  );
}
