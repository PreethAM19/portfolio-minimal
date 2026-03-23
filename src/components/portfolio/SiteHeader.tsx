import Link from "next/link";

import type { NavItem } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  name: string;
  navigation: readonly NavItem[];
};

export function SiteHeader({ name, navigation }: SiteHeaderProps) {
  return (
    <header className="sticky top-4 z-50">
      <Container>
        <div className="mx-auto flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/30 px-4 py-3 shadow-panel backdrop-blur-xl sm:px-5">
          <Link
            href="#top"
            className="max-w-[12rem] truncate text-sm font-medium tracking-[0.18em] text-white/[0.85] transition hover:text-accent sm:max-w-none"
          >
            {name}
          </Link>

          <nav
            aria-label="Section navigation"
            className="hidden items-center gap-5 text-xs uppercase tracking-[0.28em] text-white/[0.45] sm:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-white",
                  item.href === "#contact" && "text-white/70",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav
            aria-label="Mobile section navigation"
            className="flex items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-white/50 sm:hidden"
          >
            <Link href="#selected-work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
