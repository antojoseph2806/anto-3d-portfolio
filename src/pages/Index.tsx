import Navbar from "@/components/Navbar";
import MouseFollower from "@/components/MouseFollower";
import HeroScene from "@/components/HeroScene";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProjectCard from "@/components/ProjectCard";
import MarqueeText from "@/components/MarqueeText";
import ContactSection from "@/components/ContactSection";

const projects = [
  {
    title: "Mar Mathew Kavukatt Canonization Website",
    description:
      "Designed, developed, and deployed a full-stack canonization website for Mar Mathew Kavukatt under the requirements of the Archdiocese of Changanassery. Built with Next.js and MySQL, featuring dynamic content management, optimized performance, and SEO best practices.",
    tags: ["Next.js", "MySQL", "Full Stack", "SEO", "Client Project"],
    links: [
      {
        label: "LIVE",
        href: "https://marmathewkavukatt.org/",
      },
    ],
  },
  {
    title: "AKM Sree Rudra Kalari Website",
    description:
      "Designed and developed an SEO-optimized website for AKM Sree Rudra Kalari using Next.js, featuring program listings, treatment information, and streamlined booking workflows for enhanced user experience.",
    tags: ["Next.js", "SEO", "UI/UX", "Client Project"],
    links: [
      {
        label: "LIVE",
        href: "https://www.akmsreerudra.com/",
      },
    ],
  },
  {
    title: "Room Booking System",
    description:
      "Built a room booking platform using Node.js and MongoDB for real-time booking management and seamless data storage.",
    tags: ["Node.js", "MongoDB", "Express", "REST API"],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/antojoseph2806/room-booking-backend-nodejs",
      },
    ],
  },
  {
    title: "Full-Stack Car Rental System",
    description:
      "Designed and deployed a full-stack car rental system with REST APIs, database optimization, and cloud deployment to improve accessibility and performance.",
    tags: ["Node.js", "MongoDB", "Full Stack", "Cloud Deployment"],
    links: [
      {
        label: "LIVE",
        href: "https://ajmcars.netlify.app/",
      },
    ],
  },
  {
    title: "Real-Time IoT Security System",
    description:
      "Created an IoT security dashboard with ESP32, proximity and sound sensors, plus Socket.IO streaming for low-latency monitoring and intrusion detection.",
    tags: ["ESP32", "Node.js", "Socket.IO", "IoT"],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/antojoseph2806/iot-security-system",
      },
    ],
  },
  {
    title: "IoT-Based RFID Attendance System",
    description:
      "Developed RFID-based attendance tracking with ESP32, RC522, NTP synchronization, and a responsive dashboard for live and historical monitoring.",
    tags: ["ESP32", "RFID", "Node.js", "Dashboard"],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/antojoseph2806/RFID-attendance-system",
      },
    ],
  },
  {
    title: "Pneumonia Detection System",
    description:
      "Built a web-based diagnostic tool that uses a CNN model to detect pneumonia from chest X-ray images with a Bootstrap frontend and Django backend.",
    tags: ["Python", "Django", "CNN", "SQLite"],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/antojoseph2806/pneumonia-detection-system",
      },
    ],
  },
  {
    title: "AgriCorus",
    description:
      "Created a smart agricultural platform for land leasing, crowdfunding, agri-commerce, digital contracts, and secure escrow to connect landowners, farmers, investors, and vendors.",
    tags: ["AgriTech", "Crowdfunding", "E-Commerce", "Platform"],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/antojoseph2806/agricorus",
      },
    ],
  },
  {
    title: "Interactive Personal Website",
    description:
      "Designed and developed a modern React.js website with a custom visual identity, responsive layouts, and motion-rich sections to highlight work, skills, and full-stack experience.",
    tags: ["React.js", "JavaScript", "CSS", "UI Design"],
  },
  {
    title: "Live Science Quiz Web App",
    description:
      "Built a responsive science quiz application with real-time quiz flows, payment integration, and automatic certificate generation using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "Quiz App"],
    links: [
      {
        label: "GITHUB",
        href: "https://github.com/antojoseph2806/quiz-app",
      },
    ],
  },
];

