import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content:
          "Our policy regarding privacy and the secure handling of your health and contact data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24 lg:px-10">
        <p className="eyebrow">Legal & Compliance</p>
        <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: July 18, 2026</p>
        <div className="rule-brass mt-8 w-24" />

        <div className="mt-12 space-y-10 text-foreground/85 leading-relaxed">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              At Gilead Digital Therapy Clinic (led by Dr. Kolawole Fadahunsi, DPT), we take the
              privacy and security of your personal and medical information seriously. This policy
              describes how we collect, use, and protect your information when you visit our clinic,
              use our website, or book a consultation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal details, clinical intake history, contact details (email and
              phone number), and other assessment notes that you choose to share with us during your
              registration, message submission, or booking process. This includes:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Contact details such as your full name, email address, and phone number.</li>
              <li>
                Booking details such as reasons for consultation and relevant medical histories.
              </li>
              <li>Clinical logs, assessment notes, and physiotherapy regimen tracking.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              3. Secure Telehealth & Clinical Integrity
            </h2>
            <p>
              All video consultations and digital health interactions are held on secure, encrypted
              telehealth software in line with global data compliance and healthcare privacy
              standards. We will never sell, trade, or share your data with unauthorized third
              parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              4. Cookies and Web Analytics
            </h2>
            <p>
              Our website uses basic, privacy-respecting cookies to assist with form submissions,
              security, and tracking overall visitor numbers. No personalized advertising trackers
              are deployed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl font-medium text-foreground">
              5. Your Rights and Contact
            </h2>
            <p>
              You have the full right to request access to the clinical or personal records we hold
              about you, or ask for deletion and corrections of your contact data. For any
              questions, please write directly to:{" "}
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
