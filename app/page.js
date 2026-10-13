"use client";

import { useEffect } from "react";

const projects = [
  {
    tag: "Generative AI · Document QA",
    title: "Internal Document QA",
    year: "2025 – 2026 · Thesis",
    desc: "Developed a local AI-powered question-answering system for STIE Ciputra Makassar’s internal documents. Implemented a RAG pipeline using LlamaIndex and ChromaDB, with Ollama for local language model inference. Designed a Human-in-the-Loop workflow that escalates unanswered queries to QA staff and incorporates their responses into the knowledge base.",
    chips: ["Python", "LLamaIndex", "ChromaDB", "Ollama", "FastAPI", "React"],
    images: ["rag-architecture.png"],
    video: "https://youtu.be/0bKglAhjbMs",
  },
  {
    tag: "AIoT · Computer Vision",
    title: "Smart Parking Gate",
    year: "2023 · Competition Finalist · Published",
    desc: "Developed an automated parking gate prototype that detects vehicle license plates using YOLOv4 and recognizes their characters using EasyOCR. The system integrates computer vision with an ESP32-based prototype to demonstrate automated vehicle identification for parking access.",
    chips: ["Python", "YOLOv4", "EasyOCR", "Firebase", "ESP32"],
    images: ["parkinggate-1.png", "parkinggate-2.png"],
    video: "https://youtu.be/1dSMhQ-2ipQ",
  },
  {
    tag: "AI/ML · COMPUTER VISION",
    title: "PetGuardian",
    year: "2024 · Published 2025",
    desc: "Developed an AI-powered pet-care platform with breed identification, skin disease detection, explanations and care guidance, and personalized grooming recommendations. Contributed to building the AI features using Roboflow for computer vision and Gemini API for AI-powered functionality, integrated into a React frontend and Flask backend.",
    chips: ["React", "Flask", "Gemini API", "Roboflow"],
    images: ["petguardian-1.png", "petguardian-2.png"],
    video: "https://youtube.com/shorts/ZoaLZbL8P94",
    paper: "J-CIS, Vol. 8 No. 2 (2025)",
  },
  {
    tag: "ipadOS Development · Schedulling",
    title: "Scheddy",
    year: "2025 · Apple Developer Academy Project",
    desc: "Developed an iPadOS scheduling application for Ciputra Golf Operations to support daily scheduling for approximately 180 caddies. As Project Manager and Frontend Developer, coordinated timelines, task assignments, and daily team meetings while building the SwiftUI interface and integrating API data.",
    chips: ["Swift", "SwiftUI", "Express.js", "Prisma", "PostgreSQL"],
    images: ["scheddy-1.png", "scheddy-2.png"],
    video: "",
  },
  {
    tag: "iOS · EDUACATION",
    title: "Talkative",
    year: "2025 · Apple Developer Academy Project",
    desc: "Designed the UI/UX of an iOS pronunciation-learning app for Indonesian learners who want to improve their English speaking skills. Applied Apple’s Human Interface Guidelines to the interface and designed learning experiences involving interactive pronunciation practice and spaced-repetition flashcards.",
    chips: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "AVFoundation",
      "Core Haptics",
      "Core ML",
    ],
    images: ["talkative-1.png", "talkative-2.png"],
    video: "",
  },
  {
    tag: "Data Science · Recommendation System",
    title: "Course Recommendation System",
    year: "2025 · Academic Project",
    desc: "Developed a course recommendation system using Python to process course data and identify courses with similar content. Applied TF-IDF to represent course descriptions and cosine similarity to compare courses and generate content-based recommendations.",
    chips: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "Cosine Similarity"],
    images: [],
    video: "",
    links: [
      {
        label: "Google Colab",
        url: "https://colab.research.google.com/drive/1S5Pega5S873EVkUn8UEsC_LScLMDw2B6?usp=sharing",
      },
    ],
    platform: "Google Colab",
    pipeline: [
      "Merge Alison, Coursera & Udemy data",
      "Clean & normalize price, level, language, duration",
      "TF-IDF on title + description (1–2 grams)",
      "Cosine similarity (60% keyword + 40% filters)",
      "Top-5 recommendations + evaluation",
    ],
    metrics: [
      { value: "10,325", label: "Courses, 3 platforms" },
      { value: "97%", label: "Avg keyword precision" },
      { value: "Top 5", label: "Results per query" },
    ],
  },
  {
    tag: "Web Development · Academic",
    title: "UCM Portal",
    year: "2023 · Academic Project",
    desc: "Implemented frontend interfaces for a student recruitment portal, translating initial UI designs into responsive web pages using HTML, CSS, and JavaScript. Integrated API data into the frontend to enable students to explore and register for open student organization and committee recruitment, while allowing organizers to publish recruitment opportunities.",
    chips: ["HTML", "CSS", "JavaScript", "MySQL", "API Integration"],
    images: ["ucmportal-1.png"],
    video: "",
    links: [
      {
        label: "Github",
        url: "https://github.com/angelica1412/UCM-Portal-Makassar.git",
      },
    ],
  },
  {
    tag: "Web Development · Mental Health",
    title: "Curhat-In",
    year: "2023 · Academic Project",
    desc: "Contributed to frontend development by translating initial UI designs into responsive web interfaces for a mental health consultation platform. The platform enables students to seek support through chat-based consultations with psychiatrists and an integrated chatbot.",
    chips: ["React", "Java", "MySQL"],
    images: ["curhatin-1.png", "curhatin-2.png"],
    video: "",
    links: [
      {
        label: "Live Demo",
        type: "prototype",
        url: "https://curhatin-web.vercel.app",
      },
    ],
  },
];

