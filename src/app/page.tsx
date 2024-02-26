import Image from "next/image";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import EventCategories from "./components/EventCategories";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  return (
    <Layout>
      <section className="relative w-full h-full flex flex-col items-center justify-center">
        <Image
          src="/images/hero-section-background.png"
          alt="Unit Events"
          priority
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-screen object-cover"
        />
        <div className="w-screen h-screen bg-black opacity-20 z-10 absolute top-0"></div>
        <div className="flex flex-col items-center justify-center absolute text-white font-semibold gap-y-6 z-50 font-poppins text-center">
          <h1 className="text-7xl">Unit Events</h1>
          <p className="text-xl font-light tracking-wider">
            Unit Network Announces an Exciting Lineup of Global Crypto Events
            for 2024
          </p>
          <Button variant="secondary" className="mt-12">
            Explore Events
          </Button>
        </div>
      </section>
      <section className="text-center flex flex-col items-center justify-center gap-y-8">
        <h2 className="font-semibold text-4xl">Play, Learn, Network</h2>
        <p className="text-xl text-unit-gray px-32">
          Explore the future of events with Unit Network where cryptocurrency
          and blockchain enthusiasts come together to forge unforgettable
          experiences!
        </p>
      </section>
      <EventCategories />
      <UpcomingEvents />
    </Layout>
  );
}
