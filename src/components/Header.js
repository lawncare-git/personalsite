"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/videos", label: "VIDEOS" },
  { href: "/resume", label: "RESUME" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-nav text-white transition hover:text-white/75"
        >
          Carlos DeJesus
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-3 text-[11px] font-medium uppercase tracking-nav text-white/58 sm:gap-x-5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "text-white" : "transition hover:text-white"}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://www.open-stage.net"
            target="_blank"
            rel="noreferrer"
            className="text-stage transition hover:text-red-300"
          >
            OPEN-STAGE
          </a>
        </nav>
      </div>
    </header>
  );
}
