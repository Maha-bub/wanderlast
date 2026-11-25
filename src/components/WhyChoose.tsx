import Image from "next/image";
import { playfair } from "@/lib/fonts";

const reasons = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock of customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#E0F7FA] py-16">
      <div className="mx-auto max-w-[1080px] px-4">
        <div className="border-2 border-dashed border-blue-500 p-6 text-center md:p-8">
          <h2
            className={`${playfair.className} text-4xl text-neutral-950 md:text-5xl`}
          >
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-sm text-neutral-500">
            Your trusted partner for exceptional travel experiences
          </p>

          <div className="mt-8 grid gap-5 text-left md:grid-cols-3 md:gap-6">
            {reasons.map((reason) => (
              <article key={reason.title} className="bg-white p-5 md:p-6">
                <Image
                  src={reason.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 md:h-11 md:w-11"
                />
                <h3 className="mt-6 text-xl text-neutral-900">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
