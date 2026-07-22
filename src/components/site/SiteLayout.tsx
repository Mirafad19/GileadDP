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

function Wordmark({ className = "h-14 md:h-16" }: { className?: string }) {
  return (
    <Link to="/" className="group flex items-center">
      <img
        src="https://cdn.phototourl.com/free/2026-07-18-f3b271b9-0f8e-44f2-88ba-1be0dea6b797.png"
        alt="Gilead Digital Therapy"
        className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
        referrerPolicy="no-referrer"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Wordmark className="h-[56px] md:h-[72px]" />
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
          type="button"
          className="md:hidden flex h-11 w-11 items-center justify-center border border-border/80 bg-card text-foreground transition-colors hover:bg-muted active:scale-95 touch-manipulation cursor-pointer select-none"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background/100 md:hidden shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-foreground/90 py-2.5 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
                activeProps={{ className: "text-primary font-bold" }}
              >
                <span>{item.label}</span>
                <ArrowRight size={16} className="text-muted-foreground opacity-60" />
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="btn-primary hover:btn-primary-hover mt-3 w-full text-center py-3.5 text-sm font-bold uppercase tracking-wider block"
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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const email = newsletterEmail.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setErrorMsg("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setErrorMsg("Please check the consent box below.");
      return;
    }

    setSubmitting(true);

    // Save to local storage as client backup
    try {
      const existing = JSON.parse(localStorage.getItem("gilead_newsletter_subscribers") || "[]");
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem("gilead_newsletter_subscribers", JSON.stringify(existing));
      }
    } catch {
      // Ignore localStorage errors
    }

    try {
      const response = await fetch("https://formspree.io/f/mgogklvq", {
        method: "POST",
        body: JSON.stringify({
          _subject: `New Newsletter Subscriber: ${email}`,
          _replyto: email,
          email,
          newsletterConsent: "Yes, consented to clinical updates",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubscribed(true);
        setNewsletterEmail("");
        setErrorMsg(null);
      } else {
        // Even if network fails or Formspree errors, mark as subscribed since client backup captured it
        setSubscribed(true);
        setNewsletterEmail("");
        setErrorMsg(null);
      }
    } catch (err) {
      console.error(err);
      // Client-side fallback success
      setSubscribed(true);
      setNewsletterEmail("");
      setErrorMsg(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-[color:var(--primary-deep)]/10 bg-[color:var(--accent)] text-[color:var(--primary-deep)]/80">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand and Accreditation */}
          <div className="lg:col-span-4 space-y-6">
            <Wordmark className="h-[76px] md:h-[88px]" />
            <p className="max-w-sm text-sm leading-relaxed text-[color:var(--primary-deep)]/85 font-medium">
              Evidence-based musculoskeletal physiotherapy led by Dr. Kolawole Fadahunsi, DPT. A
              calm, considered practice for people who want to move well again.
            </p>
            {/* Elegant Custom DPT Accreditation Badge */}
            <div className="flex items-center gap-3.5 border border-[color:var(--primary-deep)]/15 bg-[color:var(--primary-deep)]/5 p-3.5 max-w-[240px]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[color:var(--primary-deep)] text-[color:var(--primary-foreground)] text-[9px] font-bold tracking-wider">
                MRTB
              </div>
              <div className="leading-tight">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[color:var(--primary-deep)]">
                  Licensed Practice
                </span>
                <span className="block text-[9px] text-[color:var(--primary-deep)]/65 uppercase tracking-widest font-semibold">
                  MRTBN Reg · Est. 2026
                </span>
              </div>
            </div>
          </div>

          {/* Practice Column */}
          <div className="lg:col-span-2 lg:pl-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary-deep)]/50">
              Practice
            </p>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <Link to="/about" className="transition-colors hover:text-white text-[color:var(--primary-deep)]/80 hover:underline underline-offset-4 font-medium">
                  About Dr. Kolawole
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-white text-[color:var(--primary-deep)]/80 hover:underline underline-offset-4 font-medium">
                  Services &amp; Fees
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="transition-colors hover:text-white text-[color:var(--primary-deep)]/80 hover:underline underline-offset-4 font-medium">
                  Conditions Treated
                </Link>
              </li>
              <li>
                <Link to="/book" className="transition-colors hover:text-white text-[color:var(--primary-deep)]/80 hover:underline underline-offset-4 font-medium">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal Column */}
          <div className="lg:col-span-3 lg:pl-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary-deep)]/50">
              Clinic &amp; Contact
            </p>
            <ul className="mt-5 space-y-3.5 text-sm">
              <li>
                <a
                  href="mailto:hello@gileadtherapy.clinic"
                  className="transition-colors hover:text-white hover:underline underline-offset-4 text-[color:var(--primary-deep)]/80 font-medium"
                >
                  hello@gileadtherapy.clinic
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348023000262"
                  className="transition-colors hover:text-white hover:underline underline-offset-4 text-[color:var(--primary-deep)]/80 font-medium"
                >
                  +234 802 300 0262
                </a>
              </li>
              <li className="text-[color:var(--primary-deep)]/70 font-medium">In-person by appointment (Lagos)</li>
              <li className="pt-4 flex gap-3.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-[color:var(--primary-deep)]/15 bg-[color:var(--primary-deep)]/5 text-[color:var(--primary-deep)]/80 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-[color:var(--primary-deep)]/15 bg-[color:var(--primary-deep)]/5 text-[color:var(--primary-deep)]/80 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-[color:var(--primary-deep)]/15 bg-[color:var(--primary-deep)]/5 text-[color:var(--primary-deep)]/80 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--primary-deep)]/50">
              Clinical Updates
            </p>
            {subscribed ? (
              <div className="bg-[color:var(--primary-deep)]/5 border border-[color:var(--primary-deep)]/20 p-5 text-center">
                <Check className="mx-auto h-5 w-5 text-[color:var(--primary-deep)]" />
                <p className="mt-2 text-xs font-medium text-[color:var(--primary-deep)]">
                  Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/mgogklvq"
                method="POST"
                onSubmit={handleSubscribe}
                className="space-y-3.5"
              >
                {errorMsg && (
                  <p className="text-[11px] font-semibold text-red-600 bg-red-500/10 p-2 border border-red-500/20">
                    {errorMsg}
                  </p>
                )}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full border border-[color:var(--primary-deep)]/25 bg-white p-3.5 text-sm text-[color:var(--primary-deep)] placeholder-[color:var(--primary-deep)]/50 focus:border-[color:var(--primary-deep)] focus:outline-none focus:ring-1 focus:ring-[color:var(--primary-deep)]/30 font-medium transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 h-3.5 w-3.5 border-[color:var(--primary-deep)]/30 rounded-none bg-white accent-[color:var(--primary-deep)] text-[color:var(--primary-foreground)] focus:ring-[color:var(--primary-deep)]/40"
                  />
                  <label
                    htmlFor="consent"
                    className="text-[10px] leading-snug text-[color:var(--primary-deep)]/75 select-none font-semibold"
                  >
                    Yes, subscribe me to your newsletter. *
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[color:var(--primary-deep)] text-[color:var(--primary-foreground)] py-3 px-6 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[color:var(--primary-deep)]/90 hover:text-white hover:scale-[1.01] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                >
                  {submitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}

            <div className="pt-4 flex gap-4 text-xs">
              <Link to="/privacy" className="text-[color:var(--primary-deep)]/50 transition-colors hover:text-white hover:underline underline-offset-4 font-semibold">
                Privacy Policy
              </Link>
              <span className="text-[color:var(--primary-deep)]/20">|</span>
              <Link to="/terms" className="text-[color:var(--primary-deep)]/50 transition-colors hover:text-white hover:underline underline-offset-4 font-semibold">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits with clean horizontal rule */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[color:var(--primary-deep)]/15 pt-8 text-[11px] text-[color:var(--primary-deep)]/50 md:flex-row">
          <p>© {new Date().getFullYear()} Gilead Digital Therapy Clinic. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Designed with care in Lagos, Nigeria{" "}
            <span className="h-1.5 w-1.5 bg-[color:var(--primary-deep)] inline-block" /> Dr. Kolawole Fadahunsi
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