const stats = [
  { end: 10, suffix: "", label: "Featured Projects" },
  { end: 2, suffix: "", label: "Internships" },
  { end: 5, suffix: "", label: "Certifications" },
  { end: 2, suffix: "", label: "Honor Lists" },
];

const experience = [
  {
    role: "Node.js Intern",
    company: "Leopard Tech Labs",
    location: "Kanjirappally, Kerala",
    period: "Apr 2025 - May 2025",
    points: [
      "Built RESTful backend APIs using Node.js and Express with 90% test coverage.",
      "Improved AWS-hosted database performance by optimizing queries and boosting data handling efficiency by about 25%.",
    ],
  },
  {
    role: "Python Development Intern",
    company: "LCC Computer Education",
    location: "Kochi, Kerala",
    period: "Nov 2023 - Jan 2024",
    points: [
      "Created and optimized Python mini-projects using Git version control.",
      "Automated workflow scripts to reduce manual effort by approximately 20%.",
    ],
  },
];

const education = [
  {
    school: "Amal Jyothi College of Engineering",
    degree: "Master of Computer Application (MCA)",
    detail: "APJ Abdul Kalam Technological University | CGPA: 8.26",
    period: "2024 - 2026",
  },
  {
    school: "MES College Nedumkandam",
    degree: "Bachelor of Computer Application (BCA)",
    detail: "Mahatma Gandhi University | CGPA: 6.61",
    period: "2021 - 2024",
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "C", "C++", "OOP", "DSA"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "PHP", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud & Workflow",
    items: ["AWS", "Azure", "GCP", "Git", "Agile/Scrum"],
  },
];

const certifications = [
  "Human-Computer Interaction (HCI) - NPTEL, IIT Delhi",
  "Introduction to Internet of Things (IoT) - NPTEL, IIT Kharagpur",
  "ISTE Student Membership Certificate",
  "NOSQL Course Training - MongoDB Developer, Infosys Springboard",
  "React.js - Infosys Springboard",
];

const awards = [
  {
    title: "Principal's Honor List (S1)",
    href: "https://www.aesajce.in/honourcertificate.php?id=Z1l4ZlBCVjBEdWxxNVp5aktJcjFBdz09",
  },
  {
    title: "Director's Honor List (S2)",
    href: "https://www.aesajce.in/honourcertificate.php?id=VFdDZHh2WS9FSm92TDk0MTV2RWlMdz09",
  },
];

