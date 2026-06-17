"use client";

import { useEffect } from "react";

const projects = [
  {
    tag: "Thesis · AI/ML",
    title: "Internal Document Q&A (RAG + HITL)",
    year: "2025 – Present",
    desc: "An AI question-answering system that answers queries from STIE Ciputra Makassar internal documents using a Retrieval-Augmented Generation pipeline. Unanswerable or out-of-scope questions are escalated to an admin through a Human-in-the-Loop workflow, keeping answers grounded and reliable.",
    chips: ["Python", "RAG", "LLM", "Embeddings", "Vector Retrieval", "HITL"],
    images: ["rag-architecture.png"],
    video: "",
    note: "Tip: tampilkan diagram arsitektur atau UI dengan data dummy — hindari isi dokumen internal kampus.",
  },
  {
    tag: "Competition · Computer Vision",
    title: "Smart Parking Gate (YOLO & OCR)",
    year: "2023 · Finalist · Published",
    desc: "An AI-IoT automated parking gate using YOLOv4 for plate detection and EasyOCR for license-plate recognition, reaching 98.75% detection accuracy. Finalist at the AIoT Competition (Universitas Udayana, Bali) and published as first author in the JTRISTE journal.",
    chips: ["YOLOv4", "OCR", "Computer Vision", "IoT", "Firebase", "ESP32"],
    images: ["parkinggate-1.png", "parkinggate-2.png"],
    video: "",
    paper: "JTRISTE, Vol. 10 No. 1 (2023)",
  },
  {
    tag: "Research · AI · Published",
    title: "PetGuardian — AI Pet-Care PWA",
    year: "2025 · Published",
    desc: "An AI-powered Progressive Web App that identifies pet breeds (Gemini API) and detects skin diseases (PaLM / Roboflow), with AI grooming recommendations. Reached up to 94% accuracy for dermatitis; validated with 45 users. First author in J-CIS journal.",
    chips: ["Gemini API", "PaLM", "Roboflow", "PWA", "ReactJS", "Flask"],
    images: ["petguardian-1.png", "petguardian-2.png"],
    video: "",
    paper: "J-CIS, Vol. 8 No. 2 (2025)",
  },
  {
    tag: "iOS · Apple Developer Academy",
    title: "Scheddy — Caddie Scheduling App",
    year: "2025",
    desc: "An iPadOS app that automates daily scheduling for 180 caddies at Ciputra Golf. Led the team as Project Manager and built SwiftUI interfaces integrated with a REST API and PostgreSQL data layer.",
    chips: ["Swift", "SwiftUI", "REST API", "PostgreSQL", "Google Cloud Run"],
    images: ["scheddy-1.png", "scheddy-2.png"],
    video: "",
  },
  {
    tag: "iOS · Apple Developer Academy",
    title: "Talkative — Pronunciation Coach",
    year: "2025",
    desc: "An iOS personal pronunciation coaching app using on-device CoreML. Designed user flows and UI supporting audio recording, playback, and haptic feedback, following Apple Human Interface Guidelines.",
    chips: ["Swift", "CoreML", "AVFoundation", "Core Haptics", "HIG"],
    images: ["talkative-1.png", "talkative-2.png"],
    video: "",
  },
  {
    tag: "Web · Academic",
    title: "UCM Portal",
    year: "2023",
    desc: "A responsive web portal for student registration into committees and organizations, with frontend components integrated to a real-time database for live updates.",
    chips: ["HTML", "CSS", "JavaScript", "MySQL"],
    images: ["ucmportal-1.png"],
    video: "",
  },
  {
    tag: "Web · Academic",
    title: "Curhat-In — Mental Health Platform",
    year: "2023",
    desc: "A mental health consultation platform with real-time chat. Designed calming, accessible UI and built responsive layouts that handle real-time interactions.",
    chips: ["ReactJS", "Java", "MySQL"],
    images: ["curhatin-1.png", "curhatin-2.png"],
    video: "",
  },
];

