import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Instagram, Linkedin, Twitter, ArrowRight, Check } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center">
      <img
        src="https://cdn.phototourl.com/free/2026-07-18-f3b271b9-0f8e-44f2-88ba-1be0dea6b797.png"
        alt="Gilead Digital Therapy"
        className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Wordmark />
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-sm text-foreground/75 transition-colors hover:text-primary py-1 group"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/book"
            className="btn-primary hover:btn-primary-hover border border-primary px-6 py-3 text-sm font-medium transition-all"
          >
            Book a session
          </Link>
        </div>
        <button
          className="md:hidden border border-border p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 py-1"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="btn-primary hover:btn-primary-hover self-start mt-2"
            >
              Book a session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !consent) return;
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgogklvq", {
        method: "POST",
        body: JSON.stringify({ email: newsletterEmail, newsletterConsent: "Yes" }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubscribed(true);
        setNewsletterEmail("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="mt-32 border-t border-border/70 bg-[color:var(--muted)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand and Accreditation */}
          <div className="lg:col-span-4 space-y-6">
            <Wordmark />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Evidence-based musculoskeletal physiotherapy led by Dr. Kolawole Fadahunsi, DPT. A
              calm, considered practice for people who want to move well again.
            </p>
            {/* Elegant Custom DPT Accreditation Badge */}
            <div className="flex items-center gap-3.5 border border-border/60 bg-background/40 p-3.5 max-w-[240px]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground text-xs font-semibold">
                DPT
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-foreground">
                  DPT Accredited
                </span>
                <span className="block text-[9px] text-muted-foreground uppercase tracking-widest">
                  Practice · Est. 2026
                </span>
              </div>
            </div>
          </div>

          {/* Practice Column */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-foreground/50 font-bold uppercase tracking-wider text-xs">
              Practice
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  About Dr. Kolawole
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-primary">
                  Services &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="transition-colors hover:text-primary">
                  Conditions Treated
                </Link>
              </li>
              <li>
                <Link to="/book" className="transition-colors hover:text-primary">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-foreground/50 font-bold uppercase tracking-wider text-xs">
              Contact &amp; Legal
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>
                <a
                  href="mailto:hello@gileadtherapy.clinic"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  hello@gileadtherapy.clinic
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348023000262"
                  className="transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  +234 802 300 0262
                </a>
              </li>
              <li className="text-muted-foreground/90">In-person by appointment</li>
              <li className="pt-2">
                <Link to="/privacy" className="transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-primary">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="lg:col-span-1">
            <p className="eyebrow text-foreground/50 font-bold uppercase tracking-wider text-xs">
              Socials
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2 space-y-6">
            <p className="eyebrow text-foreground/50 font-bold uppercase tracking-wider text-xs">
              Newsletter
            </p>
            {subscribed ? (
              <div className="bg-background/50 border border-primary/30 p-5 text-center">
                <Check className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-2 text-xs font-medium text-foreground">
                  Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full border border-input bg-background p-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 h-3.5 w-3.5 border-input rounded-none bg-background accent-primary text-primary-foreground focus:ring-primary/40"
                  />
                  <label
                    htmlFor="consent"
                    className="text-[11px] leading-snug text-muted-foreground select-none"
                  >
                    Yes, subscribe me to your newsletter. *
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting || !consent}
                  className="w-full bg-foreground text-background py-3.5 px-6 text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}

            {/* Floating Social Media Circle Buttons aligned perfectly */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-border bg-background text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-border bg-background text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center border border-border bg-background text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits with clean horizontal rule */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-border/60 pt-8 text-[11px] text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Gilead Digital Therapy Clinic. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with care in Lagos, Nigeria{" "}
            <span className="h-1.5 w-1.5 bg-accent inline-block" /> Dr. Kolawole Fadahunsi
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <SiteHeader />
        <main>{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
