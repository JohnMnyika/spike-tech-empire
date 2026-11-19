"use client";

import { useEffect, useState } from "react";
import { Activity, ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, Cloud, Code2, Gauge, HeartPulse, Layers3, Menu, Network, ShieldCheck, Smartphone, Sparkles, Video, X, Zap } from "lucide-react";

const services = [
  { icon: Code2, number: "01", title: "Software development", text: "Production-ready products engineered for the way your business actually works.", tags: ["Next.js & React", "Node.js & Python", "Scalable APIs"] },
  { icon: Cloud, number: "02", title: "Cloud & DevOps", text: "Cloud foundations that make shipping faster, scaling safer, and costs predictable.", tags: ["AWS & GCP", "Docker & Kubernetes", "CI / CD"] },
  { icon: Activity, number: "03", title: "Technical support", text: "Senior engineers in your corner, keeping critical systems reliable around the clock.", tags: ["24/7 monitoring", "Fast patching", "SLA-backed"] },
  { icon: Network, number: "04", title: "Secure infrastructure", text: "A hardened network perimeter built for distributed teams and sensitive data.", tags: ["Zero trust", "VPN & networking", "Access control"] },
  { icon: Gauge, number: "05", title: "Performance", text: "Find the bottleneck, fix the right thing, and make every interaction feel instant.", tags: ["Core Web Vitals", "Database tuning", "Load testing"] },
  { icon: ShieldCheck, number: "06", title: "Security & compliance", text: "Reduce risk and prepare your product for the standards your customers expect.", tags: ["Security reviews", "SOC 2 readiness", "HIPAA readiness"] },
];

const projects = [
  { name: "Commerce, reimagined.", client: "NORTHSTAR COMMERCE", category: "Web apps", metric: "3.2×", result: "faster checkout", tech: ["Next.js", "Postgres", "Stripe"], style: "commerce" },
  { name: "Banking without borders.", client: "MILESTONE FINANCIAL", category: "Mobile", metric: "99.99%", result: "platform uptime", tech: ["React Native", "Firebase", "GCP"], style: "banking" },
  { name: "See the whole picture.", client: "ATLAS INTELLIGENCE", category: "Fintech & data", metric: "Real-time", result: "data streaming", tech: ["D3.js", "Python", "FastAPI"], style: "analytics" },
  { name: "Care, connected.", client: "WELLSPRING HEALTH", category: "Web apps", metric: "Zero", result: "audit findings", tech: ["AWS", "HIPAA-ready", "Next.js"], style: "health" },
];

const CALENDLY_URL = "https://calendly.com/hello-spiketech/product-architecture-call";