const skillGroups = [
  {
    title: "AI / ML & Data",
    items: [
      "Python",
      "Machine Learning",
      "RAG",
      "LLM (Gemini API, PaLM)",
      "Embeddings",
      "Vector Retrieval",
      "HITL",
      "NLP",
      "Computer Vision (YOLO, OCR)",
      "Roboflow",
      "CoreML",
    ],
  },
  {
    title: "Programming & Development",
    items: [
      "Swift",
      "SwiftUI / UIKit",
      "JavaScript",
      "ReactJS",
      "HTML",
      "CSS",
      "REST API",
      "SQL",
    ],
  },
  {
    title: "Tools & Design",
    items: [
      "Git / GitHub",
      "Figma",
      "Google Cloud Run",
      "Express.js",
      "Prisma",
    ],
  },
];

const certs = [
  {
    code: "NLP",
    title: "Natural Language Processing and Computer Vision (MDL-214)",
    meta: "IBM SkillsBuild · 2025",
  },
  {
    code: "BOT",
    title: "Build Your First Chatbot (MDL-510)",
    meta: "IBM SkillsBuild · 2025",
  },
];

const achievements = [
  {
    title: "Finalist — AIoT Competition",
    meta: "Universitas Udayana, Bali · 2023",
    desc: "Reached the finals of the Electrical and Computer Competition with an AI-IoT smart parking system using YOLO & OCR, presenting both a technical paper and a working prototype.",
  },
  {
    title: "Grant Recipient — P2MW",
    meta: "Student Entrepreneurship Development Program",
    desc: "Co-founded a 3D printing service that secured P2MW funding. Led proposal writing, financial planning, and financial reporting.",
  },
];

