import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Activity, HeartPulse, Waves, Sparkles } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <IntroLetter />
      <ServicesPreview />
      <Approach />
      <ConditionsPreview />
      <ClosingCTA />
    </SiteLayout>
  );
}

/* ————————————————————— HERO ————————————————————— */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-end gap-16 px-6 pt-16 pb-24 md:pt-24 md:pb-32 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">Gilead Digital Therapy Clinic — Est. 2026</p>
          <h1 className="font-display mt-8 text-[3.25rem] leading-[0.98] text-foreground md:text-[5rem] lg:text-[6.25rem]">
            Move well.
            <br />
            <span className="italic text-primary">Live better.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
            Musculoskeletal physiotherapy with{" "}
            <span className="text-foreground">Dr. Kolawole Fadahunsi, DPT.</span> A considered,
            one-to-one practice for pain that has stayed too long — and for the movement you want
            back.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/book" className="btn-primary hover:btn-primary-hover">
              Book a consultation <ArrowUpRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost hover:bg-secondary">
              Meet Dr. Kolawole
            </Link>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-8">
            <div>
              <dt className="eyebrow">Discipline</dt>
              <dd className="font-display mt-2 text-2xl text-foreground">MSK</dd>
            </div>
            <div>
              <dt className="eyebrow">Credential</dt>
              <dd className="font-display mt-2 text-2xl text-foreground">DPT</dd>
            </div>
            <div>
              <dt className="eyebrow">Format</dt>
              <dd className="font-display mt-2 text-2xl text-foreground">1-on-1</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src="https://www.image2url.com/r2/default/images/1784659762873-72c02b15-e0b4-495a-a912-a202cd8ca307.png"
              alt="Calm physiotherapy treatment room with soft morning light"
              width={1600}
              height={1808}
              referrerPolicy="no-referrer"
              className="h-[560px] w-full rounded-none object-cover"
            />
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="rule-brass block h-px w-10" />
              <span className="eyebrow">The clinic room</span>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— TRUST STRIP ————————————————————— */

