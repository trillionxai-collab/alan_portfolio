import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Wifi,
  BookOpen,
  Users,
  Mail,
  Linkedin,
  Instagram,
  ExternalLink,
  ArrowUpRight,
  Radio,
  GraduationCap,
  Award,
  Sparkles,
} from "lucide-react";

import portrait from "@/assets/alan-portrait.jpeg.asset.json";
import rotary from "@/assets/alan-rotary.jpeg.asset.json";
import community from "@/assets/alan-community.jpeg.asset.json";
import gym from "@/assets/alan-gym.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alan Sebastian George — Hardware Validation Engineer & Community Builder" },
      {
        name: "description",
        content:
          "Hardware Validation Engineer specializing in WLAN / Wi-Fi, founder of TinkerHub MEC, and curriculum architect bridging engineering, education, and community.",
      },
      { property: "og:title", content: "Alan Sebastian George — Engineer & Builder" },
      {
        property: "og:description",
        content:
          "Where deep engineering meets multi-disciplinary innovation. WLAN validation, technical curriculum design, and peer-learning ecosystems.",
      },
      { property: "og:image", content: portrait.url },
      { name: "twitter:image", content: portrait.url },
    ],
  }),
  component: Portfolio,
});

const EMAIL = "Alansebastiangeorge.mec@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/alansebastiangeorge";
const INSTAGRAM = "https://www.instagram.com/alan_sebastian_george";
const TINKERHUB = "https://tinkerhub.org/@alansebastiangeorge";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Moments />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-bold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal to-pulse text-primary-foreground">
            <Radio size={16} />
          </span>
          <span>Alan S. George</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#expertise" className="hover:text-foreground transition">Expertise</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Hire me <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-hero-aurora">
      {/* signal waves */}
      <SignalWaves />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.3fr_1fr] md:items-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Hardware Validation · Community Builder
          </div>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Where deep <span className="text-gradient-signal">engineering</span> meets multi-disciplinary <span className="text-gradient-warm">innovation</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm Alan Sebastian George — a WLAN / Wi-Fi hardware validation engineer who
            builds learning ecosystems, designs curriculum, and ships things that work
            both in the lab and in the wild.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-signal to-pulse px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow-signal)] transition hover:scale-[1.02]"
            >
              <Mail size={16} /> Let's talk
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-medium text-foreground transition hover:bg-surface-elevated"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-6 text-sm">
            {[
              { v: "4+ yrs", l: "WLAN QA" },
              { v: "UN", l: "Millennium Fellow" },
              { v: "Ex-", l: "Synaptics" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-foreground">{s.v}</div>
                <div className="text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-signal via-pulse to-ember opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={portrait.url}
              alt="Portrait of Alan Sebastian George"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface-elevated/90 px-4 py-3 text-xs backdrop-blur">
            <div className="flex items-center gap-2 font-medium">
              <Sparkles size={14} className="text-ember" />
              Available for consulting
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SignalWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden opacity-30">
      <svg className="absolute -right-32 -top-20 h-[600px] w-[600px]" viewBox="0 0 400 400">
        {[60, 110, 160, 210, 260].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="url(#sg)"
            strokeWidth="1"
            style={{
              animation: `signal-pulse 4s ease-in-out ${i * 0.4}s infinite`,
              transformOrigin: "200px 200px",
            }}
          />
        ))}
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.15 195)" />
            <stop offset="100%" stopColor="oklch(0.70 0.22 340)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_oklch(1_0_0_/_0.06)_1px,_transparent_0)] bg-[size:32px_32px]" />
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <Section id="about" eyebrow="About" title="A builder's mindset — in the lab and beyond.">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ember/40 via-pulse/30 to-signal/30 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src={rotary.url} alt="Alan receiving recognition at a Rotary event" className="aspect-[4/5] w-full object-cover" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm a dynamic <span className="text-foreground font-medium">Hardware Validation Engineer</span> and
            multi-disciplinary creator who thrives at the intersection of rigorous technical engineering and
            impactful community leadership. With a foundation in Electrical and Electronics Engineering, I've
            spent the last four years specialized in <span className="text-foreground font-medium">WLAN and Wi-Fi
            hardware validation</span> — ensuring the seamless connectivity of next-generation wireless tech.
          </p>
          <p>
            Beyond the engineering lab, I'm driven by a passion for building platforms that empower others —
            from founding internationally recognized peer-to-peer learning networks to spearheading structural
            educational initiatives.
          </p>
          <p>
            Whether I'm diagnosing complex RF environments, designing curriculum for cutting-edge technology
            sectors, or crafting digital media, I bring a unique blend of analytical precision and creative
            problem-solving to everything I do.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- EXPERTISE ---------- */
