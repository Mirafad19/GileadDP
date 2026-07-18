import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import handsTherapy from "@/assets/hands-therapy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Kolawole Fadahunsi, DPT — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content:
          "Dr. Kolawole Fadahunsi is a Doctor of Physiotherapy specialising in musculoskeletal care — a quiet, deliberate practice for people who want to move well again.",
      },
      { property: "og:title", content: "About Dr. Kolawole Fadahunsi, DPT" },
      {
        property: "og:description",
        content: "A Doctor of Physiotherapy specialising in musculoskeletal care.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
        <p className="eyebrow">About</p>
        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
          A practice built on
          <span className="italic text-primary"> attention.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
          Gilead Digital Therapy Clinic is the private practice of Dr. Kolawole Fadahunsi, DPT. It
          exists because good physiotherapy takes time — and most healthcare no longer allows for
          it.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-none bg-[color:var(--secondary)]">
            <img
              src="https://cdn.phototourl.com/free/2026-07-18-cee0c7c6-4c6a-4190-a7e1-6aac275ebe30.jpg"
              alt="Dr. Kolawole Fadahunsi, DPT"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex justify-between border-b border-border/70 pb-3">
              <span className="eyebrow">Credential</span>
              <span className="text-foreground">DPT, Musculoskeletal</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-3">
              <span className="eyebrow">Focus</span>
              <span className="text-foreground">Adult MSK &amp; Post-Op</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-3">
              <span className="eyebrow">Setting</span>
              <span className="text-foreground">Clinic &amp; Telehealth</span>
            </div>
            <div className="flex justify-between border-b border-border/70 pb-3">
              <span className="eyebrow">Languages</span>
              <span className="text-foreground">English</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              I'm Dr. Kolawole Fadahunsi. I hold a Doctor of Physiotherapy degree with a
              specialisation in musculoskeletal care — the joints, muscles, tendons, and nerves that
              carry us through our days.
            </p>
            <p>
              I trained in this field because I kept meeting people who had been handed a diagnosis
              without ever being handed a plan. Pain that had been medicated, imaged, and
              second-opinioned into a corner. My belief is simple: with careful assessment and the
              right work, most musculoskeletal pain has a way forward.
            </p>
            <p>
              At Gilead I keep my caseload deliberately small. Every patient gets a full hour on
              their first visit, an honest assessment, and a plan they understand. Follow-ups are
              unhurried. Progress is measured, not assumed.
            </p>
          </div>

          <div className="mt-14">
            <p className="eyebrow">What I believe</p>
            <div className="rule-brass mt-4 w-16" />
            <ul className="mt-8 space-y-6">
              {[
                ["Time is the treatment.", "A rushed physiotherapy session is a wasted one."],
                [
                  "Movement is medicine.",
                  "The right dose, at the right time, in the right direction.",
                ],
                [
                  "Education is care.",
                  "You should leave every session understanding your body a little better.",
                ],
                [
                  "Discharge is the goal.",
                  "My job is to make yours easier — then step out of the way.",
                ],
              ].map(([t, b]) => (
                <li key={t} className="grid grid-cols-[auto_1fr] gap-6">
                  <span aria-hidden className="mt-2 h-2 w-2 rounded-none bg-accent" />
                  <div>
                    <h3 className="font-display text-2xl text-foreground">{t}</h3>
                    <p className="mt-1 text-foreground/70">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-[color:var(--primary-deep)] text-[color:var(--primary-foreground)]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-0 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <img
                src={handsTherapy}
                alt="Physiotherapist guiding a mobility movement"
                width={1408}
                height={1600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-10 lg:col-span-6 lg:p-16">
              <p className="eyebrow text-[color:var(--primary-foreground)]/60">Get in touch</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.05] md:text-5xl">
                Ready when you are.
              </h2>
              <p className="mt-6 max-w-md text-[color:var(--primary-foreground)]/75">
                New patients are welcome. Book an initial consultation, or write to me first if
                you'd like to check whether we're a good fit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 rounded-none bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-[color:var(--primary-deep)]"
                >
                  Book a consultation <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-none border border-[color:var(--primary-foreground)]/40 px-6 py-3 text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  Send a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
