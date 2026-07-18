import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content: "Our clinic conditions, session cancellation policy, and terms of service.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24 lg:px-10">
        <p className="eyebrow">Legal & Compliance</p>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: July 18, 2026</p>
        <div className="rule-brass mt-8 w-24" />

        <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website, requesting a consultation, or engaging with our
              physiotherapy services, you agree to comply with and be bound by these Terms of
              Service. If you do not agree, please do not use our booking facilities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              2. Clinical Nature of Service
            </h2>
            <p>
              All musculoskeletal therapy, virtual or physical sessions, assessment programs, and
              exercises are designed and directed by Dr. Kolawole Fadahunsi, DPT. While
              physiotherapists diagnose movement-related impairments, the digital advice and content
              on this site are for informational and clinical purposes only and do not substitute a
              comprehensive, formal clinical intake if you do not follow through with real
              one-on-one sessions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              3. Booking & Cancellation Policy
            </h2>
            <p>
              A considered practice requires dedicated focus. When you book a slot, that time is
              reserved exclusively for you. We kindly request a minimum of 24 hours' notice for any
              cancellations or rescheduling requests. Late cancellations may incur a standard
              holding charge.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              4. External Form Handling & Messaging
            </h2>
            <p>
              We use third-party services such as Formspree for handling intake forms and contact
              messages safely and reliably. By submitting our forms, you acknowledge that your input
              data is securely passed through Formspree's servers to land directly in our medical
              administration inbox.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              5. Queries and Concerns
            </h2>
            <p>
              Please address all questions regarding appointments, digital treatment plans, or
              administrative terms directly to Dr. Fadahunsi's team at:{" "}
              <a href="mailto:hello@gileadtherapy.clinic" className="text-primary underline">
                hello@gileadtherapy.clinic
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
