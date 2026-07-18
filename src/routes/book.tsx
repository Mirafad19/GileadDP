import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CalendarDays, Video, Stethoscope, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Session — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content:
          "Book an appointment with Dr. Kolawole Fadahunsi, DPT — initial consultation, follow-up, post-surgical rehabilitation, or a telehealth session.",
      },
      { property: "og:title", content: "Book a Session — Gilead Digital Therapy Clinic" },
      {
        property: "og:description",
        content: "Reserve an in-clinic or telehealth appointment.",
      },
    ],
  }),
  component: BookPage,
});

const options = [
  {
    icon: Stethoscope,
    name: "Initial Consultation",
    duration: "60 min · in clinic",
    desc: "For new patients. A full assessment and starter plan.",
  },
  {
    icon: CalendarDays,
    name: "Follow-Up Session",
    duration: "45 min · in clinic",
    desc: "For patients continuing on a programme.",
  },
  {
    icon: Video,
    name: "Telehealth Consultation",
    duration: "45 min · secure video",
    desc: "For patients further afield or between visits.",
  },
];

import { useState } from "react";

function BookPage() {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null as string | null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: null });
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mgogklvq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const data = await response.json();
        setFormState({
          submitting: false,
          succeeded: false,
          error: data.error || "Submission failed. Please check your inputs.",
        });
      }
    } catch (err) {
      setFormState({
        submitting: false,
        succeeded: false,
        error: "Network error. Please try again or email us directly.",
      });
    }
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-10 lg:pt-32">
        <p className="eyebrow">Book</p>
        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
          Reserve your
          <br />
          <span className="italic text-primary">first hour.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
          Choose the session type that fits, then submit the request. We'll confirm within one
          working day with the next available slot.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {options.map(({ icon: Icon, name, duration, desc }) => (
            <article
              key={name}
              className="rounded-none border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <Icon size={26} className="text-primary" />
              <h3 className="font-display mt-6 text-2xl text-foreground">{name}</h3>
              <p className="eyebrow mt-2">{duration}</p>
              <p className="mt-4 text-sm text-foreground/70">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        {formState.succeeded ? (
          <div className="rounded-none border border-primary/30 bg-[color:var(--muted)] p-12 text-center md:p-16">
            <h2 className="font-display text-3xl font-medium text-foreground">
              Booking Request Received
            </h2>
            <p className="mx-auto mt-4 max-w-md text-foreground/85">
              Thank you for requesting a session. Dr. Kolawole has received your details via
              Formspree and will review them shortly. We will contact you via email or phone within
              one working day to finalize your slot.
            </p>
            <div className="mt-8">
              <Link to="/" className="btn-primary">
                Return Home
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-none border border-border bg-card p-8 md:p-12"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="eyebrow">Booking request</p>
              <p className="text-xs text-muted-foreground">All fields required unless noted</p>
            </div>

            {formState.error && (
              <div className="mt-6 border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-600">
                {formState.error}
              </div>
            )}

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email address" name="email" type="email" required />
              <Field label="Phone" name="phone" required />
              <Selector
                label="Session type"
                name="session"
                options={options.map((o) => `${o.name} — ${o.duration}`)}
              />
              <Field label="Preferred date" name="date" type="date" required />
              <Field label="Preferred time" name="time" type="time" required />
            </div>

            <div className="mt-6">
              <label className="eyebrow" htmlFor="notes">
                A brief note (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={5}
                className="mt-3 w-full rounded-none border border-input bg-background p-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                placeholder="Anything I should know before we meet."
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-8">
              <p className="max-w-md text-xs text-muted-foreground">
                Prefer to talk first?{" "}
                <Link to="/contact" className="text-primary underline underline-offset-4">
                  Send a message instead
                </Link>
                .
              </p>
              <button
                type="submit"
                disabled={formState.submitting}
                className="btn-primary hover:btn-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.submitting ? "Sending Request..." : "Request booking"}{" "}
                <ArrowUpRight size={16} />
              </button>
            </div>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-none border border-input bg-background p-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}

function Selector({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        className="mt-3 w-full rounded-none border border-input bg-background p-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
