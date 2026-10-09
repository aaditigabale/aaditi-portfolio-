import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Github, Linkedin,
  Mail, Phone, Code2, GraduationCap, Sparkles, CheckCircle2, ExternalLink,
  Braces, Layers3, Users, HeartHandshake, BriefcaseBusiness
} from 'lucide-react';

const profile = {
  name: 'Aaditi Gabale',
  email: 'gabaleaaditi7@gmail.com',
  phone: '+91 9309880317',
  github: 'https://github.com/aaditigabale',
  linkedin: 'https://www.linkedin.com/in/aaditi-gabale-2839a0382'
};

const projects = [
  {
    number: '01',
    name: 'MediQueue',
    type: 'Hospital Queue Management System',
    status: 'Completed',
    statusClass: 'complete',
    description: 'A digital approach to organizing patient flow and making hospital queue handling clearer and more efficient.',
    highlights: [
      'Structured patient registration and queue management',
      'Designed around reducing confusion about patient turns',
      'A practical, user-focused solution for a healthcare workflow'
    ],
    tags: ['Healthcare', 'Queue Management', 'Workflow Design'],
    liveDemo: 'https://krushnalp2007-cloud.github.io/hospital-queue-management-system/',
    image: '/project-images/mediqueue.png',
    symbol: 'M'
  },
  {
    number: '02',
    name: 'Smart Shopping Cart',
    type: 'Smart retail experience',
    status: 'In progress',
    statusClass: 'progress',
    description: 'Exploring a smoother in-store shopping journey with a focus on item identification, billing, and expense visibility.',
    highlights: [
      'Concept focused on a more convenient checkout flow',
      'Exploring product verification to support billing accuracy',
      'Designed around reducing manual checkout effort'
    ],
    tags: ['Retail', 'Checkout Experience', 'Automation'],
    image: '/project-images/smart-cart.png',
    symbol: 'S'
  },
  {
    number: '03',
    name: 'Shopping Sathi',
    type: 'Shopping assistant · HTML, CSS, JavaScript',
    status: 'In progress',
    statusClass: 'progress',
    description: 'A shopping assistant concept to help people compare options and make more informed purchase decisions.',
    highlights: [
      'Product discovery based on individual needs',
      '“Why Buy” and “Why Not” explanations for clearer decisions',
      'Exploring a unified product and price comparison experience'
    ],
    tags: ['JavaScript', 'Product Discovery', 'Decision Support'],
    image: '/project-images/shopping-sathi.png',
    symbol: 'S'
  }
];