const skillGroups = [
  {
    title: "AI / ML & Data",
    items: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "RAG",
      "LLMs & Embeddings",
      "Vector Retrieval",
      "Human-in-the-Loop",
      "YOLO & OCR",
    ],
  },
  {
    title: "Programming & Development",
    items: [
      "Swift",
      "SwiftUI",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Java",
      "REST API",
      "SQL",
    ],
  },
  {
    title: "Tools & Frameworks",
    items: [
      "Git & GitHub",
      "Figma",
      "Flask",
      "FastAPI",
      "Express.js",
      "Prisma",
      "ChromaDB",
      "Ollama",
      "Roboflow",
    ],
  },
];

const certIcons = {
  brain: (
    <>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </>
  ),
  language: (
    <>
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </>
  ),
  chat: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
};

const certs = [
  {
    icon: "brain",
    code: "NLP",
    title: "Natural Language Processing and Computer Vision (MDL-214)",
    meta: "IBM SkillsBuild · 2025",
    desc: "Covers foundational concepts in natural language processing and computer vision, including AI techniques for working with text and visual data.",
    link: "https://drive.google.com/file/d/1ptmVdGlvC35YsXA0bhMEZtT9yA6x3vEy/view?usp=share_link",
  },
  {
    icon: "chat",
    code: "BOT",
    title: "Build Your First Chatbot (MDL-510)",
    meta: "IBM SkillsBuild · 2025",
    desc: "Introduces chatbot development concepts and the fundamentals of building conversational experiences using AI-related technologies.",
    link: "https://drive.google.com/file/d/1aoPBgDW1myBfVLsC0bvQPrlDT4xeosec/view?usp=share_link",
  },
  {
    icon: "code",
    code: "BNSP",
    title: "Programmer Competency Certification",
    meta: "BNSP · 2025",
    desc: "Demonstrates competency in structured and object-oriented programming, database access, code documentation, debugging, and unit testing.",
    link:"https://drive.google.com/file/d/1JVhHBps3S9xidDdB-_GsSaGCLH0yfivo/view?usp=share_link",
  },
  {
    icon: "language",
    code: "English Score",
    title: "EnglishScore Core Skills",
    meta: "EnglishScore · 2026",
    desc: "Achieved CEFR C1 (Advanced) in the EnglishScore Core Skills test, demonstrating advanced English proficiency across grammar, vocabulary, reading, and listening.",
    link: "https://drive.google.com/file/d/1H7EShTOpNBWpZB9zjFMXS54XR-J4kkSo/view?usp=share_link",
  },
];

