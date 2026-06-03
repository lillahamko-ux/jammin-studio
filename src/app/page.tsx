"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Kind words", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    title: "Real-time Collaboration",
    description:
      "Work simultaneously on the same session with musicians anywhere in the world. No more bouncing files back and forth.",
    icon: "🎸",
    wide: true,
  },
  {
    title: "Browser-based Studio",
    description: "Record, edit, and mix directly in your browser — no installs required.",
    icon: "🎛️",
    wide: false,
  },
  {
    title: "Community Sharing",
    description: "Publish your work, discover music, and connect with artists in the Jammin' community.",
    icon: "🎵",
    wide: false,
  },
  {
    title: "Portfolio & Opportunities",
    description: "Build a profile, gain followers, and unlock performance and collaboration opportunities.",
    icon: "🚀",
    wide: true,
  },
];

const TESTIMONIALS = [
  {
    name: "Ben Lang",
    role: "Musician & Producer",
    quote:
      "Jammin' feels like design software, but for music. The collaborative experience is unlike anything I've used.",
    initials: "BL",
  },
  {
    name: "Landon Powell",
    role: "Guitarist",
    quote:
      "Finally, no more back-and-forth file transfers. We just open a session and start playing.",
    initials: "LP",
  },
  {
    name: "Estela Cabral",
    role: "Singer-Songwriter",
    quote:
      "The interface is so intuitive and uncluttered. It gets out of the way and lets you focus on the music.",
    initials: "EC",
  },
  {
    name: "Frank Petron",
    role: "Drummer",
    quote:
      "It genuinely feels like a live jam session, even when we're on different continents.",
    initials: "FP",
  },
  {
    name: "Guilherme Maia",
    role: "Composer",
    quote:
      "Even at this early stage, the capabilities are impressive. The roadmap has me genuinely excited.",
    initials: "GM",
  },
];

const FAQS = [
  {
    q: "What do I need to get started?",
    a: "All you need is an instrument, an internet-connected device, and a reliable Wi-Fi connection. No downloads or installs required.",
  },
  {
    q: "Can I record my sessions?",
    a: "Yes! Premium subscribers can record full sessions. Free users can still jam in real time and save their work.",
  },
  {
    q: "How many people can join a session?",
    a: "Sessions support multiple musicians simultaneously. The exact limit depends on your plan.",
  },
  {
    q: "Is Jammin' suitable for beginners?",
    a: "Absolutely. Jammin' is designed to be welcoming for musicians of all skill levels, from hobbyists to professionals.",
  },
  {
    q: "Where can I follow the roadmap?",
    a: "We keep our public roadmap on Trello. You can follow along and vote on upcoming features.",
  },
];

const PARTNERS = ["HawkStars", "LXMN", "Barcelona Music Tech Hub", "Music Technology UK", "Unicorn Factory Lisboa"];

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      <a href="#" className="text-xl font-bold tracking-tight text-white">
        jammin<span className="text-purple-400">'</span>
      </a>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <a href="#" className="text-sm text-white/70 hover:text-white transition-colors px-3 py-1.5">
          Log in
        </a>
        <a
          href="#"
          className="text-sm font-medium bg-white text-black rounded-full px-4 py-1.5 hover:bg-white/90 transition-colors"
        >
          Sign up
        </a>
      </div>
      {/* Mobile */}
      <button className="md:hidden text-white/70 hover:text-white" onClick={() => setOpen(!open)} aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 flex flex-col px-6 py-4 gap-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="text-sm text-white/70">Log in</a>
            <a href="#" className="text-sm font-medium bg-white text-black rounded-full px-4 py-1.5">Sign up</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-700/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block text-sm text-purple-400 font-medium tracking-widest uppercase mb-6 bg-purple-400/10 px-4 py-1.5 rounded-full border border-purple-400/20">
          Now in early access
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
          Where music is made{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            together
          </span>
          , not sent back and forth.
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Jammin&apos; is the real-time music collaboration platform where musicians create, record, and share — simultaneously, from anywhere.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all shadow-lg shadow-white/10"
          >
            Join the Jam
          </a>
          <a href="#features" className="px-8 py-3.5 rounded-full border border-white/20 text-white text-base hover:bg-white/5 transition-all">
            See how it works
          </a>
        </div>
        <p className="mt-6 text-sm text-white/40">Talent and dedication alone should give musicians a great living.</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            Music made for collaboration, not isolation.
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            For too long, musicians have been stuck emailing audio files, waiting for feedback, and losing the spark of spontaneous creation. Jammin&apos; changes that.
          </p>
          <p className="text-white/60 leading-relaxed">
            Think of it like a shared document — but for music. Every collaborator works on the same session in real time, so the creative energy never gets lost in translation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Real-time sessions", value: "✓" },
            { label: "Browser-based", value: "✓" },
            { label: "Community platform", value: "✓" },
            { label: "No installs", value: "✓" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-2">
              <span className="text-2xl text-purple-400">{item.value}</span>
              <span className="text-sm text-white/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Everything you need to create together</h2>
        <p className="text-white/50 max-w-xl mx-auto">
          From real-time jamming to community discovery — Jammin&apos; has the tools musicians actually need.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 auto-rows-auto">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col gap-4 hover:bg-white/8 transition-colors ${
              f.wide ? "md:col-span-2" : ""
            } ${i === 3 ? "md:col-span-2" : ""}`}
          >
            <span className="text-3xl">{f.icon}</span>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.02] border-y border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Kind words</h2>
          <p className="text-white/50">From musicians who&apos;ve been waiting for something like this.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <p className="text-white/70 text-sm leading-relaxed flex-1">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <p className="text-center text-xs uppercase tracking-widest text-white/30 mb-10">Trusted by the music community</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {PARTNERS.map((p) => (
          <span key={p} className="text-sm text-white/30 font-medium hover:text-white/60 transition-colors cursor-default">
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Frequently asked</h2>
        <p className="text-white/50">Everything you need to know before you start jamming.</p>
      </div>
      <div className="flex flex-col gap-3">
        {FAQS.map((faq, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <button
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-sm font-medium text-white">{faq.q}</span>
              <span className="text-white/40 flex-shrink-0">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-6 pb-5">
                <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-white/10 rounded-3xl p-14">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to jam?</h2>
        <p className="text-white/55 mb-8 leading-relaxed">
          Join thousands of musicians already creating together on Jammin&apos;. It&apos;s free to get started.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all"
        >
          Sign up for free
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <a href="#" className="text-xl font-bold text-white tracking-tight">
            jammin<span className="text-purple-400">'</span>
          </a>
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white/70 transition-colors">{l.label}</a>
            ))}
            <a href="#" className="hover:text-white/70 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Jammin&apos; Studio. All rights reserved.</p>
          <p className="italic">&quot;Talent and dedication alone should give musicians a great living.&quot;</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <NavBar />
      <Hero />
      <Partners />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
