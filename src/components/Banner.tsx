import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

const searchFields = [
  { id: "location", label: "Location", placeholder: "Address, City Or Zip" },
  { id: "dates", label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { id: "budget", label: "Budget", placeholder: "$0-$3000" },
  { id: "people", label: "People", placeholder: "5-10" },
];

export function Banner() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
      <Image
        src="/images/Banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-14 text-center">
        <h1
          className={`${playfair.className} text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] font-normal text-white`}
        >
          Discover Your
          <br className="hidden sm:inline" /> Next Adventure
        </h1>
        <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-white/90 sm:text-[17px]">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-3 bg-[#15A1BF] px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-[#108aa2]"
          >
            Explore Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex items-center bg-white/25 px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/35"
          >
            View Destination
          </Link>
        </div>
      </div>

      <form
        role="search"
        action="/"
        method="get"
        className="relative z-10 grid w-full grid-cols-1 divide-y divide-white/25 bg-white/25 text-left backdrop-blur-md md:grid-cols-[repeat(4,1fr)_auto] md:divide-x md:divide-y-0"
      >
        {searchFields.map((field) => (
          <div key={field.id} className="px-4 py-2.5">
            <label
              htmlFor={field.id}
              className="block text-[15px] leading-tight font-semibold text-white"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type="text"
              placeholder={field.placeholder}
              className="mt-0.5 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/75"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#15A1BF] px-16 py-4 text-base font-bold text-white transition-colors hover:bg-[#108aa2] md:py-0"
        >
          Search
        </button>
      </form>
    </section>
  );
}
