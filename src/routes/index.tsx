import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Search, CalendarCheck, Siren, Video, HeartPulse, Brain, Bone, Baby,
  Ribbon, Stethoscope, Eye, Activity, Microscope, Ambulance, Pill, BedDouble, FlaskConical,
  Play, ArrowRight, Clock, Facebook, Youtube, Linkedin, Instagram, Menu, X, ShieldCheck, Award, Users, Star,
} from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.jpg";
import doctors from "@/assets/doctors.jpg";
import care from "@/assets/care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "South Apollo Hospital, Barishal | Trusted Multispecialty Care" },
      { name: "description", content: "24/7 emergency, expert specialists, health packages and modern care at South Apollo Hospital, Barishal, Bangladesh." },
      { property: "og:title", content: "South Apollo Hospital, Barishal" },
      { property: "og:description", content: "Expert doctors, 24/7 emergency and modern healthcare in Barishal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Find a Doctor", "Specialties", "Packages", "News", "About Us", "Contact"];
const navIds = ["doctors", "specialties", "packages", "news", "about", "contact"];

const quick = [
  { icon: Search, label: "Find a Doctor", href: "#doctors" },
  { icon: CalendarCheck, label: "Book Appointment", href: "#doctors" },
  { icon: Siren, label: "Emergency 24/7", href: "tel:10678", red: true },
  { icon: Video, label: "Telemedicine", href: "#contact" },
  { icon: HeartPulse, label: "Health Checkup", href: "#packages" },
];

const specialties = [
  { icon: HeartPulse, name: "Cardiology" }, { icon: Brain, name: "Neurology" },
  { icon: Bone, name: "Orthopedics" }, { icon: Baby, name: "Pediatrics" },
  { icon: Ribbon, name: "Oncology" }, { icon: Stethoscope, name: "Gynecology" },
  { icon: Eye, name: "Ophthalmology" }, { icon: Activity, name: "Nephrology" },
];

const services = [
  { icon: Ambulance, t: "24/7 Emergency & Ambulance", d: "Rapid response team and fully equipped ambulances across Barishal." },
  { icon: BedDouble, t: "ICU, CCU & NICU", d: "Critical care units with round-the-clock intensivist monitoring." },
  { icon: FlaskConical, t: "Diagnostics & Lab", d: "Accurate pathology, imaging, CT and MRI with quick reports." },
  { icon: Pill, t: "In-house Pharmacy", d: "Genuine medicines available 24 hours a day." },
];

const packages = [
  { name: "Basic Health Check", price: "2,500", items: ["CBC & Blood Sugar", "Lipid Profile", "ECG", "Doctor Consultation"] },
  { name: "Executive Checkup", price: "6,500", items: ["Basic + Liver & Kidney", "Chest X-Ray", "Ultrasound Abdomen", "Cardiologist Review"], featured: true },
  { name: "Women's Wellness", price: "5,000", items: ["Hormone Panel", "Pap Smear", "Breast Ultrasound", "Gynecologist Review"] },
];

const docs = [
  { name: "Dr. Rafiul Islam", sp: "Internal Medicine", q: "MBBS, MD (Medicine)", pos: "0%" },
  { name: "Dr. Nusrat Jahan", sp: "Obstetrics & Gynecology", q: "MBBS, FCPS (Gynae)", pos: "50%" },
  { name: "Dr. Asif Mahmud", sp: "Cardiology", q: "MBBS, FCPS (Cardiology)", pos: "100%" },
];

const stories = [
  { n: "Rahima Begum", t: "Heart bypass recovery", q: "The cardiology team gave my father a second life." },
  { n: "Kamal Hossain", t: "Knee replacement", q: "I walk without pain now. Truly world-class care." },
  { n: "Sharmin Akter", t: "Safe delivery", q: "Caring nurses and doctors from day one to discharge." },
];

const news = [
  { tag: "Event", date: "Oct 18, 2026", t: "Free cardiac screening camp held for 500+ residents of Barishal" },
  { tag: "Press", date: "Oct 05, 2026", t: "South Apollo launches advanced 1.5T MRI imaging centre" },
  { tag: "News", date: "Sep 22, 2026", t: "New 20-bed NICU opens to support newborn care in the south" },
];

