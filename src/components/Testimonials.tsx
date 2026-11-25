"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

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
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1080px] px-4">
        <div className="border-2 border-dashed border-blue-500 p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
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
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => scroll(-1)}
                className="flex size-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-700"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => scroll(1)}
                className="flex size-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-700"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                data-card
                className="flex shrink-0 basis-full snap-start gap-4 border border-neutral-200 bg-white p-4 md:basis-[calc(50%-0.5rem)] md:p-5"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
