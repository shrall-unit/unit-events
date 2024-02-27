import unitLogoWhite from "@public/images/unit-logo-white.svg";
import { MoveUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Events = {
  name: string;
  image: string;
  link: string;
};

const events: Events[] = [
  {
    name: "Crypto Conference",
    image: "/images/crypto-conference.jpeg",
    link: "/",
  },
  {
    name: "Crypto Angels",
    image: "/images/crypto-angels.jpeg",
    link: "/",
  },
  {
    name: "Crypto Conference",
    image: "/images/crypto-conference.jpeg",
    link: "/",
  },
  {
    name: "Crypto Angels",
    image: "/images/crypto-angels.jpeg",
    link: "/",
  },
  {
    name: "Crypto Conference",
    image: "/images/crypto-conference.jpeg",
    link: "/",
  },
  {
    name: "Crypto Angels",
    image: "/images/crypto-angels.jpeg",
    link: "/",
  },
  {
    name: "Crypto Conference",
    image: "/images/crypto-conference.jpeg",
    link: "/",
  },
  {
    name: "Crypto Angels",
    image: "/images/crypto-angels.jpeg",
    link: "/",
  },
];

function EventCategories() {
  return (
    <section className="w-full flex flex-col gap-y-12 pl-12 xl:pl-24">
      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-4xl">Event Categories</h2>
        <p className="text-xl text-slate-500">
          Discover a curated selection of events designed to captivate and
          engage every crypto enthusiast.
        </p>
      </div>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max gap-x-6">
          {events.map((event) => (
            <div
              key={event.name}
              className="overflow-hidden rounded-md w-72 h-80 relative text-white"
            >
              <Image
                src={event.image}
                alt={event.name}
                priority
                quality={100}
                fill
                className="object-cover -z-10"
              />
              <div className="p-8 flex flex-col items-center justify-center text-center h-full gap-y-4 break-words">
                <Image
                  src={unitLogoWhite}
                  alt={event.name}
                  width={32}
                  height={32}
                  priority
                />
                <div className="w-full h-full bg-black opacity-40 absolute -z-10"></div>
                <h4 className="text-3xl font-poppins mt-auto font-semibold whitespace-break-spaces">
                  {event.name}
                </h4>
                <Link href={event.link}>
                  <div className="flex items-center gap-x-1 font-medium">
                    Explore <MoveUpRightIcon />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}

export default EventCategories;