const blog = [
  { t: "5 early signs of heart disease you shouldn't ignore", c: "Cardiology" },
  { t: "Managing diabetes during the monsoon season", c: "Endocrinology" },
  { t: "Dengue: prevention, symptoms and when to see a doctor", c: "Medicine" },
];

const partners = ["MetLife", "Green Delta", "Pragati Life", "Guardian Life", "Delta Life", "bKash", "BRAC Bank", "Grameenphone"];

function SectionHead({ k, t, d }: { k: string; t: string; d?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-sm font-bold tracking-widest text-accent uppercase">{k}</span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">{t}</h2>
      {d && <p className="mt-3 text-muted-foreground">{d}</p>}
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<"EN" | "BN">("EN");
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <div className="flex min-w-0 items-center gap-4">
            <a href="tel:10678" className="flex items-center gap-1.5 font-semibold"><Phone className="h-3.5 w-3.5 shrink-0 text-accent" /> Emergency: 10678</a>
            <span className="hidden items-center gap-1.5 md:flex"><Phone className="h-3.5 w-3.5" /> +880 1700-000000</span>
            <span className="hidden items-center gap-1.5 sm:flex"><MapPin className="h-3.5 w-3.5" /> Barishal, Bangladesh</span>
          </div>
          <div className="flex shrink-0 overflow-hidden rounded-full border border-navy-foreground/20">
            {(["EN", "BN"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-0.5 font-semibold transition ${lang === l ? "bg-primary text-primary-foreground" : ""}`}>{l === "BN" ? "বাং" : l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#" className="shrink-0"><img src={logo.url} alt="South Apollo Hospital" className="h-11 w-auto" /></a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n, i) => <a key={n} href={`#${navIds[i]}`} className="text-sm font-semibold text-foreground/80 transition hover:text-primary">{n}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#doctors" className="hidden rounded-full bg-gradient-cta px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-card transition hover:scale-105 sm:inline-flex">Book Appointment</a>
            <button onClick={() => setOpen(!open)} className="rounded-lg p-2 lg:hidden" aria-label="Menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border px-4 py-3 lg:hidden">
            {nav.map((n, i) => <a key={n} onClick={() => setOpen(false)} href={`#${navIds[i]}`} className="block py-2 font-semibold">{n}</a>)}
            <a href="#doctors" className="mt-2 block rounded-full bg-gradient-cta py-2.5 text-center font-bold text-accent-foreground">Book Appointment</a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[560px] overflow-hidden md:h-[620px]">
          <img src={hero} alt="South Apollo Hospital building" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
            <div className="max-w-xl animate-rise text-navy-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold tracking-wide text-accent-foreground uppercase">
                <ShieldCheck className="h-4 w-4" /> Trusted care in South Bengal
              </span>
              <h1 className="mt-5 text-4xl leading-tight font-extrabold md:text-6xl">
                {lang === "EN" ? <>World-class healthcare, <span className="text-primary">right here in Barishal.</span></> : <>বরিশালেই <span className="text-primary">বিশ্বমানের চিকিৎসা</span></>}
              </h1>
              <p className="mt-5 text-lg opacity-90">Expert specialists, advanced technology and compassionate care — available 24 hours a day, 7 days a week.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#doctors" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-bold text-primary-foreground shadow-float transition hover:scale-105">Find a Doctor <ArrowRight className="h-4 w-4" /></a>
                <a href="tel:10678" className="inline-flex items-center gap-2 rounded-full border-2 border-navy-foreground/40 px-6 py-3 font-bold transition hover:bg-navy-foreground/10"><Siren className="h-4 w-4" /> Emergency</a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-3 rounded-3xl bg-card p-3 shadow-float sm:grid-cols-3 lg:grid-cols-5">
            {quick.map((q) => (
              <a key={q.label} href={q.href} className={`group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition hover:-translate-y-1 ${q.red ? "bg-accent text-accent-foreground" : "hover:bg-primary-soft"}`}>
                <span className={`grid h-12 w-12 place-items-center rounded-xl transition ${q.red ? "bg-accent-foreground/15" : "bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`}><q.icon className="h-6 w-6" /></span>
                <span className="text-sm font-bold">{q.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <div className="relative">
          <img src={care} alt="Doctor with patient family" loading="lazy" width={1200} height={912} className="rounded-3xl object-cover shadow-float" />
          <div className="absolute -right-2 -bottom-6 rounded-2xl bg-gradient-brand p-5 text-primary-foreground shadow-float sm:-right-6">
            <div className="text-3xl font-extrabold">15+</div><div className="text-sm opacity-90">Years of trusted care</div>
          </div>
        </div>
        <div>
          <span className="text-sm font-bold tracking-widest text-accent uppercase">Why choose us</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Better care, closer to home</h2>
          <p className="mt-4 text-muted-foreground">South Apollo Hospital, Barishal brings advanced multispecialty medicine to southern Bangladesh — so families no longer need to travel to Dhaka for quality treatment.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[[Users, "150+", "Specialist doctors"], [BedDouble, "300", "Beds"], [Award, "40+", "Departments"], [Star, "1M+", "Patients served"]].map(([I, n, l]) => {
              const Icon = I as typeof Users;
              return (
                <div key={l as string} className="rounded-2xl border border-border bg-secondary p-5">
                  <Icon className="h-6 w-6 text-primary" />
                  <div className="mt-2 text-2xl font-extrabold">{n as string}</div>
                  <div className="text-sm text-muted-foreground">{l as string}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead k="Centres of excellence" t="Our Specialties" d="Comprehensive departments led by experienced consultants." />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {specialties.map((s) => (
              <a key={s.name} href="#doctors" className="group rounded-2xl bg-card p-6 shadow-card transition hover:-translate-y-1 hover:bg-gradient-brand">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground"><s.icon className="h-7 w-7" /></span>
                <h3 className="mt-5 font-bold transition group-hover:text-primary-foreground">{s.name}</h3>
                <span className="mt-1 flex items-center gap-1 text-sm text-muted-foreground transition group-hover:text-primary-foreground/80">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHead k="Key services" t="Care navigation made simple" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border p-6 transition hover:border-primary hover:shadow-card">
              <s.icon className="h-9 w-9 text-accent" />
              <h3 className="mt-4 font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead k="Health screening" t="Health Check Packages" d="Prevention is the best medicine. Choose a package that suits you." />
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`relative rounded-3xl p-8 shadow-card ${p.featured ? "bg-navy text-navy-foreground md:-translate-y-4" : "bg-card"}`}>
                {p.featured && <span className="absolute top-6 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Popular</span>}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1"><span className="text-4xl font-extrabold">৳{p.price}</span></div>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.items.map((i) => <li key={i} className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-primary" /> {i}</li>)}
                </ul>
                <a href="#contact" className={`mt-8 block rounded-full py-3 text-center font-bold transition hover:scale-[1.02] ${p.featured ? "bg-gradient-cta text-accent-foreground" : "bg-gradient-brand text-primary-foreground"}`}>Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="mx-auto max-w-7xl px-4 py-24">
        <SectionHead k="Meet the experts" t="Our Specialists" />
        <div className="grid gap-6 md:grid-cols-3">
          {docs.map((d) => (
            <div key={d.name} className="overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-1">
              <div className="aspect-[4/3.6] bg-muted" style={{ backgroundImage: `url(${doctors})`, backgroundSize: "300% auto", backgroundPosition: `${d.pos} 10%` }} role="img" aria-label={d.name} />
              <div className="p-6">
                <span className="text-xs font-bold tracking-wide text-primary uppercase">{d.sp}</span>
                <h3 className="mt-1 text-xl font-bold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.q}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-5 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"><CalendarCheck className="h-4 w-4" /> Appointment</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="bg-navy py-24 text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold tracking-widest text-accent uppercase">Patient stories</span>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Real people. Real recoveries.</h2>
          </div>
          <div className="flex snap-x gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {stories.map((s, i) => (
              <div key={s.n} className="min-w-[280px] snap-start overflow-hidden rounded-3xl bg-navy-foreground/5 ring-1 ring-navy-foreground/10">
                <div className="relative aspect-video" style={{ backgroundImage: `url(${i === 1 ? care : hero})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  <div className="absolute inset-0 bg-navy/50" />
                  <button aria-label="Play story" className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-float transition hover:scale-110"><Play className="h-6 w-6 fill-current" /></button>
                </div>
                <div className="p-6">
                  <p className="italic opacity-90">“{s.q}”</p>
                  <p className="mt-4 font-bold">{s.n}</p><p className="text-sm text-primary">{s.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="mx-auto max-w-7xl px-4 py-24">
        <SectionHead k="Press & events" t="News & Events" />
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((n) => (
            <article key={n.t} className="group rounded-3xl border border-border p-6 transition hover:shadow-card">
              <div className="flex items-center justify-between text-xs"><span className="rounded-full bg-accent-soft px-3 py-1 font-bold text-accent">{n.tag}</span><span className="text-muted-foreground">{n.date}</span></div>
              <h3 className="mt-5 text-lg leading-snug font-bold group-hover:text-primary">{n.t}</h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-4 w-4" /></span>
            </article>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead k="Health blog" t="Tips for a healthier life" />
          <div className="grid gap-6 md:grid-cols-3">
            {blog.map((b, i) => (
              <article key={b.t} className="overflow-hidden rounded-3xl bg-card shadow-card">
                <div className={`grid h-40 place-items-center ${i === 1 ? "bg-gradient-cta" : "bg-gradient-brand"}`}>
                  <Microscope className="h-14 w-14 text-primary-foreground/80" />
                </div>
                <div className="p-6"><span className="text-xs font-bold text-primary uppercase">{b.c}</span><h3 className="mt-2 font-bold">{b.t}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="overflow-hidden border-y border-border py-12">
        <p className="mb-6 text-center text-sm font-bold tracking-widest text-muted-foreground uppercase">Insurance & corporate partners</p>
        <div className="flex w-max animate-marquee gap-6">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="rounded-2xl border border-border bg-card px-8 py-4 text-lg font-extrabold whitespace-nowrap text-muted-foreground">{p}</span>
          ))}
        </div>
      </section>

      {/* Location */}
      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-4 py-24 lg:grid-cols-3">
        <div className="rounded-3xl bg-gradient-brand p-8 text-primary-foreground">
          <h2 className="text-3xl font-extrabold">Visit us</h2>
          <p className="mt-4 flex gap-3"><MapPin className="h-5 w-5 shrink-0" /> Band Road, Barishal Sadar, Barishal 8200, Bangladesh</p>
          <p className="mt-3 flex gap-3"><Phone className="h-5 w-5 shrink-0" /> 10678 · +880 1700-000000</p>
          <p className="mt-3 flex gap-3"><Clock className="h-5 w-5 shrink-0" /> Emergency 24/7 · OPD 8am–10pm</p>
          <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&destination=Barishal+Bangladesh" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 font-bold text-primary">Get directions <ArrowRight className="h-4 w-4" /></a>
        </div>
        <iframe title="Map" className="h-96 w-full rounded-3xl border-0 shadow-card lg:col-span-2 lg:h-full" loading="lazy" src="https://www.google.com/maps?q=Barishal,Bangladesh&output=embed" />
      </section>

      {/* Footer */}
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
          <div>
            <div className="inline-block rounded-xl bg-background p-3"><img src={logo.url} alt="South Apollo Hospital" className="h-10" /></div>
            <p className="mt-4 text-sm opacity-75">Band Road, Barishal Sadar, Barishal 8200, Bangladesh</p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Youtube, Linkedin, Instagram].map((I, i) => <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full bg-navy-foreground/10 transition hover:bg-primary"><I className="h-4 w-4" /></a>)}
            </div>
          </div>
          <div><h4 className="font-bold">Quick links</h4><ul className="mt-4 space-y-2 text-sm opacity-75">{nav.map((n, i) => <li key={n}><a href={`#${navIds[i]}`} className="hover:text-primary">{n}</a></li>)}</ul></div>
          <div><h4 className="font-bold">24/7 Hotline</h4><p className="mt-4 text-2xl font-extrabold text-accent">10678</p><p className="text-sm opacity-75">+880 1700-000000</p><p className="text-sm opacity-75">info@southapollo.com.bd</p></div>
          <div><h4 className="font-bold">Working hours</h4><ul className="mt-4 space-y-2 text-sm opacity-75"><li>Emergency: 24 hours</li><li>OPD: Sat–Thu, 8am–10pm</li><li>Friday: 3pm–10pm</li></ul></div>
        </div>
        <div className="border-t border-navy-foreground/10 py-5 text-center text-sm opacity-60">© {new Date().getFullYear()} South Apollo Hospital, Barishal. All rights reserved.</div>
      </footer>
    </div>
  );
}
