"use client";

import Image from "next/image";
import { playfair } from "@/lib/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/testimonials/michael-chen.jpg",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/testimonials/sarah-johnson.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1080px] px-4">
        <div className="p-6 md:p-8">
          <Carousel opts={{ align: "start" }}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2
                  className={`${playfair.className} text-4xl text-neutral-950`}
                >
                  What Travelers Say
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Real experiences from our happy travelers
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <CarouselPrevious className="static size-11" />
                <CarouselNext className="static size-11" />
              </div>
            </div>

            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="md:basis-1/2">
                  <figure className="flex h-full gap-4 border border-neutral-200 bg-white p-4 md:p-5">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <blockquote className="text-[15px] leading-snug text-neutral-900">
                        {t.quote}
                      </blockquote>
                      <figcaption className="mt-auto pt-6">
                        <p className="text-sm text-[#15A1BF]">— {t.name}</p>
                        <p className="mt-1 text-xs text-neutral-400">
                          {t.location}
                        </p>
                      </figcaption>
                    </div>
                    <div className="relative w-[140px] shrink-0 self-stretch overflow-hidden md:w-[36%]">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="(min-width: 768px) 180px, 140px"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
