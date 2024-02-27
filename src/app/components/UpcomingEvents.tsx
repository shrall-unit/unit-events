import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    name: "Niseko - Crypto Ski Week",
    image: "/images/crypto-ski-week.jpeg",
    link: "/",
    date: "31st - 1st",
    month_year: "March, 2023",
    location: "Niseko, Japan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Niseko - Crypto Ski Week",
    image: "/images/crypto-ski-week.jpeg",
    link: "/",
    date: "31st - 1st",
    month_year: "March, 2023",
    location: "Niseko, Japan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

function UpcomingEvents() {
  return (
    <section className="w-full flex flex-col gap-y-12 px-12 xl:px-24">
      <div className="flex flex-col gap-y-4">
        <h2 className="font-semibold text-4xl">Upcoming Events</h2>
        <p className="text-xl text-slate-500">
          A selection of our upcoming events.
        </p>
      </div>
      <div className="flex flex-col gap-y-8 ">
        {upcomingEvents.map((event) => (
          <div key={event.name} className="flex shadow-lg drop-shadow-sm">
            <div className="w-96 h-80 relative">
              <Image
                src={event.image}
                alt={event.name}
                priority
                quality={100}
                fill
                className="object-cover -z-10 rounded-l-md"
              />
              <div className="w-full h-full bg-black opacity-40 absolute -z-10 rounded-l-md" />
              <div className="flex flex-col p-12 text-white font-poppins w-full h-full justify-center items-center gap-y-2">
                <span className="font-semibold text-5xl">{event.date}</span>
                <span className="font-medium">{event.month_year}</span>
              </div>
            </div>
            <Card className="p-8 flex-1">
              <CardHeader>
                <CardTitle className="text-3xl">{event.name}</CardTitle>
                <CardDescription className="text-slate-400">
                  {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-400">
                {event.description}
              </CardContent>
              <CardFooter className="text-slate-400">
                <Link
                  href={event.link}
                  className="ml-auto flex items-center gap-x-4"
                >
                  <span>View Events Details</span>
                  <ArrowRightIcon />
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
