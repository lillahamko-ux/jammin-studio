"use client";

import { useState } from "react";
import Image from "next/image";

const CDN = "https://cdn.prod.website-files.com/62e82c4f4d59cb564e6a7e0a";

const LOGO_WHITE = `${CDN}/6911236f745dea323f1b58f6_jamminlogowhite.png`;
const FOOTER_LOGO = `${CDN}/67fadb5acad347c393e9fe85_jammin-footer-logo.png`;
const APP_SCREENSHOT = `${CDN}/6966ccbd596754d8e4617349_jammin-gb.png`;
const BEN_LANG_PHOTO = `${CDN}/67fadb5acad347c393e9fe78_image-126.png`;
const PLAY_ICON = `${CDN}/67fadb5acad347c393e9fe7a_67749da75c7997b7dddb301a_play.svg`;

const BENTO = [
  {
    label: "first",
    title: <>Create your <span className="text-[#ff76a2]">profile</span>, connect your socials</>,
    img: `${CDN}/6911255bb8685c8bbc54f994_bento1.png`,
    imgWidth: 311,
    imgHeight: 400,
  },
  {
    label: "second",
    title: <><span className="text-[#ff76a2]">Collaborate</span> real time on music files</>,
    img: `${CDN}/691125b30170aec32888c1fb_bento2.png`,
    imgWidth: 624,
    imgHeight: 300,
  },
  {
    label: "third",
    title: <>Share your music with the <span className="text-[#ff76a2]">community</span></>,
    img: `${CDN}/6911261d70d97b935ff14e91_bento3.png`,
    imgWidth: 418,
    imgHeight: 260,
  },
  {
    label: "forth",
    title: <>Record, edit, share music in your <span className="text-[#ff76a2]">browser</span></>,
    img: `${CDN}/6911267af75f88b0e5135ccc_bento4.png`,
    imgWidth: 382,
    imgHeight: 260,
  },
];

const FEATURE_TABS = [
  {
    label: "Create music together",
    poster: `${CDN}/6911133fe30b0a29cd8dfff7_Create%20music%20together%20%281%29-poster-00001.jpg`,
    mp4: `${CDN}/6911133fe30b0a29cd8dfff7_Create%20music%20together%20%281%29-transcode.mp4`,
    webm: `${CDN}/6911133fe30b0a29cd8dfff7_Create%20music%20together%20%281%29-transcode.webm`,
  },
  {
    label: "Find your community",
    poster: `${CDN}/690f821498054641a5837fcb_Find%20your%20Community-poster-00001.jpg`,
    mp4: `${CDN}/690f821498054641a5837fcb_Find%20your%20Community-transcode.mp4`,
    webm: `${CDN}/690f821498054641a5837fcb_Find%20your%20Community-transcode.webm`,
  },
  {
    label: "Share & discover music",
    poster: `${CDN}/6911158bc92a19b92ba61b44_Share%20%26%20discover%20music%20%281%29-poster-00001.jpg`,
    mp4: `${CDN}/6911158bc92a19b92ba61b44_Share%20%26%20discover%20music%20%281%29-transcode.mp4`,
    webm: `${CDN}/6911158bc92a19b92ba61b44_Share%20%26%20discover%20music%20%281%29-transcode.webm`,
  },
];

const TESTIMONIALS = [
  {
    quote: "Pretty cool idea! No more sending files back and forth.",
    name: "Landon Powell",
    role: "Musician",
    img: `${CDN}/67fadb5acad347c393e9fe6c_63588dedbd05f54c7879f6b0_Webclip_Jammin.png`,
  },
  {
    quote: "I found it super intuitive and simple to use. Uncomplicated. The layout is very clean, without major commands for other features.",
    name: "Estela Cabral",
    role: "Musician",
    img: `${CDN}/67fadb5acad347c393e9fed2_Screenshot%202025-04-06%20at%2019.24.47.png`,
  },
  {
    quote: "Jammin' is a game-changer for musicians like me who crave that live jam session vibe from home. Love how it brings everyone together in one virtual stage!",
    name: "Frank Petron",
    role: "Musician",
    img: `${CDN}/67fadb5acad347c393e9fe95_Screenshot%202025-04-06%20at%2019.25.11.png`,
  },
  {
    quote: "Even though it's still in a early stage, it's amazing everything that the platform already has!",
    name: "Guilherme Maia",
    role: "Musician",
    img: `${CDN}/67fadb5acad347c393e9fe97_Screenshot%202025-04-06%20at%2019.25.39.png`,
  },
];