const publications = [
  {
    title:
      "PetGuardian: PWA Berbasis AI untuk Deteksi Otomatis Ras dan Penyakit Kulit",
    venue:
      "Journal of Computer and Information System (J-CIS), Vol. 8 No. 2, 2025 · pp. 73–84",
    role: "First author",
    desc: "An AI Progressive Web App for pet breed identification (Gemini API) and skin-disease detection (PaLM / Roboflow), reaching up to 94% accuracy and validated with 45 users.",
    link: "https://doi.org/10.31605/jcis.v8i2",
  },
  {
    title:
      "Rancang Bangun Sistem Manajemen Palang Parkir AI-IoT Otomatis Menggunakan YOLO & OCR",
    venue: "JTRISTE, Vol. 10 No. 1, 2023 · pp. 41–49",
    role: "First author",
    desc: "An AI-IoT smart parking gate using YOLOv4 and EasyOCR for automatic license-plate recognition, achieving 98.75% plate-detection accuracy.",
    link: "",
  },
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-logo">
            Maria Angelica<span>.</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              AI / ML Enthusiast · Informatics Student
            </span>
            <h1>
              Maria Angelica <span className="accent">Vinesytha</span>{" "}
              Chandrawan
            </h1>
            <p className="hero-lead">
              Final-year Informatics student building practical AI — from a
              Retrieval-Augmented Generation document assistant with
              Human-in-the-Loop, to computer vision with YOLO &amp; OCR.
              Grounded in real software engineering across iOS and web.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">
                View my work →
              </a>
              <a
                className="btn btn-ghost"
                href="/CV_Maria_Angelica.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <h3>At a glance</h3>
            <div className="role">AI/ML · Computer Vision · NLP</div>
            <div className="fact">
              <b>Focus</b>
              <span>RAG, NLP, Computer Vision</span>
            </div>
            <div className="fact">
              <b>Thesis</b>
              <span>RAG Q&amp;A system with HITL</span>
            </div>
            <div className="fact">
              <b>Tools</b>
              <span>Python, ML libraries, Swift, React</span>
            </div>
            <div className="fact">
              <b>Based in</b>
              <span>Makassar, Indonesia</span>
            </div>
          </aside>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <span className="eyebrow" data-reveal>
            About
          </span>
          <h2 className="section-title" data-reveal>
            Turning curiosity into working AI.
          </h2>
          <div className="about-grid">
            <div className="about-text" data-reveal>
              <p>
                I&apos;m an Informatics student at the University of Ciputra
                Makassar, in my final year, with a growing focus on Artificial
                Intelligence and Machine Learning.
              </p>
              <p>
                My thesis develops a Retrieval-Augmented Generation system that
                answers questions from internal documents and escalates anything
                it can&apos;t confidently answer to a human reviewer. Alongside
                research, I&apos;ve built real products — iOS apps at the Apple
                Developer Academy and web platforms for my campus community.
              </p>
              <p>
                I enjoy working in cross-functional teams from ideation to
                implementation, and I&apos;m always looking for the next thing
                to learn.
              </p>
            </div>
            <div className="about-highlights" data-reveal>
              <div className="highlight">
                <b>2</b>
                <span>real AI projects (RAG + Computer Vision)</span>
              </div>
              <div className="highlight">
                <b>Finalist</b>
                <span>AIoT Competition, Universitas Udayana</span>
              </div>
              <div className="highlight">
                <b>2×</b>
                <span>IBM SkillsBuild certifications in AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-alt">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Projects
          </span>
          <h2 className="section-title" data-reveal>
            Selected work
          </h2>
          <p className="section-intro" data-reveal>
            A mix of AI research, computer vision, iOS, and web — all built with
            real users and real constraints in mind.
          </p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" data-reveal key={i}>
                {p.images && p.images.length > 0 && (
                  <div className="project-media">
                    <div className="shots">
                      {p.images.map((img) => (
                        <div className="shot" key={img}>
                          {/* Taruh file di public/shots/. Saat file ada, gambar muncul otomatis. */}
                          <img
                            src={`/shots/${img}`}
                            alt={`${p.title} screenshot`}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.parentElement.classList.add(
                                "shot-empty"
                              );
                            }}
                          />
                          <span className="shot-label">{img}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="project-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <div className="year">{p.year}</div>
                  <p>{p.desc}</p>
                  {p.video && (
                    <a
                      className="watch-demo"
                      href={p.video}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▶ Watch demo
                    </a>
                  )}
                  <div className="chips">
                    {p.chips.map((c) => (
                      <span className="chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & CERTS */}
      <section id="skills">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Skills &amp; Certifications
          </span>
          <h2 className="section-title" data-reveal>
            What I work with
          </h2>
          <div className="two-col">
            <div data-reveal>
              {skillGroups.map((g) => (
                <div className="skill-group" key={g.title}>
                  <h4>{g.title}</h4>
                  <div className="skill-chips">
                    {g.items.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div data-reveal>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--accent)",
                  marginBottom: "12px",
                  fontWeight: 700,
                }}
              >
                Certifications
              </h4>
              {certs.map((c) => (
                <div className="cert-card" key={c.title}>
                  <div className="cert-icon">{c.code}</div>
                  <div>
                    <h4>{c.title}</h4>
                    <span>{c.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & PUBLICATIONS */}
      <section id="achievements" className="bg-alt">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Achievements &amp; Publications
          </span>
          <h2 className="section-title" data-reveal>
            Recognition &amp; research
          </h2>
          <div className="timeline">
            {achievements.map((a) => (
              <div className="tl-item" data-reveal key={a.title}>
                <h3>{a.title}</h3>
                <div className="meta">{a.meta}</div>
                <p>{a.desc}</p>
              </div>
            ))}
            {publications.map((pub) => (
              <div className="tl-item" data-reveal key={pub.title}>
                <h3>{pub.title}</h3>
                <div className="meta">
                  {pub.venue} · {pub.role}
                </div>
                <p>{pub.desc}</p>
                {pub.link && (
                  <a
                    className="pub-link"
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View publication (DOI) →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <span className="eyebrow" data-reveal>
            Contact
          </span>
          <h2 className="section-title" data-reveal>
            Let&apos;s build something.
          </h2>
          <p className="contact-lead" data-reveal>
            Open to AI/ML, data, and software engineering opportunities. Feel
            free to reach out if you'd like to connect.
          </p>
          <div className="contact-links" data-reveal>
            <a
              className="btn btn-primary"
              href="mailto:mariangelicaa1412@gmail.com"
            >
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/maria-angelica1214"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href="/CV_Maria_Angelica.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Maria Angelica Vinesytha Chandrawan · Built
        with Next.js
      </footer>
    </>
  );
}