const achievements = [
  {
    title: "Finalist (AIoT Competition)",
    meta: "Universitas Udayana, Bali · 2023",
    desc: "Reached the finals of the Electrical and Computer Competition with an AI-IoT smart parking system combining license plate detection and recognition. Presented the project through a technical paper and a working prototype.",
  },
  {
    title: "P2MW Grant Recipient",
    meta: "Student Entrepreneurship Development Program",
    desc: "Co-founded a 3D printing service business that received P2MW funding. Contributed to proposal development, financial planning, and financial reporting.",
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
    link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://jurnal.kharisma.ac.id/jtriste/article/download/389/272/&ved=2ahUKEwjXj_rOuLaXAxXU1TgGHe6iIJwQFnoECA0QAQ&usg=AOvVaw2-kHKlY1XeH_CTgSNdqX-E",
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
              AI / ML Enthusiast · SOFTWARE DEVELOPMENT · FRESH GRADUATE
            </span>
            <h1>
              Maria Angelica <span className="accent">Vinesytha</span>{" "}
              Chandrawan
            </h1>
            <p className="hero-lead">
              Informatics fresh graduate focused on AI and Machine Learning,
              with hands-on experience in RAG, computer vision, and software
              development.
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
              <b>Experience</b>
              <span>AI Research, iOS & Web Development</span>
            </div>
            <div className="fact">
              <b>Tech</b>
              <span>Python, Swift, React, RESTFul API</span>
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
            Turning curiosity into practical solutions.
          </h2>
          <div className="about-grid">
            <div className="about-text" data-reveal>
              <p>
                I'm an Informatics graduate from Universitas Ciputra (Kampus
                Kota Makassar) with a strong interest in Artificial Intelligence
                and Machine Learning. My journey in technology has allowed me to
                explore different areas, from AI research and software
                development to product development and project management.
              </p>
              <p>
                My work includes developing a Retrieval-Augmented Generation
                system with Human-in-the-Loop for internal document Quality
                Assurance (QA), computer vision solutions using YOLO and OCR,
                and AI-powered applications. Beyond AI, my experience at the
                Apple Developer Academy gave me the opportunity to build iOS
                products with cross-functional teams and take on roles in
                development, design, and project management.
              </p>
              <p>
                I enjoy turning ideas and problems into practical solutions,
                learning new technologies along the way, and collaborating with
                people from different backgrounds. I'm currently looking to grow
                professionally while contributing to meaningful technology and
                data-driven products.
              </p>
            </div>
            <div className="about-photo" data-reveal>
              <img
                src="/profile.png"
                alt="Foto Maria Angelica"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add(
                    "about-photo-empty"
                  );
                }}
              />
              <span className="about-photo-label">profile.jpg</span>
            </div>
          </div>
          <div className="about-highlights" data-reveal>
            <div className="highlight">
              <b>2×</b>
              <span>First-Author Publications</span>
            </div>
            <div className="highlight">
              <b>10 Months</b>
              <span>Apple Developer Academy</span>
            </div>
            <div className="highlight">
              <b>Finalist</b>
              <span>AIoT Competition at Udayana University</span>
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
            A selection of projects across AI/ML, iOS, and web development from
            research and experimentation to practical applications.
          </p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" data-reveal key={i}>
                {p.images && p.images.length > 0 && (
                  <div className="project-media">
                    <div className="shots">
                      {p.images.map((img) => (
                        <div className="shot" key={img}>
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

                {!(p.images && p.images.length > 0) && (
                  <div className="project-media">
                    <div className="notebook-panel">
                      <span className="notebook-badge">
                        {p.platform || "Notebook"}
                      </span>
                      {p.pipeline && (
                        <ol className="pipeline">
                          {p.pipeline.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                      )}
                      {p.metrics && (
                        <div className="metrics">
                          {p.metrics.map((m) => (
                            <div className="metric" key={m.label}>
                              <strong>{m.value}</strong>
                              <span>{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="project-body">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <div className="year">{p.year}</div>
                  <p>{p.desc}</p>
                  {(p.video || (p.links && p.links.length > 0)) && (
                    <div className="project-links">
                      {p.video && (
                        <a
                          className="project-link primary"
                          href={p.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ▶ Watch demo
                        </a>
                      )}
                      {p.links &&
                        p.links.map((l) => {
                          const kind =
                            l.type ||
                            (l.url.includes("github.com")
                              ? "github"
                              : l.url.includes("colab")
                              ? "colab"
                              : l.url.includes("figma.com")
                              ? "prototype"
                              : "other");
                          return (
                            <a
                              className={`project-link ${kind}`}
                              key={l.url}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {kind === "github" && (
                                <svg
                                  className="link-icon"
                                  viewBox="0 0 16 16"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                              )}
                              {kind === "prototype" && (
                                <svg
                                  className="link-icon"
                                  viewBox="0 0 24 24"
                                  width="16"
                                  height="16"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                              )}
                              {l.label} ↗
                            </a>
                          );
                        })}
                    </div>
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
              {/* {certs.map((c) => (
                <div className="cert-card" key={c.title}>
                  <div className="cert-icon">{c.code}</div>
                  <div>
                    <h4>{c.title}</h4>
                    <span>{c.meta}</span>
                  </div>
                </div>
              ))} */}

              {certs.map((c) => (
                <div className="cert-card" key={c.title}>
                  <div className="cert-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {certIcons[c.icon] || certIcons.award}
                    </svg>
                  </div>
                  <div>
                    <h4>{c.title}</h4>
                    <span>{c.meta}</span>
                    {/* {c.desc && <p className="cert-desc">{c.desc}</p>} */}
                    {c.link && (
                      <a
                        className="cert-verify"
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View certificate ↗
                      </a>
                    )}
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
            Proof of work
          </h2>
          {/* <div className="timeline">
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
          </div> */}

<div className="split-col">
  <div>
    <h4 className="col-heading" data-reveal>
      Achievements
    </h4>
    <div className="timeline">
      {achievements.map((a) => (
        <div className="tl-item" data-reveal key={a.title}>
          <h3>{a.title}</h3>
          <div className="meta">{a.meta}</div>
          <p>{a.desc}</p>
        </div>
      ))}
    </div>
  </div>

  <div>
    <h4 className="col-heading" data-reveal>
      Publications
    </h4>
    <div className="timeline">
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
            Let&apos;s build something together.
          </h2>
          <p className="contact-lead" data-reveal>
            I'm open to opportunities in AI/ML, data, and software engineering. Feel
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
        © {new Date().getFullYear()} Maria Angelica Vinesytha Chandrawan
      </footer>
    </>
  );
}