const PARTNERS = [
  { name: "HawkStars", href: "http://hawkstars.org", img: `${CDN}/6827dddf8a9ca53f96d91d89_HawkStars_Logo.png` },
  { name: "LXMN", href: "https://www.instagram.com/lxmusicnetwork/", img: `${CDN}/6827dddeb531f7afa0efd51b_LXMN_Logo.png` },
  { name: "Barcelona Music Tech Hub", href: "https://barcelonamusictech.com/en/home/", img: `${CDN}/69542ebe723783fb224280e8_music-tech-hub-white.png` },
  { name: "Music Technology UK", href: "https://musictechnology.uk/", img: `${CDN}/69c55dc238f03a09256840f4_MTUK_Logo.png` },
  { name: "Unicorn Factory Lisboa", href: "https://unicornfactorylisboa.com/", img: `${CDN}/69597fb2234c78fdf0f2c6a1_Logo%20UFL_Branco_sem%20fundo.png` },
];


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/">
          <Image src={LOGO_WHITE} alt="Jammin'" width={120} height={28} priority />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[["#about", "About"], ["#features", "Features"], ["#kindwords", "Kind words"]].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-white/70 hover:text-white transition-colors font-medium">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a href="https://app.jamminstudio.co/login" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
            Log in
          </a>
          <a href="https://app.jamminstudio.co/register" target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold border border-[#ff76a2] rounded-lg text-white hover:opacity-80 transition-opacity">
            Sign up
          </a>
        </div>
        <button className="md:hidden text-white/70 hover:text-white p-2" onClick={() => setOpen(!open)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111] border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {[["#about", "About"], ["#features", "Features"], ["#kindwords", "Kind words"]].map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-white/70" onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="https://app.jamminstudio.co/login" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70">Log in</a>
            <a href="https://app.jamminstudio.co/register" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold border border-[#ff76a2] rounded-lg px-4 py-1.5 text-white">Sign up</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-[#111] min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="gradient-text text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Where music is made together,
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            not sent back and forth
          </h2>
        </div>
        <p className="text-white/60 text-lg font-medium">Music was never meant to be felt alone</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="https://app.jamminstudio.co/register" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-[#ff76a2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
            Join the Jam
          </a>
          <a href="#features"
            className="flex items-center gap-2 px-6 py-3 border border-[#ff76a2] rounded-lg text-white font-semibold text-sm hover:opacity-80 transition-opacity">
            <Image src={PLAY_ICON} alt="" width={16} height={16} />
            See it in action
          </a>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <Image src={BEN_LANG_PHOTO} alt="Ben Lang" width={28} height={28} className="rounded-full" />
          <p className="text-white/60 text-sm italic">
            &quot;Feels like figma for music is finally here. Super cool.&quot; — <span className="text-white font-medium not-italic">Ben Lang</span>
          </p>
        </div>
      </div>
      <div className="w-full mt-16 px-4 md:px-12 max-w-7xl mx-auto">
        <Image
          src={APP_SCREENSHOT}
          alt="Jammin' app screenshot"
          width={3024}
          height={1800}
          className="w-full rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#111] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENTO.map((b) => (
            <div
              key={b.label}
              className={`relative rounded-[20px] overflow-hidden p-8 flex flex-col justify-between ${
                b.label === "forth" ? "bg-[#353637]" : "bg-[#222]"
              } ${b.label === "first" || b.label === "second" ? "md:col-span-2 h-[440px]" : "h-[260px]"}`}
            >
              <h3 className="text-white font-semibold text-lg leading-snug z-10 relative">{b.title}</h3>
              <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
                <Image
                  src={b.img}
                  alt=""
                  width={b.imgWidth}
                  height={b.imgHeight}
                  className="object-contain max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const [active, setActive] = useState(0);
  return (
    <section id="features" className="bg-[#111] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight">
            Features you don&apos;t find anywhere else
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          {/* Pill toggle bar */}
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex flex-col sm:flex-row items-stretch p-1.5 rounded-full border border-[#ff76a230] bg-[#161616]">
              {FEATURE_TABS.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  className={`flex-1 px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                    active === i
                      ? "bg-white text-black shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Active video */}
          <div className="rounded-2xl overflow-hidden bg-[#222]">
            <video
              key={FEATURE_TABS[active].mp4}
              autoPlay
              loop
              muted
              playsInline
              poster={FEATURE_TABS[active].poster}
              className="w-full h-auto object-contain"
            >
              <source src={FEATURE_TABS[active].mp4} type="video/mp4" />
              <source src={FEATURE_TABS[active].webm} type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="kindwords" className="bg-[#111] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-3">Hear it from our community</h2>
          <p className="text-white/50 text-lg">Nice feedback we received from our members</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-7 flex flex-col gap-5">
              <p className="text-white/70 text-base leading-relaxed flex-1">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[#111] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-8">
          <span className="text-white">Take your musicianship</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb3cc] to-[#e63573]">
            to the next level with Jammin&apos;
          </span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Collaborate on music files in real-time with your band members, publish your new songs inside the community,
          build a portfolio, gain followers and land new gigs. All inside the platform.
        </p>
        <a
          href="https://app.jamminstudio.co/register"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-b from-[#f48fb1] to-[#e63573] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
        >
          Sign up to Jammin&apos;
        </a>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="bg-[#111] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-normal text-white text-center mb-16">Partnerships</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {PARTNERS.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity">
              <Image src={p.img} alt={p.name} width={260} height={90} className="object-contain h-16 md:h-20 w-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 px-6 pt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
              </span>
              <span className="text-2xl font-bold text-white">Jammin&apos;</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              We believe that talent and dedication alone should be able to give musicians a great living.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-5">Pages</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meet the Band</a></li>
              <li><a href="https://app.jamminstudio.co/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Log in</a></li>
              <li><a href="https://app.jamminstudio.co/register" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sign up</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Legal + socials */}
          <div>
            <h3 className="text-white font-semibold mb-5">Legal</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/50 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
            </ul>
            <div className="flex items-center gap-4 text-white/70">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-5.4-7.06L4 22H.74l8.02-9.17L1.5 2h7.07l4.88 6.45L18.244 2zm-1.21 18h1.9L7.05 4H5.02l12.014 16z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant outlined wordmark fading downward */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none">
        <h2
          className="w-full text-center font-bold leading-none whitespace-nowrap text-transparent"
          style={{
            fontSize: "clamp(4rem, 26vw, 26rem)",
            WebkitTextStroke: "1.5px #ff76a2",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%)",
            letterSpacing: "-0.02em",
          }}
        >
          Jammin&apos;
        </h2>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-white/30">
        <p>
          2025 @copywright Jammin&apos; | website made with love by studio aceso
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="bg-[#111]">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CTA />
      <Partners />
      <Footer />
    </div>
  );
}
