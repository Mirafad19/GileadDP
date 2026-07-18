import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions Treated — Gilead Digital Therapy Clinic" },
      {
        name: "description",
        content:
          "Musculoskeletal conditions treated at Gilead Digital Therapy Clinic — from low back pain and sciatica to post-surgical recovery, sports injuries, and joint arthritis.",
      },
      { property: "og:title", content: "Conditions Treated — Gilead Digital Therapy Clinic" },
      {
        property: "og:description",
        content: "Joint, muscle, tendon and nerve conditions treated at the clinic.",
      },
    ],
  }),
  component: ConditionsPage,
});

const regions = [
  {
    area: "Spine",
    items: [
      "Low back pain",
      "Sciatica",
      "Disc-related pain",
      "Neck pain & stiffness",
      "Postural / desk-related pain",
      "Whiplash recovery",
    ],
  },
  {
    area: "Shoulder & Arm",
    items: [
      "Frozen shoulder",
      "Rotator cuff injuries",
      "Shoulder impingement",
      "Tennis & golfer's elbow",
      "Post-surgical shoulder rehab",
    ],
  },
  {
    area: "Hip, Knee & Lower Limb",
    items: [
      "Hip impingement & bursitis",
      "Knee osteoarthritis",
      "ACL & meniscal rehabilitation",
      "Patellar tendinopathy",
      "IT band pain",
    ],
  },
  {
    area: "Foot & Ankle",
    items: [
      "Ankle sprains",
      "Plantar fasciitis",
      "Achilles tendinopathy",
      "Post-fracture rehabilitation",
    ],
  },
  {
    area: "Sports & Overuse",
    items: [
      "Running injuries",
      "Return-to-sport programmes",
      "Overtraining recovery",
      "Muscle strains & tears",
    ],
  },
  {
    area: "Post-Surgical",
    items: [
      "Knee replacement",
      "Hip replacement",
      "ACL reconstruction",
      "Shoulder repair",
      "Spinal surgery aftercare",
    ],
  },
];

function ConditionsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-10 lg:pt-32">
        <p className="eyebrow">Conditions</p>
        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
          From head
          <br />
          <span className="italic text-primary">to heel.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/75">
          A focused musculoskeletal practice. If your pain sits in a joint, a muscle, a tendon or a
          nerve — there's a good chance we can help. Below is a working list; if you don't see
          yours, ask.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {regions.map((r) => (
            <div key={r.area}>
              <div className="flex items-baseline justify-between border-b border-border/70 pb-3">
                <h2 className="font-display text-2xl text-foreground">{r.area}</h2>
                <span className="eyebrow">{r.items.length} conditions</span>
              </div>
              <ul className="mt-6 space-y-3 text-foreground/80">
                {r.items.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-none bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-[color:var(--muted)] border-y border-border/70 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="eyebrow">Don't see your condition?</p>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl leading-tight text-foreground md:text-4xl">
            Write to me. If it sits in your body's movement system,
            <span className="italic text-primary"> we can probably talk about it.</span>
          </h2>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary hover:btn-primary-hover">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