const skillGroups = [
  { title: 'Programming', icon: Braces, skills: ['C', 'C++', 'Python'] },
  { title: 'Web development', icon: Code2, skills: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'Foundations', icon: Layers3, skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving'] },
  { title: 'Tools & learning', icon: Sparkles, skills: ['Git', 'GitHub', 'VS Code', 'Learning React', 'Exploring AI/ML'] }
];

const activities = [
  {
    icon: BriefcaseBusiness,
    title: 'Software Engineering Job Simulation',
    organization: 'Commonwealth Bank',
    detail: '2026 · Practical exposure to software engineering tasks and industry-style workflows.'
  },
  {
    icon: Code2,
    title: 'TenzorX Hackathon',
    organization: 'Participant',
    detail: 'Collaborative problem analysis, idea development, and rapid solution exploration.'
  },
  {
    icon: Sparkles,
    title: 'Smart India Hackathon (SIH)',
    organization: 'Participant',
    detail: 'Explored technology-driven approaches to real-world problem statements.'
  },
  {
    icon: HeartHandshake,
    title: 'Pioneer 2026',
    organization: 'Volunteer · National-level event',
    detail: 'Supported event coordination and organizational activities.'
  }
];

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Journey', '#journey'],
    ['Contact', '#contact']
  ];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="topbar">
        <div className="nav-wrap">
          <a href="#home" className="wordmark" aria-label="Aaditi Gabale home">
            <span className="wordmark-mark">AG</span>
            <span>Aaditi Gabale<span className="wordmark-dot">.</span></span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-resume" href="/Aaditi-Gabale-Resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}><ExternalLink size={14} /> Resume PDF</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> Computer Science student · Open to learning opportunities</div>
            <p className="hero-kicker">HELLO, I’M AADITI</p>
            <h1>Turning ideas into<br /><span>thoughtful digital</span><br />experiences.</h1>
            <p className="hero-intro">
              I’m a Computer Science and Engineering student at Kolhapur Institute of Technology, interested in building useful digital products and improving how people interact with technology. Through academic projects, hackathons, and collaborative experiences, I’m developing my technical foundation, problem-solving approach, and ability to turn ideas into practical solutions.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="/Aaditi-Gabale-Resume.pdf" target="_blank" rel="noreferrer">View resume <ExternalLink size={16} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email <ArrowUpRight size={13} /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Introduction card">
            <div className="visual-grid" />
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="hero-monogram">AG<span>.</span></div>
            <div className="floating-chip chip-code"><Code2 size={16} /> Building with code</div>
            <div className="floating-chip chip-ideas"><Sparkles size={16} /> Ideas into impact</div>
            <div className="visual-caption">
              <span className="caption-line" />
              <div><strong>Learn. Build. Improve.</strong><small>A work in progress, by design.</small></div>
            </div>
            <div className="visual-index">PORTFOLIO / 2026</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="intro-strip" id="about">
          <div className="section-wrap intro-grid">
            <div className="intro-label"><span className="tiny-index">01 / ABOUT</span><span className="vertical-line" /></div>
            <div className="intro-main">
              <SectionHeading eyebrow="A little about me" title={<>Building a foundation<br />for <span className="text-blue">what’s next.</span></>} />
              <p className="large-copy">I’m pursuing a B.Tech in Computer Science and Engineering at Kolhapur Institute of Technology. I enjoy bringing a positive attitude, a fresh perspective, and a user-first mindset to the ideas I work on.</p>
              <p className="body-copy">I value consistency over shortcuts, collaboration over assumptions, and learning through action. I’m steadily building my technical foundation while exploring how thoughtful design and technology can make everyday tasks simpler.</p>
            </div>
            <div className="stats-card">
              <div className="stat">
                <span className="stat-number">9.1<span>/10</span></span>
                <span className="stat-label">First-year CGPA</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">2029<span>–30</span></span>
                <span className="stat-label">Expected graduation</span>
              </div>
              <div className="stats-foot"><GraduationCap size={17} /> Learning at Kolhapur Institute of Technology</div>
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow="Selected work · 02" title={<>Projects with a <span className="text-blue">purpose.</span></>} note="A mix of completed work and ideas currently taking shape. I’ll keep this space updated as each project evolves." />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-visual"><img className="project-preview" src={project.image} alt={`${project.name} project screenshot`} loading="lazy" /></div>
                <div className="project-content">
                  <div className="project-title-row">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span className={`status-pill ${project.statusClass}`}><span />{project.status}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((item) => <li key={item}><CheckCircle2 size={15} />{item}</li>)}
                  </ul>
                  <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  {project.liveDemo && <div className="project-actions"><a className="button button-secondary" href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a></div>}
                </div>
              </article>
            ))}
          </div>
          <div className="project-disclaimer"><Sparkles size={16} /> Project descriptions reflect current scope and direction; in-progress features are presented as work in progress.</div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="My toolkit · 03" title={<>Skills I’m growing <span className="text-blue">with.</span></>} note="Strong fundamentals first. New tools, one project at a time." />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">0{index + 1}</span></div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">{group.skills.map(skill => <span key={skill} className={skill.startsWith('Learning') || skill.startsWith('Exploring') ? 'skill-tag learning' : 'skill-tag'}>{skill}</span>)}</div>
                  </article>
                );
              })}
            </div>
            <div className="learning-note"><span className="learning-pulse" /><p><strong>Currently exploring:</strong> React and Artificial Intelligence / Machine Learning.</p></div>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <SectionHeading eyebrow="Experience & community · 04" title={<>Learning beyond the <span className="text-blue">classroom.</span></>} note="Experiences that help me practice collaboration, communication, and structured problem-solving." />
          <div className="journey-layout">
            <div className="journey-aside">
              <div className="journey-aside-icon"><Users size={23} /></div>
              <h3>Show up.<br />Collaborate.<br /><span>Keep learning.</span></h3>
              <p>From software engineering simulations to hackathons and volunteering, I look for opportunities to learn with others and take on new challenges.</p>
            </div>
            <div className="timeline">
              {activities.map((activity, i) => {
                const Icon = activity.icon;
                return (
                  <article className="timeline-item" key={activity.title}>
                    <div className="timeline-marker"><Icon size={17} /></div>
                    <div className="timeline-content">
                      <div className="timeline-meta">{activity.organization}</div>
                      <h3>{activity.title}</h3>
                      <p>{activity.detail}</p>
                    </div>
                    <span className="timeline-count">0{i + 1}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-wrap education-wrap">
            <div>
              <p className="eyebrow">Academic foundation · 05</p>
              <h2>Learning the fundamentals<br /><span className="text-blue">and building from there.</span></h2>
            </div>
            <div className="education-card">
              <div className="education-icon"><GraduationCap size={24} /></div>
              <div className="education-details">
                <p className="education-date">2025 — 2030</p>
                <h3>Kolhapur Institute of Technology</h3>
                <p>B.Tech · Computer Science and Engineering</p>
                <div className="education-results">
                  <span><strong>9.1/10</strong> First-year CGPA</span>
                  <span><strong>81.83%</strong> HSC</span>
                  <span><strong>97%</strong> SSC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-pattern" />
            <div className="contact-content">
              <p className="eyebrow">Have an idea? · 06</p>
              <h2>Let’s make something<br /><span>meaningful.</span></h2>
              <p className="contact-copy">I’m always happy to connect with fellow students, builders, and people working on interesting problems. Let’s learn from each other.</p>
              <a className="button button-white" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={18} /><span><small>Email</small>{profile.email}</span><ArrowUpRight size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LinkedIn</small>Connect professionally</span><ArrowUpRight size={16} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /><span><small>GitHub</small>Explore my repositories</span><ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a href="#home" className="wordmark footer-wordmark"><span className="wordmark-mark">AG</span><span>Aaditi Gabale<span className="wordmark-dot">.</span></span></a>
          <p>Designed with intention. Built while learning.</p>
          <a className="back-top" href="/Aaditi-Gabale-Resume.pdf" target="_blank" rel="noreferrer">Resume PDF <ExternalLink size={13} /></a>
          <a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a>
          <span className="copyright">© {new Date().getFullYear()} Aaditi Gabale</span>
        </div>
      </footer>
    </div>
  );
}

export default App;