function Brand() {
  return <a href="#top" className="brand" aria-label="Spike Tech Empire home"><span className="brand-mark"><Zap size={19} fill="currentColor" /></span><span>SPIKE<span className="brand-light">TECH</span><small>PRODUCT ENGINEERING</small></span></a>;
}

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const filters = ["All work", "Web apps", "Mobile", "Fintech & data"];
  const shown = projects.filter((project) => filter === "All work" || project.category === filter);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".metrics-inner, .services-section .section-heading, .service-card, .work-heading, .filter-row, .project-card, .trust-copy, .testimonial-panel, .contact-card",
    );
    revealTargets.forEach((target) => target.classList.add("scroll-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = ["services", "work", "trust", "founder", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            const current = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (current) setActiveSection(current.target.id);
          },
          { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.25, 0.5] },
        )
      : null;
    sections.forEach((section) => observer?.observe(section));

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        document.documentElement.style.setProperty("--page-progress", `${Math.min(progress, 1) * 100}%`);
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main id="top" className="site-shell">
      <header className="nav-wrap"><div className="reading-progress" aria-hidden="true" /><nav className="top-nav"><Brand /><button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><div className={`nav-links ${menuOpen ? "nav-open" : ""}`}><a className={activeSection === "services" ? "active" : ""} aria-current={activeSection === "services" ? "location" : undefined} href="#services" onClick={() => setMenuOpen(false)}>Services</a><a className={activeSection === "work" ? "active" : ""} aria-current={activeSection === "work" ? "location" : undefined} href="#work" onClick={() => setMenuOpen(false)}>Case studies</a><a className={activeSection === "trust" ? "active" : ""} aria-current={activeSection === "trust" ? "location" : undefined} href="#trust" onClick={() => setMenuOpen(false)}>Why Spike</a><a className={activeSection === "founder" ? "active" : ""} aria-current={activeSection === "founder" ? "location" : undefined} href="#founder" onClick={() => setMenuOpen(false)}>Founder</a><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a></div></nav></header>

      <section className="hero section-wrap"><div className="hero-copy"><div className="eyebrow"><span className="live-dot" /> SENIOR ENGINEERING PARTNER <span className="eyebrow-sep">/</span> NOW BOOKING Q2 SPRINTS</div><h1>Make your next big idea <span className="gradient-ink">production-ready.</span></h1><p className="hero-lede">Senior product engineering for founders moving fast. We design, build, and scale the software your business needs to get ahead.</p><div className="hero-actions"><a className="button button-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">Book an architecture call <ArrowRight size={16} /></a><a className="button button-quiet" href="#work">Explore our work <ArrowDownRight size={16} /></a></div><div className="hero-proof"><div className="proof-avatars"><span>JM</span><span>AK</span><span>+8</span></div><div><strong>Senior engineers. Direct access.</strong><small>Built in Nairobi. Trusted everywhere.</small></div><div className="proof-divider" /><div className="proof-stars"><span>★★★★★</span><small>CLIENT-LED, FOUNDER-OWNED</small></div></div></div>

        <div className="command-wrap"><div className="command-glow" /><div className="command-card"><div className="command-head"><div><span className="tiny-label">SPIKE / DELIVERY OS</span><h3>Command center</h3></div><span className="live-pill"><i /> LIVE</span></div><div className="command-project"><div className="project-icon"><Layers3 size={17} /></div><div><span className="tiny-label">ACTIVE SPRINT · 04</span><strong>Client portal &amp; automation</strong></div><span className="project-menu">···</span></div><div className="progress-caption"><span>Sprint progress</span><strong>84%</strong></div><div className="progress-track"><span /></div><div className="command-stats"><div className="mini-stat"><span className="tiny-label">UPTIME</span><strong>99.98<small>%</small></strong><span className="stat-trend"><ArrowUpRight size={12} /> 0.04%</span></div><div className="mini-stat"><span className="tiny-label">P95 LATENCY</span><strong>126<small>ms</small></strong><span className="latency-wave"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span></div></div><div className="activity-line"><span className="activity-icon"><Check size={13} /></span><span><strong>Deployment successful</strong><small>Production · just now</small></span><ArrowUpRight size={14} className="muted-arrow" /></div><div className="command-foot"><span><i className="live-dot" /> ALL SYSTEMS OPERATIONAL</span><span>SYNCED 00:04 AGO</span></div></div><div className="floating-note note-top"><span className="note-spark"><Sparkles size={14} /></span><span><strong>Build velocity</strong><small>Up 28% this sprint</small></span><ArrowUpRight size={15} /></div><div className="floating-note note-bottom"><span className="note-check"><Check size={15} /></span><span><strong>Ship with confidence</strong><small>Every detail, accounted for.</small></span></div><div className="hero-index">01 <span>—</span> ENGINEERED TO SHIP</div></div>

        <div className="hero-bottom"><span>GOOD PRODUCTS. BUILT RIGHT.</span><div /><span>PRODUCT ENGINEERING · CLOUD · SECURITY</span><span className="hero-scroll">SCROLL TO EXPLORE <ChevronDown size={13} /></span></div></section>

      <section className="metrics-strip"><div className="metrics-inner"><div className="metrics-intro"><span className="tiny-label">THE SPIKE STANDARD</span><strong>Engineering that<br />moves the needle.</strong></div><div className="metric"><strong>50<span>+</span></strong><small>PRODUCTS SHIPPED</small></div><div className="metric"><strong>99.9<span>%</span></strong><small>UPTIME TARGET</small></div><div className="metric"><strong>2<span>h</span></strong><small>URGENT RESPONSE</small></div><div className="metric"><strong>4.9<span>/5</span></strong><small>CLIENT SATISFACTION</small></div></div></section>

      <section className="services-section section-wrap" id="services"><div className="section-heading"><div><span className="section-kicker"><span>01</span> WHAT WE DO</span><h2>Everything you need<br />to <span className="gradient-ink">ship with confidence.</span></h2></div><div className="section-aside"><p>One senior team from first architecture decision to your next thousand users.</p><a href="#contact" className="text-link">Explore our capabilities <ArrowRight size={15} /></a></div></div><div className="services-grid">{services.map(({ icon: Icon, number, title, text, tags }) => <article className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon size={19} /></span><span className="service-number">{number} / 06</span></div><h3>{title}</h3><p>{text}</p><div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="service-link">Explore capabilities <ArrowUpRight size={14} /></a></article>)}</div></section>

      <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading work-heading"><div><span className="section-kicker"><span>02</span> SELECTED WORK</span><h2>Real work. <span className="gradient-ink">Real outcomes.</span></h2></div><p>We measure success by what changes for your business after launch.</p></div><div className="filter-row">{filters.map(item => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}<span>{item === "All work" ? "04" : String(projects.filter(project => project.category === item).length).padStart(2, "0")}</span></button>)}<span className="work-count">01 — 04 / CASE FILES</span></div><div className="projects-grid">{shown.map((project, index) => <article className="project-card" key={project.name}><div className={`project-art art-${project.style}`}><div className="art-window"><div className="window-bar"><span /><span /><span /><small>{project.client.toLowerCase().replaceAll(" ", "-")}.app</small><ArrowUpRight size={13} /></div>{project.style === "commerce" && <div className="commerce-ui"><div className="commerce-nav"><b>northstar.</b><span>New arrivals　 Shop　 About</span><span>⌕　 BAG (2)</span></div><div className="commerce-body"><div><small>SPRING / SUMMER 2025</small><b>Everyday,<br />elevated.</b><i>Thoughtfully made essentials. Designed to go everywhere.</i><button>DISCOVER THE COLLECTION ↗</button></div><div className="fashion-shape"><span>01 / 04</span></div></div></div>}{project.style === "banking" && <div className="banking-ui"><div className="bank-top"><span>◈ MILESTONE</span><span>•••</span></div><small>YOUR TOTAL BALANCE</small><strong>$24,680<span>.50</span></strong><div className="bank-change">↗ 12.8% <span>this month</span></div><div className="bank-bars">{[28, 42, 35, 58, 46, 74, 54, 89, 65, 100, 72, 84].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="bank-labels"><span>01 MAY</span><span>30 MAY</span></div></div>}{project.style === "analytics" && <div className="analytics-ui"><div className="analytics-nav"><span>ATLAS <i>INTELLIGENCE</i></span><span>OVERVIEW　 STREAMS　 REPORTS</span><span>● LIVE</span></div><small>GLOBAL TRANSACTION VOLUME</small><strong>$8,426,912 <i>+ 18.4%</i></strong><div className="chart-grid"><svg viewBox="0 0 540 130" preserveAspectRatio="none"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#00d4ff" stopOpacity=".27" /><stop offset="100%" stopColor="#00d4ff" stopOpacity="0" /></linearGradient></defs><path d="M0 100 C28 95 32 67 64 76 S100 109 135 80 S178 85 205 56 S244 78 276 57 S320 69 347 39 S392 63 414 43 S454 53 480 21 S513 43 540 8 V130 H0Z" fill="url(#chartFill)" /><path d="M0 100 C28 95 32 67 64 76 S100 109 135 80 S178 85 205 56 S244 78 276 57 S320 69 347 39 S392 63 414 43 S454 53 480 21 S513 43 540 8" fill="none" stroke="#00d4ff" strokeWidth="2" /></svg></div></div>}{project.style === "health" && <div className="health-ui"><div className="health-side"><b>W.</b><span>▦</span><span>◷</span><span>♙</span><span>⚙</span></div><div className="health-main"><div className="health-title"><span><small>WELLSPRING / PATIENTS</small><b>Good morning, Sarah</b></span><span className="health-profile">SJ</span></div><div className="health-welcome"><small>YOUR CARE, ALL IN ONE PLACE</small><strong>Wellness starts<br />with knowing.</strong><span>Appointments, records, and your care team.</span><button>VIEW YOUR CARE PLAN　↗</button></div><div className="health-cards"><span>UPCOMING VISIT<b>Dr. Mitchell · Jun 12</b></span><span>YOUR HEALTH SCORE<b>Excellent　98/100</b></span></div></div></div>}</div><div className="art-caption"><span>0{index + 1} <i>—</i> {project.client}</span><ArrowUpRight size={15} /></div></div><div className="project-info"><div><h3>{project.name}</h3><div className="tech-list">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-result"><strong>{project.metric}</strong><span>{project.result}</span></div></div></article>)}</div><div className="work-bottom"><span>BUILT WITH AMBITION. SHIPPED WITH PRECISION.</span><a href="#contact">Have a big idea? <ArrowRight size={15} /></a></div></div></section>

      <section className="trust-section section-wrap" id="trust"><div className="trust-copy"><span className="section-kicker"><span>03</span> THE WAY WE WORK</span><h2>Senior thinking.<br /><span className="gradient-ink">Skin in the game.</span></h2><p>We keep the team small and the standards high. You get a direct line to the people making the decisions, doing the work, and accountable for what ships.</p><div className="trust-points"><div><span><Check size={15} /></span><p><b>One team, start to finish</b><small>No handoffs, layers, or lost context.</small></p></div><div><span><Check size={15} /></span><p><b>Clear progress, every week</b><small>Visible work and honest conversations.</small></p></div><div><span><Check size={15} /></span><p><b>Quality built in from day one</b><small>Strong foundations, not quick fixes.</small></p></div></div><a href="#contact" className="text-link">What working together looks like <ArrowRight size={15} /></a></div><div className="testimonial-panel" id="founder"><div className="testimonial-noise" /><div className="founder-top"><div className="founder-avatar"><img src="/pro.png" alt="John Mnyika, founder of Spike Tech Empire" /><i><Check size={11} /></i></div><div><span className="tiny-label">A NOTE FROM OUR FOUNDER</span><strong>John Mnyika <span>· Founder, Spike Tech</span></strong></div><span className="founder-mark"><Zap size={21} /></span></div><div className="quote-mark">“</div><blockquote>Good engineering should make ambitious things feel possible. We bring founder-level ownership to every product we touch.</blockquote><div className="founder-sign"><span className="signature">John Mnyika</span><span>BUILT ON TRUST · NAIROBI, KE</span></div><div className="testimonial-divider" /><div className="client-quote"><div className="client-head"><div className="client-avatar">JM</div><div><strong>John Mutua</strong><small>CEO, TechStart Kenya <span className="verified"><Check size={9} /> VERIFIED CLIENT</span></small></div><div className="rating">★★★★★<small>5.0 / 5</small></div></div><p>“The team felt like our own from the first sprint. They delivered a solid product, kept us in the loop, and really understood where we were trying to go.”</p></div><div className="review-foot"><span><HeartPulse size={13} /> BUILT TO LAST. BUILT TOGETHER.</span><span>CLIENT STORY / 001</span></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-card"><div className="contact-orb orb-one" /><div className="contact-orb orb-two" /><div className="contact-content"><span className="section-kicker"><span>04</span> YOUR NEXT MOVE</span><h2>Bring us the problem.<br /><span className="gradient-ink">Let&apos;s build what&apos;s next.</span></h2><p>Tell us what you&apos;re working on. We&apos;ll bring honest advice, senior minds, and a clear first step.</p><div className="contact-actions"><a className="button button-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer"><CalendarDays size={16} /> Book a 30-minute call <ArrowUpRight size={14} /></a><a className="button button-quiet" href="https://wa.me/254700878430" target="_blank" rel="noreferrer"><Smartphone size={16} /> Chat on WhatsApp <ArrowRight size={15} /></a></div><div className="contact-details"><a href="mailto:hellospiketech@gmail.com"><span>@</span> hellospiketech@gmail.com</a><a href="tel:+254700878430"><span>↗</span> +254 700 878 430</a><span><span>⌖</span> Nairobi, Kenya</span></div></div><div className="contact-side booking-summary"><div className="contact-side-top"><span className="live-dot" /> YOUR FIRST CONVERSATION</div><span className="booking-summary-icon"><CalendarDays size={23} /></span><div className="booking-summary-copy"><strong>Product architecture call</strong><p>A focused conversation about your idea, technical questions, and a practical next step.</p></div><div className="booking-details"><span><Clock3 size={14} /> 30 minutes</span><span><Video size={14} /> Google Meet link after booking</span></div><span className="contact-code">HOSTED BY SPIKE TECH EMPIRE · NAIROBI</span></div></div></section>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><Brand /><p>We help ambitious teams turn complex ideas into software that moves business forward.</p><span className="footer-location"><span className="live-dot" /> NAIROBI, KENYA <i>·</i> WORKING EVERYWHERE</span></div><div className="footer-links"><div><span>EXPLORE</span><a href="#services">Services</a><a href="#work">Selected work</a><a href="#trust">Our approach</a></div><div><span>GET IN TOUCH</span><a href="mailto:hellospiketech@gmail.com">Email us <ArrowUpRight size={12} /></a><a href="https://wa.me/254700878430">WhatsApp <ArrowUpRight size={12} /></a><a href={CALENDLY_URL} target="_blank" rel="noreferrer">Book a call <ArrowUpRight size={12} /></a></div></div></div><div className="footer-bottom"><span>© 2025 SPIKE TECH EMPIRE. BUILT WITH INTENT.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