function Expertise() {
  const cards = [
    {
      icon: Radio,
      tone: "signal" as const,
      title: "Wireless Engineering",
      lead: "4+ years in WLAN Software & QA",
      points: [
        "Hardware validation, client roaming, multi-chip test setups",
        "802.11 standards, packet sniffer diagnostics, RF environment tuning",
        "Validation cycles at semiconductor & wireless leaders incl. Synaptics",
      ],
    },
    {
      icon: GraduationCap,
      tone: "warm" as const,
      title: "Leadership & Education",
      lead: "Builder of learning ecosystems",
      points: [
        "Founder, TinkerHub MEC — UN Academic Impact Millennium Fellowship",
        "Industry-aligned curriculum, syllabus architecture & textbooks",
        "B.Tech, Electrical & Electronics Engineering",
      ],
    },
  ];

  return (
    <Section id="expertise" eyebrow="Expertise" title="Two practices, one mindset.">
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8"
          >
            <div
              className={`absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl opacity-40 transition group-hover:opacity-70 ${
                c.tone === "signal" ? "bg-signal" : "bg-ember"
              }`}
            />
            <div className="relative">
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                  c.tone === "signal"
                    ? "bg-signal/15 text-signal"
                    : "bg-ember/15 text-ember"
                }`}
              >
                <c.icon size={22} />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.lead}</p>
              <ul className="mt-6 space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground/85">
                    <Award size={16} className={c.tone === "signal" ? "mt-0.5 text-signal shrink-0" : "mt-0.5 text-ember shrink-0"} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    {
      icon: Wifi,
      tag: "🛠️ Engineering",
      title: "WLAN & Hardware Validation Consulting",
      copy: "Specialized engineering consulting for wireless networking hardware.",
      items: [
        "Wi-Fi / WLAN client roaming optimization & testing",
        "Test setup architecture & packet-level diagnostics",
        "QA strategy, test case execution & test environment design",
      ],
    },
    {
      icon: BookOpen,
      tag: "📚 Academia",
      title: "Technical Curriculum Design",
      copy: "Partnering with institutes & corporate training bodies to design high-impact programs.",
      items: [
        "Textbooks, Prezi presentations, multi-month lesson plans",
        "End-to-end syllabi bridging classroom to industry internships",
        "Emerging tech specializations & hands-on lab frameworks",
      ],
    },
    {
      icon: Users,
      tag: "👥 Community",
      title: "Peer Learning Systems & Community Building",
      copy: "Consulting for colleges, incubators, and orgs cultivating internal talent.",
      items: [
        "Blueprints for peer-to-peer learning ecosystems (TinkerHub model)",
        "Mentoring student leaders on community building",
        "Project-based growth strategies for collaborative tech environments",
      ],
    },
  ];

  return (
    <Section id="services" eyebrow="Services" title="What I'm offering right now.">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col rounded-3xl border border-border bg-surface p-7 transition hover:border-signal/50 hover:bg-surface-elevated"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-signal/20 to-pulse/20 text-foreground">
                <s.icon size={20} />
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.tag}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold leading-snug">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-pulse" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- MOMENTS ---------- */
function Moments() {
  const items = [
    { src: community.url, caption: "TinkerHub community — building together." },
    { src: gym.url, caption: "Discipline off the clock." },
    { src: rotary.url, caption: "Recognized for community leadership." },
  ];
  return (
    <Section id="moments" eyebrow="Off-screen" title="A few moments.">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card"
          >
            <img
              src={it.src}
              alt={it.caption}
              className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-5 text-sm">
              {it.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: LINKEDIN },
    { icon: Instagram, label: "Instagram", href: INSTAGRAM },
    { icon: ExternalLink, label: "TinkerHub", href: TINKERHUB },
  ];
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-border p-10 md:p-16"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-signal/25 via-pulse/20 to-ember/25" />
        <div className="absolute inset-0 -z-10 bg-background/40" />
        <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-pulse/30 blur-3xl" />

        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Get in touch</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold md:text-6xl">
          Have a wireless problem, a curriculum to build, or a community to grow?
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          I take on a small number of consulting engagements at a time. Send a note and let's see if we're a fit.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 font-medium text-background shadow-[var(--shadow-glow-pulse)] transition hover:scale-[1.02]"
          >
            <Mail size={18} /> {EMAIL}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-4 text-sm font-medium backdrop-blur transition hover:bg-surface-elevated"
            >
              <s.icon size={16} /> {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Alan Sebastian George.</span>
        <span className="font-display tracking-wide">Engineering · Education · Community.</span>
      </div>
    </footer>
  );
}

/* ---------- Section wrapper ---------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mb-12 max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] md:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
