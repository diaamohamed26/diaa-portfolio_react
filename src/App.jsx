import {
  Github, Linkedin, Mail, Phone, ArrowUpRight,
  Code2, BrainCircuit, Layers3, Menu, X
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "FIDS",
    category: "AI · Football Intelligence",
    description:
      "A football intelligence platform exploring match insights, player analysis and AI-powered decision support.",
    stack: ["Vue.js", "Python", "Django REST", "AI"],
    status: "In Development",
  },
  {
    number: "02",
    name: "X9 Fashion",
    category: "E-Commerce",
    description:
      "An e-commerce experience focused on product discovery, shopping cart, checkout and administration.",
    stack: ["React", "Node.js", "MongoDB"],
    status: "Portfolio Project",
  },
  {
    number: "03",
    name: "Dar Al Nashr",
    category: "Online Bookstore",
    description:
      "An online bookstore concept with a full-stack architecture and a smooth book browsing experience.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    status: "Portfolio Project",
  },
  {
    number: "04",
    name: "Azhar Toon",
    category: "Educational Technology",
    description:
      "An early-stage educational video studio concept for turning learning materials into Arabic video experiences.",
    stack: ["Angular", "ASP.NET Core", ".NET", "SQLite"],
    status: "Prototype",
  },
  {
    number: "05",
    name: "NOIRÉ Coffee",
    category: "E-Commerce · Frontend",
    description:
      "A modern coffee shop storefront with product categories, shopping cart interactions and a premium visual identity.",
    stack: ["Angular", "SCSS", "TypeScript"],
    status: "Portfolio Project",
  },
  {
    number: "06",
    name: "Task Management",
    category: "Backend Development",
    description:
      "A task management application built to practice structured backend development with the .NET ecosystem.",
    stack: ["C#", "ASP.NET Core", "EF Core"],
    status: "GitHub Project",
  },
];

const skills = [
  { title: ".NET & Backend", items: [".NET", "C#", "ASP.NET Core", "Entity Framework Core", "REST APIs", "Clean Architecture"] },
  { title: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Angular", "Vue.js", "HTML", "CSS"] },
  { title: "AI & Integrations", items: ["Python", "OpenAI APIs", "LLM Integration", "AI-powered Applications"] },
  { title: "Databases & Tools", items: ["SQL", "MongoDB", "SQLite", "Git", "GitHub", "Postman"] },
];

const email = "diaamazize98@gmail.com";
const whatsapp = "201159326784";

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          DIAA<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a
            className="nav-cta"
            href={`mailto:${email}`}
            onClick={closeMenu}
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            SOFTWARE ENGINEER · CAIRO, EGYPT
          </div>

          <h1>
            Building digital
            <br />
            products with
            <br />
            <span>intelligence.</span>
          </h1>

          <p className="hero-description">
            I'm Diaa Mohamed — Software Engineer and AI & Full-Stack Developer.
            I turn ideas into useful digital experiences through modern
            engineering, thoughtful design and AI.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore My Work <ArrowUpRight size={18} />
            </a>
            <a className="button button-outline" href={`mailto:${email}`}>
              Contact Me <Mail size={17} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/diaamohamed26" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://linkedin.com/in/diaa-mohamed-a50460125" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Phone />
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal-top">
            <div className="terminal-dots"><i /><i /><i /></div>
            <span>developer.js</span>
          </div>
          <div className="terminal-code">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="indent">name: <span className="code-green">'Diaa Mohamed'</span>,</p>
            <p className="indent">role: <span className="code-green">'Software Engineer'</span>,</p>
            <p className="indent">focus: [</p>
            <p className="indent2"><span className="code-green">'Full-Stack'</span>,</p>
            <p className="indent2"><span className="code-green">'Artificial Intelligence'</span>,</p>
            <p className="indent2"><span className="code-green">'Problem Solving'</span></p>
            <p className="indent">],</p>
            <p className="indent">build: <span className="code-blue">() =&gt; "Ideas into impact"</span></p>
            <p>{"};"}</p>
            <div className="terminal-cursor">_</div>
          </div>
          <div className="terminal-footer">
            <span><span className="availability-dot" /> Available for opportunities</span>
            <span>EGY</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 / 04</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <SectionTitle
          eyebrow="01 — ABOUT ME"
          title={<>Engineering ideas.<br /><span>Creating impact.</span></>}
          text="A little about the person behind the code."
        />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a Software Engineer with hands-on experience building web
              applications, e-commerce platforms and digital products.
              I enjoy working across the full development lifecycle — from
              understanding business requirements to designing, building
              and improving software solutions.
            </p>
            <p>
              My core experience combines the .NET ecosystem with modern
              JavaScript frameworks. I'm also exploring AI integrations and
              intelligent applications that solve real-world problems.
            </p>
            <a className="text-link" href="https://github.com/diaamohamed26" target="_blank" rel="noreferrer">
              Explore my GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <strong>5<span>+</span></strong>
              <p>Years in Web Development</p>
            </div>
            <div className="stat-card">
              <strong>Full<span>-</span>Stack</strong>
              <p>Frontend & Backend Development</p>
            </div>
            <div className="stat-card">
              <strong>AI<span>+</span></strong>
              <p>Exploring Intelligent Solutions</p>
            </div>
            <div className="stat-card">
              <strong>EGY</strong>
              <p>Based in Cairo, Egypt</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <SectionTitle
          eyebrow="02 — MY TOOLKIT"
          title={<>Technologies I <span>work with.</span></>}
          text="Tools and technologies I use to design, develop and deliver software."
        />

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-icon">
                {index === 0 && <Code2 />}
                {index === 1 && <Layers3 />}
                {index === 2 && <BrainCircuit />}
                {index === 3 && <Code2 />}
              </div>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <SectionTitle
          eyebrow="03 — SELECTED WORK"
          title={<>Projects built to <span>make a difference.</span></>}
          text="A selection of projects, experiments and products across different technologies."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number} / 06</span>
                <ArrowUpRight className="project-arrow" />
              </div>
              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="project-status">{project.status}</div>
            </article>
          ))}
        </div>

        <a className="button button-outline github-button" href="https://github.com/diaamohamed26" target="_blank" rel="noreferrer">
          More on GitHub <Github size={18} />
        </a>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="contact-content">
          <span className="eyebrow">04 — GET IN TOUCH</span>
          <h2>Have an idea?<br /><span>Let's build it.</span></h2>
          <p>
            I'm open to software engineering opportunities, collaborations
            and interesting ideas. Let's start a conversation.
          </p>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              <Mail size={18} /> Send Me an Email
            </a>
            <a className="button button-outline" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
              <Phone size={18} /> WhatsApp
            </a>
          </div>

          <div className="contact-email">{email}</div>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home">DIAA<span>.</span></a>
        <p>Designed & built by Diaa Mohamed © {new Date().getFullYear()}</p>
        <div className="footer-socials">
          <a href="https://github.com/diaamohamed26" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/diaa-mohamed-a50460125" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href={`mailto:${email}`}><Mail /></a>
        </div>
      </footer>
    </main>
  );
}

export default App;
