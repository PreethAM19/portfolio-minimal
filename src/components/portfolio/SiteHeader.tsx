import Link from "next/link";

import type { NavItem } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";

type SiteHeaderProps = {
  name: string;
  navigation: readonly NavItem[];
};

export function SiteHeader({ name, navigation }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <div className="mx-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl sm:px-5">
          <Link
            href="#top"
            className="max-w-[11rem] truncate text-sm font-semibold tracking-[0.14em] text-white/[0.86] sm:max-w-none"
          >
            {name}
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 text-[11px] uppercase tracking-[0.28em] text-white/[0.46] lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/[0.72] transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}

