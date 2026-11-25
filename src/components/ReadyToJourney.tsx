import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { playfair } from "@/lib/fonts";

export function ReadyToJourney() {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#0a3540] md:min-h-[460px]">
      <Image
        src="/images/CTA-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[46rem] flex-col items-center px-6 py-16 text-center">
        <h2
          className={`${playfair.className} text-4xl font-normal text-white sm:text-5xl lg:text-6xl`}
        >
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-base text-white/90">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-8 inline-flex items-center gap-5 bg-white px-8 py-4 text-sm font-bold tracking-[0.1em] text-black uppercase transition-colors hover:bg-neutral-100"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
