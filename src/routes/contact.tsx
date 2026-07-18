import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content:
          "Get in touch with Gilead Digital Therapy Clinic. Ask a question, request an appointment, or check whether Dr. Kolawole Fadahunsi is a good fit for your care.",
      },
      { property: "og:title", content: "Contact — Gilead Digital Therapy Clinic" },
      { property: "og:description", content: "Reach the clinic by email, phone or web." },
    ],
  }),
  component: ContactPage,
});

import { useState } from "react";

function ContactPage() {
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
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
        <p className="eyebrow">Contact</p>
        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
          Say hello.
          <br />
          <span className="italic text-primary">We'll take it from there.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@gileadtherapy.clinic" },
              { icon: Phone, label: "Phone", value: "+2348023000262" },
              { icon: MapPin, label: "Clinic", value: "In-person by appointment" },
              { icon: Clock, label: "Hours", value: "Mon–Fri · 9:00 – 18:00" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 border-b border-border/70 pb-6">
                <Icon size={20} className="mt-1 text-primary" />
                <div>
                  <p className="eyebrow">{label}</p>
                  <p className="mt-1 text-lg text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 rounded-none bg-[color:var(--muted)] p-8">
            <p className="font-display text-2xl italic leading-snug text-foreground">
              "Write to me the way you'd write to a friend who happens to be your physiotherapist.
              Plain language is fine."
            </p>
            <p className="eyebrow mt-4">— Dr. Kolawole</p>
          </blockquote>
        </div>

        <div className="lg:col-span-7">
          {formState.succeeded ? (
            <div className="rounded-none border border-primary/30 bg-[color:var(--muted)] p-12 text-center md:p-16">
              <h2 className="font-display text-3xl font-medium text-foreground">
                Message Received
              </h2>
              <p className="mx-auto mt-4 max-w-md text-foreground/85">
                Thank you for reaching out. Your message has been sent to our inbox via Formspree.
                Dr. Kolawole reviews every message personally and will reply to you within one
                working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="rounded-none border border-border bg-card p-8 md:p-12">
                <p className="eyebrow">Send a message</p>
                {formState.error && (
                  <div className="mt-6 border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-600">
                    {formState.error}
                  </div>
                )}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Email address" name="email" type="email" required />
                  <Field label="Phone (optional)" name="phone" />
                  <Field label="What's bothering you?" name="topic" placeholder="e.g. lower back" />
                </div>
                <div className="mt-6">
                  <label className="eyebrow" htmlFor="message">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-3 w-full rounded-none border border-input bg-background p-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                    placeholder="Tell me a little about what's going on and what you're hoping to change."
                  />
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">We reply within one working day.</p>
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="btn-primary hover:btn-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState.submitting ? "Sending..." : "Send message"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
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
        placeholder={placeholder}
        className="mt-3 w-full rounded-none border border-input bg-background p-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
