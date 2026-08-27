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
const brands = [
  ["01", "Coralogix", "Tech & SaaS"], ["02", "Schell Brothers", "Real Estate"], ["03", "Swanson", "Health & Wellness"],
  ["04", "Snake River Sporting Club", "Lifestyle & Community"], ["05", "TVG", "Tech & SaaS"], ["06", "NibiSoft", "Tech & SaaS"],
  ["07", "Neri Architects", "Real Estate & Architecture"], ["08", "Dr Z Plastic Surgery", "Health & Wellness"], ["09", "Clarity Homes", "Real Estate"],
  ["10", "Taqwa Skyland", "Real Estate"], ["11", "One Ummah", "Lifestyle & Community"], ["12", "Apple Gadget", "Retail & Commerce"],
  ["13", "Elegance", "Lifestyle & Community"], ["14", "Payrashopping", "Retail & Commerce"], ["15", "ThreadXBD", "Fashion & Commerce"],
];
const reports = [
  ["ALA Developments", "Meta audit / 15 pages", "/manus-storage/ala-developments-meta-audit-professional_1904ff73.pdf"],
  ["Clarity Homes", "Meta audit / 14 pages", "/manus-storage/clarity-homes-meta-audit-professional_77198b43.pdf"],
  ["Faith Holdings — Strategic Growth", "Strategic growth report / 29 pages", "/manus-storage/faith-holdings-strategic-growth-report-no-section-numbering_0daf78a2.pdf"],
  ["Faith Holdings — XtructureX", "Premium Meta Ads audit / 15 pages", "/manus-storage/faith-holdings-xtructurex-premium-meta-ads-audit_33b22cc9.pdf"],
  ["Langports Australia", "Ad creative breakdown / 7 pages", "/manus-storage/langports-ad-creative-breakdown_8ed39f2e.pdf"],
  ["Taqwa Skyland", "Media buyer strategy / 28 pages", "/manus-storage/media-buyer-job-application-taqwa-skyland_67886c93.pdf"],
  ["Neri Architects", "Meta Ads audit / 16 pages", "/manus-storage/neri-architects-meta-ads-audit-professional-manual_b0c17cdb.pdf"],
  ["Schell Brothers", "Meta Ads audit / 16 pages", "/manus-storage/schell-brothers-meta-ads-audit-professional-manual_b36a200b.pdf"],
  ["Snake River Sporting Club", "Meta audit / 15 pages", "/manus-storage/snake-river-sporting-club-meta-audit-professional_f4bc8856.pdf"],
];
const creativeAssets = [
  ["Creative 01", "/manus-storage/1-1_0a6eeb58.png"], ["Creative 02", "/manus-storage/1_522af51d.png"], ["Creative 03", "/manus-storage/2-1_33ff7a2c.png"],
  ["Creative 04", "/manus-storage/2_ffdf166d.png"], ["Creative 05", "/manus-storage/3-1_18a1283e.png"], ["Creative 06", "/manus-storage/3_1dcd81fe.png"],
  ["Creative 07", "/manus-storage/4-1_27a6841d.png"], ["Creative 08", "/manus-storage/4_46030b0b.png"], ["Creative 09", "/manus-storage/5-1_81740b40.png"],
  ["Creative 10", "/manus-storage/5_0a1a3b04.png"], ["Creative 11", "/manus-storage/6-1_3019c24b.png"], ["Creative 12", "/manus-storage/6_80d15842.png"],
  ["Faith Lake Castle 01", "/manus-storage/fcl-01_675709b8.png"], ["Faith Lake Castle 02", "/manus-storage/fcl02_b8a895ff.png"], ["Faith Lake Castle 03", "/manus-storage/fcl03_c7e5ca77.png"],
  ["Faith Lake Castle 04", "/manus-storage/fcl04_aaa13e8e.png"], ["Faith Lake Castle 05", "/manus-storage/fcl05_f0bf5e18.png"], ["Faith Lake Castle 06", "/manus-storage/fcl06_ea682c90.png"],
  ["Faith Lake Castle 07", "/manus-storage/fcl07_1b56e688.png"], ["Faith Lake Castle 08", "/manus-storage/fcl08_83e84c7f.png"], ["Faith Lake Castle 09", "/manus-storage/fcl09_49dc4a39.png"],
  ["Faith Lake Castle 10", "/manus-storage/fcl10_e8b724cf.png"], ["Faith Lake Castle 11", "/manus-storage/fcl222_74463da2.png"], ["UGC direction", "/manus-storage/ot2_372cf789.png"],
];
const proofScreens = [
  ["Proof screenshot 01", "/manus-storage/01c33233-af46-4eff-a378-b8b15f65ba4a_d25f9d1f.jpeg"], ["Proof screenshot 02", "/manus-storage/34941786-b733-4024-941d-fb91d51be13e_39530ae8.jpeg"],
  ["Proof screenshot 03", "/manus-storage/5e469302-426e-4e46-a976-a80403cc4218_31161fbc.jpeg"], ["Proof screenshot 04", "/manus-storage/696d42fc-6394-41c3-b945-39ff1376a3bd_6b459e87.jpeg"],
  ["Proof screenshot 05", "/manus-storage/c1ada87d-fd02-4567-af46-cda0f81add8a_e3a8cf2e.jpeg"], ["Proof screenshot 06", "/manus-storage/c223d0fc-8d1d-418c-a13f-c6b3c26f6d80_50efd394.jpeg"],
  ["Proof screenshot 07", "/manus-storage/c59605c8-b4b6-4f8a-8a23-cf72506901fc_113a4cfc.jpeg"],
];

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
          <button onClick={() => jump("brands")}>Brands <span>03</span></button>
          <button onClick={() => jump("about")}>About <span>04</span></button>
          <button onClick={() => jump("process")}>Process <span>05</span></button>
          <button onClick={() => jump("evidence")}>Proof <span>06</span></button>
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

      <section id="brands" className="brands-section section-pad"><div className="section-intro"><p className="section-index">02 / Brand universe</p><h2>Fifteen names.<br /><em>One operating system.</em></h2><p className="section-desc">The complete universe from the previous portfolio, spanning software, property, health, community, commerce, and culture.</p></div><div className="system-marker"><span className="brand-mark">S<span>/</span>T</span><span>15 brands / one operating system</span></div><div className="brand-grid">{brands.map(([number, name, category]) => <div className="brand-tile" key={name}><span>{number}</span><strong>{name}</strong><small>{category}</small></div>)}</div></section>

      <section id="work" className="work-section section-pad">
        <div className="section-intro"><p className="section-index">03 / Selected work</p><h2>Strategy that<br /><em>moves</em> the room.</h2><p className="section-desc">Cross-industry work where creative direction, paid performance, and commercial thinking operate as one system.</p></div>
        <div className="filter-row">{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
        <div className="project-list">{visibleProjects.map((project, index) => <article className={`project-row ${project.tone}`} key={project.name}><div className="project-number">0{index + 1}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.note}</p></div><div className="project-role">{project.role}</div><div className="project-arrow"><ArrowUpRight size={20} /></div></article>)}</div>
      </section>

      <section id="evidence" className="evidence-section section-pad"><div className="section-intro"><p className="section-index">04 / Proof library</p><h2>Work, with<br /><em>the receipts.</em></h2><p className="section-desc">A browsable archive of reports, creative assets, and campaign screenshots supplied with the portfolio.</p></div><div className="system-marker"><span className="brand-mark">S<span>/</span>T</span><span>40 supplied proof assets / three lenses</span></div><div id="reports" className="proof-block"><div className="proof-heading"><span>01</span><h3>PDF reports</h3><p>Audits, strategy documents, and creative breakdowns.</p></div><div className="report-list">{reports.map(([name, detail, href]) => <a className="report-row" href={href} target="_blank" rel="noreferrer" key={href}><span className="report-type">PDF</span><strong>{name}</strong><small>{detail}</small><ArrowUpRight size={18} /></a>)}</div></div><div id="creative" className="proof-block"><div className="proof-heading"><span>02</span><h3>Creative assets</h3><p>Original campaign creative and visual directions from the archive.</p></div><div className="asset-grid">{creativeAssets.map(([name, src]) => <a className="asset-card" href={src} target="_blank" rel="noreferrer" key={src}><img src={src} alt={name} loading="lazy" /></a>)}</div></div><div id="proof" className="proof-block"><div className="proof-heading"><span>03</span><h3>Visual proof</h3><p>Screenshot evidence from the supplied campaign material.</p></div><div className="asset-grid proof-grid">{proofScreens.map(([name, src]) => <a className="asset-card" href={src} target="_blank" rel="noreferrer" key={src}><img src={src} alt={name} loading="lazy" /><span>{name} <ArrowUpRight size={14} /></span></a>)}</div></div></section>

      <section className="statement-section"><p className="section-index">05 / The position</p><div className="statement-large">MARKETING<br /><span>IS NOT</span><br />THE PROBLEM<span className="accent-dot">.</span></div><div className="statement-aside">The system is.<br /><span>Strategy × performance × creative</span></div></section>

      <section id="about" className="about-section section-pad"><div className="section-intro"><p className="section-index">06 / About Sharif</p><h2>Beyond the<br /><em>campaign.</em></h2></div><div className="about-layout"><div className="about-lede">I don’t just run campaigns. I find where the system breaks.</div><div className="about-copy"><p>I’m Sharif Tawhid, a creative strategist, growth marketer, performance marketer, and technological vanguard. I work at the intersection of business objectives and compelling visual storytelling.</p><p>My practice spans SaaS, luxury real estate, healthcare, lifestyle, and commerce. Every engagement starts with the market, the audience, and the ambition—then turns that understanding into a creative system built to scale.</p><div className="about-signature">S / T <span>Precision over noise.</span></div></div></div></section>

      <section className="capabilities-section"><div className="capabilities-intro"><p className="section-index">07 / Capabilities</p><h2>One practice.<br /><em>Many levers.</em></h2></div><div className="capability-stack">{capabilities.map((capability, index) => <div className="capability-line" key={capability}><span>0{index + 1}</span><strong>{capability}</strong><ArrowUpRight size={18} /></div>)}</div></section>

      <section id="process" className="process-section section-pad"><div className="section-intro"><p className="section-index">08 / How I work</p><h2>Find the signal.<br /><em>Build the system.</em></h2></div><div className="process-grid">{[{n:"01",t:"Observe",d:"Market, audience, competitor, and account—read the whole field before making a move."},{n:"02",t:"Diagnose",d:"Find the friction between attention and action. Name the problem precisely."},{n:"03",t:"Strategize",d:"Set the position, narrative, offer, and measurement logic that gives creative a job."},{n:"04",t:"Build",d:"Design the identity, experience, funnel, and campaign assets that make the strategy tangible."},{n:"05",t:"Optimize",d:"Launch, measure, learn, and compound what works across every relevant touchpoint."}].map((step) => <div className="process-step" key={step.n}><span>{step.n}</span><h3>{step.t}</h3><p>{step.d}</p></div>)}</div></section>

      <section className="voices-section"><p className="section-index">09 / Client voices</p><blockquote>“Sharif doesn't just deliver design—he delivers strategic clarity. His work transformed how we communicate our product's value to the market.”</blockquote><p className="voice-attribution">Tech Leadership / Coralogix</p></section>

      <section id="contact" className="contact-section"><p className="section-index">10 / Start a project</p><h2>Good marketing<br />gets attention.<br /><em>Great systems<br />create momentum.</em></h2><a className="contact-link" href="mailto:hello@shariftawhid.com">Start a conversation <ArrowUpRight size={22} /></a><div className="contact-foot"><span>SHARIF TAWHID / 2026</span><span>Creative strategist · Growth marketer · Technological vanguard</span></div></section>

      <footer className="site-footer"><span>S / T</span><span>Built with strategy & purpose.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
