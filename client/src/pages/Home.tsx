/* Signal Noir: the page is a vertical editorial runway with asymmetric composition, signal lines, and strategic micro-labels. */
import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

const projects = [
  { name: "Coralogix", type: "Tech & SaaS", role: "Performance marketing / growth strategy / content strategy", note: "Making complex product value legible at the speed of the market.", tone: "lime" },
  { name: "Schell Brothers", type: "Real Estate", role: "Performance marketing / growth strategy / content strategy", note: "Creative systems for high-consideration property decisions.", tone: "stone" },
  { name: "Snake River Sporting Club", type: "Lifestyle", role: "Performance marketing / growth strategy / content strategy", note: "A luxury story built around trust, place, and belonging.", tone: "lime" },
  { name: "Neri Architects", type: "Real Estate", role: "Performance marketing / growth strategy / content strategy", note: "Turning architecture into an unmistakable point of view.", tone: "stone" },
  { name: "Taqwa Skyland", type: "Real Estate", role: "Media buying / funnel strategy / campaign planning", note: "A clearer path between attention, inquiry, and ownership.", tone: "lime" },
  { name: "NibiSoft", type: "Tech & SaaS", role: "Performance marketing / growth strategy / content strategy", note: "A sharper signal for software that solves real friction.", tone: "stone" },
  { name: "Swanson", type: "Health & Wellness", role: "Performance marketing / growth strategy / content strategy", note: "Building confidence where every claim carries weight.", tone: "lime" },
  { name: "Apple Gadget", type: "Retail & Commerce", role: "Paid performance marketing / brand strategy / content strategy", note: "Commerce creative that earns the next click.", tone: "stone" },
  { name: "ThreadXBD", type: "Fashion & Commerce", role: "Brand building / growth marketing / performance marketing", note: "From visual language to repeatable demand.", tone: "lime" },
];

const capabilities = ["Creative Strategy", "Growth Marketing", "Performance Marketing", "Media Buying", "Funnel Architecture", "Marketing Analytics", "Brand Systems", "Technology Thinking"];
const filters = ["All", "Tech & SaaS", "Real Estate", "Lifestyle", "Health & Wellness", "Retail & Commerce"];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.type === filter), [filter]);
  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <main className="site-shell">
      <div className="grain" aria-hidden="true" />
      <div className="progress-track" aria-hidden="true"><span style={{ height: `${progress}%` }} /></div>

      <header className="site-header">
        <button className="brand-lockup" onClick={() => jump("top")} aria-label="Back to top">
          <span className="brand-mark">S<span>/</span>T</span><span className="brand-name">SHARIF TAWHID</span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <button onClick={() => jump("work")}>Work <span>02</span></button>
          <button onClick={() => jump("about")}>About <span>03</span></button>
          <button onClick={() => jump("process")}>Process <span>04</span></button>
          <button className="nav-cta" onClick={() => jump("contact")}>Let’s talk <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-meta reveal"><span className="status-dot" /> Available for selected projects <span className="meta-year">/ 2026</span></div>
        <div className="hero-copy">
          <p className="eyebrow">Creative strategy / growth systems / technology</p>
          <h1><span>SHARIF</span><span className="indent">TAWHID</span></h1>
          <div className="hero-rule" />
          <div className="hero-bottom">
            <p className="hero-statement">I connect <em>creative intelligence</em> to the systems that make growth visible.</p>
            <button className="text-link" onClick={() => jump("work")}>Enter the work <ArrowDownRight size={18} /></button>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-signal" /><span className="hero-coordinate">23° 48' 01" N<br />90° 24' 41" E</span></div>
        <div className="hero-scroll"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="client-strip" aria-label="Selected client universe"><span>Selected across</span><div>{["Coralogix", "Schell Brothers", "Swanson", "Snake River SC", "TVG", "Neri Architects", "Clarity Homes"].map((client) => <strong key={client}>{client}</strong>)}</div></section>

      <section id="work" className="work-section section-pad">
        <div className="section-intro"><p className="section-index">02 / Selected work</p><h2>Strategy that<br /><em>moves</em> the room.</h2><p className="section-desc">Cross-industry work where creative direction, paid performance, and commercial thinking operate as one system.</p></div>
        <div className="filter-row">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <div className="project-list">{visibleProjects.map((project, index) => <article className={`project-row ${project.tone}`} key={project.name}><div className="project-number">0{index + 1}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.note}</p></div><div className="project-role">{project.role}</div><div className="project-arrow"><ArrowUpRight size={20} /></div></article>)}</div>
      </section>

      <section className="statement-section"><p className="section-index">03 / The position</p><div className="statement-large">MARKETING<br /><span>IS NOT</span><br />THE PROBLEM<span className="accent-dot">.</span></div><div className="statement-aside">The system is.<br /><span>Strategy × performance × creative</span></div></section>

      <section id="about" className="about-section section-pad"><div className="section-intro"><p className="section-index">04 / About Sharif</p><h2>Beyond the<br /><em>campaign.</em></h2></div><div className="about-layout"><div className="about-lede">I don’t just run campaigns. I find where the system breaks.</div><div className="about-copy"><p>I’m Sharif Tawhid, a creative strategist, growth marketer, performance marketer, and technological vanguard. I work at the intersection of business objectives and compelling visual storytelling.</p><p>My practice spans SaaS, luxury real estate, healthcare, lifestyle, and commerce. Every engagement starts with the market, the audience, and the ambition—then turns that understanding into a creative system built to scale.</p><div className="about-signature">S / T <span>Precision over noise.</span></div></div></div></section>

      <section className="capabilities-section"><div className="capabilities-intro"><p className="section-index">05 / Capabilities</p><h2>One practice.<br /><em>Many levers.</em></h2></div><div className="capability-stack">{capabilities.map((capability, index) => <div className="capability-line" key={capability}><span>0{index + 1}</span><strong>{capability}</strong><ArrowUpRight size={18} /></div>)}</div></section>

      <section id="process" className="process-section section-pad"><div className="section-intro"><p className="section-index">06 / How I work</p><h2>Find the signal.<br /><em>Build the system.</em></h2></div><div className="process-grid">{[{n:"01",t:"Observe",d:"Market, audience, competitor, and account—read the whole field before making a move."},{n:"02",t:"Diagnose",d:"Find the friction between attention and action. Name the problem precisely."},{n:"03",t:"Strategize",d:"Set the position, narrative, offer, and measurement logic that gives creative a job."},{n:"04",t:"Build",d:"Design the identity, experience, funnel, and campaign assets that make the strategy tangible."},{n:"05",t:"Optimize",d:"Launch, measure, learn, and compound what works across every relevant touchpoint."}].map((step) => <div className="process-step" key={step.n}><span>{step.n}</span><h3>{step.t}</h3><p>{step.d}</p></div>)}</div></section>

      <section className="voices-section"><p className="section-index">07 / Client voices</p><blockquote>“Sharif doesn't just deliver design—he delivers strategic clarity. His work transformed how we communicate our product's value to the market.”</blockquote><p className="voice-attribution">Tech Leadership / Coralogix</p></section>

      <section id="contact" className="contact-section"><p className="section-index">08 / Start a project</p><h2>Good marketing<br />gets attention.<br /><em>Great systems<br />create momentum.</em></h2><a className="contact-link" href="mailto:hello@shariftawhid.com">Start a conversation <ArrowUpRight size={22} /></a><div className="contact-foot"><span>SHARIF TAWHID / 2026</span><span>Creative strategist · Growth marketer · Technological vanguard</span></div></section>

      <footer className="site-footer"><span>S / T</span><span>Built with strategy & purpose.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
