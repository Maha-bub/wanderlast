import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between bg-white px-4 md:px-8">
      <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            aria-current={link.active ? "page" : undefined}
            className={
              link.active
                ? "text-[15px] text-[#15A1BF] underline underline-offset-[5px]"
                : "text-[15px] text-neutral-900 transition-colors hover:text-[#15A1BF]"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/" aria-label="Wanderlast home" className="shrink-0">
        <Image
          src="/images/Wanderlast.png"
          alt="Wanderlast"
          width={162}
          height={24}
          priority
          className="h-5 w-auto"
        />
      </Link>

      <nav aria-label="Account" className="flex items-center gap-4 md:gap-7">
        <Link
          href="/profile"
          className="flex items-center gap-1.5 text-[15px] text-neutral-900 transition-colors hover:text-[#15A1BF]"
        >
          <User className="size-4" aria-hidden="true" />
          Profile
        </Link>
        <Link
          href="/login"
          className="text-[15px] text-neutral-900 transition-colors hover:text-[#15A1BF]"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-[15px] text-neutral-900 transition-colors hover:text-[#15A1BF]"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
