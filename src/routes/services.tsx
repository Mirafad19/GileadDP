import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content:
          "Initial consultations, follow-up sessions, post-surgical rehabilitation, exercise reviews, and telehealth physiotherapy with Dr. Kolawole Fadahunsi, DPT.",
      },
      { property: "og:title", content: "Services — Gilead Digital Therapy Clinic" },
      {
        property: "og:description",
        content: "In-clinic and telehealth musculoskeletal physiotherapy services.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    tag: "01",
    name: "Initial Consultation",
    duration: "60 minutes",
    desc: "A full hour to understand your history, examine your movement, and identify the driver of your pain. You leave with a written plan and clear next steps.",
    includes: [
      "Detailed history & lifestyle review",
      "Movement & functional screening",
      "Hands-on examination",
      "Working diagnosis & plan",
      "Starter home programme",
    ],
  },
  {
    tag: "02",
    name: "Follow-Up Session",
    duration: "45 minutes",
    desc: "Ongoing treatment sessions to progress your care. Manual therapy, guided exercise, and honest conversation about how you're tracking against the plan.",
    includes: [
      "Manual therapy",
      "Guided movement coaching",
      "Programme progression",
      "Symptom re-assessment",
    ],
  },
  {
    tag: "03",
    name: "Post-Surgical Rehabilitation",
    duration: "Structured programme",
    desc: "For patients recovering from orthopaedic surgery — knee replacements, shoulder repairs, ACLs, spinal procedures. Progressive, protected, and paced to your surgeon's protocol.",
    includes: [
      "Protocol-guided phasing",
      "Range-of-motion restoration",
      "Progressive loading",
      "Return-to-activity planning",
    ],
  },
  {
    tag: "04",
    name: "Exercise Review Session",
    duration: "30 minutes",
    desc: "A focused check-in for patients on a self-managed programme. We refine technique, adjust the load, and answer the questions that came up between sessions.",
    includes: ["Technique correction", "Load & volume adjustments", "Programme troubleshooting"],
  },
  {
    tag: "05",
    name: "Telehealth Consultation",
    duration: "45 minutes • secure video",
    desc: "For patients further afield or between visits. Secure video sessions for assessments, exercise coaching, and second opinions — with the same care as in-clinic.",
    includes: [
      "Secure video platform",
      "Written summary after each session",
      "Exercise prescriptions delivered digitally",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
        <p className="eyebrow">Services</p>
        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
          A short menu.
          <br />
          <span className="italic text-primary">Each service, done well.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
          Every service below is delivered personally by Dr. Kolawole Fadahunsi. No junior
          handovers, no assembly line. Fees are shared transparently at booking.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="divide-y divide-border/70 border-y border-border/70">
          {services.map((s) => (
            <article key={s.tag} className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="font-display text-6xl text-primary/40">{s.tag}</span>
                <h2 className="font-display mt-4 text-3xl leading-tight text-foreground md:text-4xl">
                  {s.name}
                </h2>
                <p className="eyebrow mt-4">{s.duration}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-lg leading-relaxed text-foreground/80">{s.desc}</p>
                <ul className="mt-6 space-y-2 text-foreground/75">
                  {s.includes.map((i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start lg:col-span-3 lg:justify-end">
                <Link to="/book" className="btn-ghost hover:bg-secondary">
                  Book {s.name.split(" ")[0].toLowerCase()} <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[color:var(--muted)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Not sure where to start?</p>
              <h2 className="font-display mt-4 text-3xl leading-tight text-foreground md:text-4xl">
                Book an initial consultation. We'll figure out the rest together.
              </h2>
            </div>
            <div className="flex items-center lg:col-span-4 lg:justify-end">
              <Link to="/book" className="btn-primary hover:btn-primary-hover">
                Book now <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