const Index = () => {
  return (
    <div className="scanlines noise-overlay bg-background min-h-screen">
      <HeroScene />
      <div className="relative z-10">
        <MouseFollower />
        <Navbar />

        <section className="relative flex h-[90vh] items-center justify-center overflow-hidden px-4 sm:px-6" aria-labelledby="home-title">
          <div className="relative z-10 text-center">
            <h1 id="home-title" className="mb-4 text-center font-mono text-xs uppercase tracking-[0.35em] text-accent sm:text-sm" style={{ textIndent: '0.175em' }}>
              Anto Joseph Maruthaniyil
            </h1>
            <div
              aria-hidden="true"
              className="glitch-text text-[3.5rem] font-display font-bold leading-none tracking-tighter text-foreground select-none xs:text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] -ml-2 sm:-ml-4 md:-ml-6"
              data-text="AJ"
            >
              AJ
            </div>
            <p className="mx-auto mt-4 max-w-[22rem] font-mono text-[11px] uppercase tracking-[0.18em] text-foreground sm:max-w-none sm:text-sm sm:tracking-[0.3em]">
              Assistant Professor | Full Stack Developer | MCA Graduate
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground sm:text-base">
              Passionate about building web applications, IoT solutions, and cloud systems. 
              Currently working as an Assistant Professor while actively developing real-world tech projects.
            </p>
          </div>

        </section>

        <section id="about" className="relative px-6 py-32 md:px-12" aria-labelledby="about-title">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
              <ScrollReveal direction="left">
                <div className="flex flex-col gap-8">
                  <div className="relative overflow-hidden rounded-lg border border-border bg-card">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                    <div className="relative z-10 p-8">
                      <figure className="mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-lg border-2 border-accent/30 bg-muted">
                        <img
                          src="/anto-joseph-maruthaniyil-software-developer-idukki.png"
                          alt="Anto Joseph Maruthaniyil, Assistant Professor of Computer Science at St. Antony's College Peruvanthanam, Kerala"
                          title="Anto Joseph Maruthaniyil - Assistant Professor, Computer Science"
                          width="1080"
                          height="1080"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                        <figcaption className="sr-only">
                          Portrait of Anto Joseph Maruthaniyil,
                          Assistant Professor in the Department of Computer Science at St. Antony's College Peruvanthanam, Kerala.
                        </figcaption>
                      </figure>
                      <div className="mt-6 text-center">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                          Anto Joseph
                        </p>
                        <p className="mt-1 text-sm text-foreground">
                          Professor & Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 font-mono text-sm text-foreground sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-accent">Location</p>
                      <p className="mt-2">Udayagiri, Kerala</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-accent">Based In</p>
                      <p className="mt-2">Idukki District</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-accent">Education</p>
                      <p className="mt-2">MCA Graduate</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-accent">Specialties</p>
                      <p className="mt-2">Web Apps, IoT, Cloud</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="space-y-8">
                  <div>
                    <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                      About
                    </p>
                    <h2 id="about-title" className="text-4xl font-display font-bold leading-tight text-foreground md:text-5xl">
                      Passionate developer building modern web apps and IoT solutions.
                    </h2>
                  </div>

                  <div>
                    <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                      Professional Summary
                    </p>
                    <h3 className="mb-6 text-3xl font-display font-bold leading-tight text-foreground md:text-4xl">
                      Hi, I&apos;m <span className="text-accent">Anto Joseph Maruthaniyil</span>
                    </h3>
                    <p className="mb-4 text-justify text-lg text-foreground">
                      I'm deeply interested in web development, IoT systems, and building technology that solves real problems. Currently working as an Assistant Professor at St. Antony's College Peruvanthanam, I dedicate my time and energy to developing full-stack applications, IoT prototypes, and cloud-based platforms.
                    </p>
                    <p className="text-justify leading-relaxed text-foreground">
                      My passion lies in creating practical solutions with React, Node.js, MongoDB, ESP32, and modern development tools. From room booking systems and car rental platforms to real-time IoT security systems and RFID attendance tracking—I love the process of turning ideas into working products. I'm constantly exploring new technologies, experimenting with AI applications, and pushing the boundaries of what I can build.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="border-y border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="mb-12 text-center font-mono text-xs uppercase tracking-widest text-accent">
                Snapshot
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <MarqueeText text="FULL STACK | REACT | NODE.JS | MONGODB | IOT | CLOUD | " />

        <section id="resume" className="px-6 py-32 md:px-12">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                    Resume
                  </p>
                  <h2 className="text-4xl font-display font-bold text-foreground md:text-6xl">
                    Experience, education, technical skills, and achievements.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/Anto-Joseph-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="inline-flex items-center border border-accent px-6 py-3 font-mono text-sm tracking-[0.2em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  >
                    VIEW RESUME
                  </a>
                  <a
                    href="https://www.linkedin.com/in/antomaruthaniyil/"
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="inline-flex items-center border border-border px-6 py-3 font-mono text-sm tracking-[0.2em] text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 lg:grid-cols-2">
              <ScrollReveal direction="left">
                <div className="rounded-lg border border-border bg-card p-8">
                  <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    Experience
                  </p>
                  <div className="space-y-6">
                    {experience.map((item) => (
                      <div key={`${item.company}-${item.role}`} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="text-xl font-display font-semibold text-foreground">
                              {item.role}
                            </h3>
                            <p className="text-foreground">
                              {item.company} | {item.location}
                            </p>
                          </div>
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                            {item.period}
                          </p>
                        </div>
                        <ul className="mt-4 space-y-3 text-justify text-sm leading-relaxed text-foreground">
                          {item.points.map((point) => (
                            <li key={point}>- {point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="rounded-lg border border-border bg-card p-8">
                  <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    Education
                  </p>
                  <div className="space-y-6">
                    {education.map((item) => (
                      <div key={`${item.school}-${item.degree}`} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h3 className="text-xl font-display font-semibold text-foreground">
                              {item.degree}
                            </h3>
                            <p className="text-foreground">{item.school}</p>
                            <p className="mt-2 text-sm text-foreground">{item.detail}</p>
                          </div>
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                            {item.period}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <ScrollReveal>
                <div className="rounded-lg border border-border bg-card p-8">
                  <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    Technical Skills
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    {skillGroups.map((group) => (
                      <div key={group.title}>
                        <h3 className="mb-3 text-lg font-display font-semibold text-foreground">
                          {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={`${group.title}-${item}`}
                              className="rounded border border-border bg-secondary px-2.5 py-1 text-xs font-mono text-foreground"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="space-y-8">
                  <div className="rounded-lg border border-border bg-card p-8">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      Certifications
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-foreground">
                      {certifications.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-8">
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      Awards
                    </p>
                    <div className="space-y-3">
                      {awards.map((award) => (
                        <a
                          key={award.title}
                          href={award.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-sm text-foreground transition-colors duration-300 hover:text-accent"
                        >
                          - {award.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-32 md:px-12">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-16">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  Projects
                </p>
                <h2 className="text-4xl font-display font-bold text-foreground md:text-6xl">
                  Professional client work and technical projects.
                </h2>
              </div>
            </ScrollReveal>

            {/* Client Projects Section */}
            <ScrollReveal>
              <div className="mb-8">
                <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-accent flex items-center gap-3">
                  <span className="h-px w-8 bg-accent"></span>
                  Professional Client Projects
                </h3>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2 mb-16">
              {projects.slice(0, 2).map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 100}>
                  <ProjectCard {...project} index={i} />
                </ScrollReveal>
              ))}
            </div>

            {/* Academic & Personal Projects Section */}
            <ScrollReveal>
              <div className="mb-8">
                <h3 className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-accent flex items-center gap-3">
                  <span className="h-px w-8 bg-accent"></span>
                  Academic & Personal Projects
                </h3>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.slice(2).map((project, i) => (
                <ScrollReveal key={project.title} delay={i * 100}>
                  <ProjectCard {...project} index={i + 2} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <MarqueeText text="NODE.JS | REACT | EXPRESS | MONGODB | AWS | PYTHON | " />

        <section id="contact" className="border-t border-border px-6 py-32 md:px-12">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-12 max-w-3xl">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  Contact
                </p>
                <h2 className="mb-6 text-4xl font-display font-bold text-foreground md:text-6xl">
                  Let&apos;s collaborate on development projects and tech innovations.
                </h2>
                <p className="text-lg text-foreground">
                  Open to freelance projects, collaborations, consulting opportunities, 
                  and discussions about web development, IoT systems, and emerging technologies.
                </p>
              </div>
            </ScrollReveal>

            <ContactSection />
          </div>
        </section>

        <footer className="border-t border-border px-6 py-8 md:px-12">
          <div className="mx-auto flex max-w-6xl items-center justify-center">
            <span className="font-mono text-xs text-foreground">
              Copyright 2026 Anto Joseph. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
