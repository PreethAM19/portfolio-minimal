import Link from "next/link";

import type { ContactContent } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { InteractiveSurface } from "@/components/ui/InteractiveSurface";
import { FadeIn } from "@/components/ui/motion";
import { Tag } from "@/components/ui/Tag";

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-28 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 h-px w-full section-rule" />
        <FadeIn>
          <InteractiveSurface
            glow="warm"
            className="ambient-ring rounded-[2.2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-md sm:p-10 lg:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
              <div>
                <Tag>{contact.eyebrow}</Tag>
                <h2 className="mt-6 max-w-xl font-display text-balance text-4xl tracking-[-0.06em] text-ink sm:text-5xl lg:text-[3.7rem]">
                  {contact.title}
                </h2>
                <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
                  {contact.description}
                </p>
              </div>

              <div className="grid gap-3">
                {contact.links.map((link) =>
                  link.href ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-5 transition hover:border-white/20 hover:bg-white/[0.05] sm:px-6"
                    >
                      <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
                        {link.label}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-5">
                        <p className="text-sm text-white/[0.86] sm:text-base">
                          {link.value}
                        </p>
                        <span className="text-sm text-white/[0.42] transition group-hover:text-white/[0.75]">
                          {">"}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div
                      key={link.label}
                      className="rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-5 sm:px-6"
                    >
                      <p className="text-[10px] uppercase tracking-[0.34em] text-white/[0.42]">
                        {link.label}
                      </p>
                      <p className="mt-3 text-sm text-white/[0.4] sm:text-base">
                        {link.value}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </InteractiveSurface>
        </FadeIn>
      </Container>
    </section>
  );
}
