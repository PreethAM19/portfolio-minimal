import Link from "next/link";

import type { ContactContent, PersonInfo } from "@/content/portfolio";

import { Container } from "@/components/ui/Container";
import { FadeIn, HoverPanel } from "@/components/ui/motion";
import { Tag } from "@/components/ui/Tag";

type ContactSectionProps = {
  person: PersonInfo;
  contact: ContactContent;
};

export function ContactSection({ person, contact }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-7 shadow-panel backdrop-blur-sm sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,196,152,0.18),transparent_34%),linear-gradient(160deg,rgba(255,255,255,0.02),transparent_60%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <Tag className="border-white/10 bg-white/[0.04] text-white/60">
                  Contact
                </Tag>
                <h2 className="mt-6 max-w-xl font-display text-balance text-3xl font-medium tracking-[-0.04em] text-ink sm:text-4xl lg:text-[3rem]">
                  {contact.title}
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg">
                  {contact.summary}
                </p>
              </div>

              <div className="grid gap-3">
                {contact.links.map((link, index) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <FadeIn key={link.label} delay={0.08 + index * 0.07}>
                      <HoverPanel className="h-full">
                        <Link
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className="group flex h-full items-center justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-5 text-left transition hover:border-white/20 hover:bg-white/[0.05] sm:px-6"
                        >
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                              {link.label}
                            </p>
                            <p className="mt-2 text-sm text-white/[0.85] sm:text-base">
                              {link.value}
                            </p>
                          </div>
                          <span className="text-lg text-white/40 transition group-hover:text-white/[0.65]">
                            {"->"}
                          </span>
                        </Link>
                      </HoverPanel>
                    </FadeIn>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-10 border-t border-white/10 pt-6 text-sm text-white/[0.45]">
              {person.name} / {person.title}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