function TrustStrip() {
  const items = [
    "Doctor of Physiotherapy (DPT)",
    "Musculoskeletal specialist",
    "In-clinic & telehealth",
    "Personalised rehab plans",
    "Post-surgical recovery",
  ];
  return (
    <section className="border-y border-border/70 bg-[color:var(--muted)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-xs uppercase tracking-[0.22em] text-muted-foreground lg:px-10">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-10">
            {item}
            {i < items.length - 1 && (
              <span aria-hidden className="hidden text-accent md:inline">
                ◆
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ————————————————————— INTRO LETTER ————————————————————— */

function IntroLetter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">A note from Dr. Kolawole</p>
          <div className="rule-brass mt-6 w-24" />
          <div className="mt-8 aspect-[4/5] overflow-hidden rounded-none">
            <img
              src="https://plain-weur-prod-public.komododecks.com/202607/21/83y4oRVMGNASAU987Bkc/image.png"
              alt="Dr. Kolawole Fadahunsi, DPT"
              width={800}
              height={1000}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <h2 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl">
            Pain that lingers is not who you are.
            <span className="italic text-primary"> It's a signal.</span>
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
            <p>
              I trained as a Doctor of Physiotherapy in musculoskeletal care because I wanted to
              work with people, not with symptoms in isolation. Every body carries a story — of
              work, of sport, of recovery interrupted.
            </p>
            <p>
              My practice is quiet, deliberate, and deeply personal. We begin with a thorough
              assessment, then build a plan you can actually live with: hands-on treatment,
              prescribed movement, and honest conversation about what your recovery will look like.
            </p>
            <p className="font-display text-2xl italic text-primary">
              — Dr. Kolawole Fadahunsi, DPT
            </p>
          </div>
          <div className="mt-10">
            <Link to="/about" className="btn-ghost hover:bg-secondary">
              Read the full story <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— SERVICES ————————————————————— */

function ServicesPreview() {
  const services = [
    {
      icon: HeartPulse,
      title: "Initial Consultation",
      body: "A 60-minute assessment: history, movement screening, and a plan you leave with.",
      meta: "60 min",
    },
    {
      icon: Activity,
      title: "Follow-Up Sessions",
      body: "Hands-on treatment, progression of your programme, and honest check-ins on progress.",
      meta: "45 min",
    },
    {
      icon: Waves,
      title: "Post-Surgical Rehab",
      body: "Structured recovery for post-op knees, shoulders, and spines. Progressive, protected, patient.",
      meta: "Programme",
    },
    {
      icon: Sparkles,
      title: "Telehealth Review",
      body: "Secure video consultations for exercise coaching, progress reviews, and second opinions.",
      meta: "Online",
    },
  ];
  return (
    <section className="bg-[color:var(--primary-deep)] text-[color:var(--primary-foreground)]">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow text-[color:var(--primary-foreground)]/60">The Practice</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.05] md:text-6xl">
              A small menu of services,
              <br />
              <span className="italic opacity-90">done properly.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-b border-[color:var(--primary-foreground)]/40 pb-1 text-sm hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            All services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-none bg-[color:var(--primary-foreground)]/10 md:grid-cols-2">
          {services.map(({ icon: Icon, title, body, meta }) => (
            <article
              key={title}
              className="group flex flex-col justify-between gap-8 bg-[color:var(--primary-deep)] p-10 transition-colors hover:bg-[oklch(0.26_0.045_158)]"
            >
              <div className="flex items-start justify-between">
                <Icon size={28} className="text-[color:var(--accent)]" />
                <span className="eyebrow text-[color:var(--primary-foreground)]/60">{meta}</span>
              </div>
              <div>
                <h3 className="font-display text-3xl leading-tight">{title}</h3>
                <p className="mt-4 max-w-md text-[color:var(--primary-foreground)]/70">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————————————————————— APPROACH ————————————————————— */

function Approach() {
  const steps = [
    {
      n: "01",
      title: "Listen",
      body: "A slow, thorough intake. Your history, your work, what you've already tried, and what you actually want back.",
    },
    {
      n: "02",
      title: "Assess",
      body: "Careful movement screening and hands-on examination. We locate the driver of your pain, not just its address.",
    },
    {
      n: "03",
      title: "Treat",
      body: "Manual therapy, guided movement, and education. You learn what your tissues need — and why.",
    },
    {
      n: "04",
      title: "Progress",
      body: "A programme that grows with you. We measure, adjust, and hand the reins back once you're independent.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">The Approach</p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] text-foreground md:text-5xl">
            Four movements
            <br />
            <span className="italic text-primary">of care.</span>
          </h2>
          <p className="mt-6 max-w-md text-foreground/75">
            No conveyor belt. No twenty-minute sessions where the clock outruns the conversation.
            This is how we work together.
          </p>
          <img
            src="https://www.image2url.com/r2/default/images/1784660785123-b00976ec-15e3-4a02-8d9f-948f5d94685c.png"
            alt="Physiotherapist guiding a shoulder mobility movement"
            width={1408}
            height={1600}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="mt-12 hidden aspect-[4/5] w-full rounded-none object-cover lg:block"
          />
        </div>

        <ol className="lg:col-span-7 lg:pl-6">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid grid-cols-[auto_1fr] gap-10 border-t border-border/70 py-10 first:border-t-0 first:pt-0"
            >
              <span className="font-display text-4xl text-primary md:text-5xl">{s.n}</span>
              <div>
                <h3 className="font-display text-3xl text-foreground">{s.title}</h3>
                <p className="mt-3 max-w-lg text-foreground/75">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ————————————————————— CONDITIONS ————————————————————— */

function ConditionsPreview() {
  const conditions = [
    "Low back pain",
    "Neck & upper-back tension",
    "Frozen shoulder",
    "Rotator cuff injuries",
    "Tennis & golfer's elbow",
    "Hip impingement",
    "Knee osteoarthritis",
    "ACL & meniscal rehab",
    "Ankle sprains",
    "Plantar fasciitis",
    "Sciatica & disc pain",
    "Post-surgical recovery",
  ];
  return (
    <section className="bg-[color:var(--muted)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10 lg:py-36">
        <div className="lg:col-span-5">
          <p className="eyebrow">What we treat</p>
          <h2 className="font-display mt-6 text-4xl leading-[1.05] text-foreground md:text-5xl">
            Musculoskeletal pain,
            <br />
            <span className="italic text-primary">from head to heel.</span>
          </h2>
          <p className="mt-6 max-w-md text-foreground/75">
            A focused practice for joint, muscle, tendon, and nerve-related pain. If it moves — or
            refuses to — we can likely help.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/conditions" className="btn-primary hover:btn-primary-hover">
              See full list
            </Link>
            <Link to="/contact" className="btn-ghost hover:bg-secondary">
              Ask about yours
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4 self-center text-lg text-foreground/85 lg:col-span-7">
          {conditions.map((c) => (
            <li key={c} className="flex items-center gap-3 border-b border-border/60 pb-3">
              <span aria-hidden className="text-accent">
                ◆
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ————————————————————— CLOSING CTA ————————————————————— */

function ClosingCTA() {
  return (
    <section className="relative overflow-hidden w-full bg-[color:var(--primary-deep)]">
      <img
        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
        alt=""
        width={1200}
        height={1408}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[color:var(--primary-deep)]/78" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28 text-[color:var(--primary-foreground)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-[color:var(--primary-foreground)]/60">Begin</p>
            <h2 className="font-display mt-6 text-4xl leading-[1.05] md:text-6xl">
              A quieter path
              <br />
              <span className="italic">back to yourself.</span>
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--primary-foreground)]/80">
              Book an initial consultation and leave with a clear understanding of what's happening
              — and what to do next.
            </p>
          </div>
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <Link
              to="/book"
              className="inline-flex items-center gap-3 rounded-none bg-[color:var(--accent)] px-8 py-4 font-medium text-[color:var(--primary-deep)] transition-transform hover:-translate-y-0.5"
            >
              Book a consultation <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
