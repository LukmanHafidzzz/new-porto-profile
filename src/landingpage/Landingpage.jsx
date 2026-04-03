import { useState, useEffect, useRef } from "react";
import './style.css';

import NewNavbar from "../components/navbar/Navbar";
import NewHero from "../components/hero/Hero";
import NewAbout from "../components/about/about";
import NewSkill from "../components/skill/Skill";
import { navLinks } from "../constants/navLinks";

const C1 = "#5431ed";
const C2 = "#7456FF";
const C3 = "#8368FF";
const GRAD = `linear-gradient(135deg, ${C1}, ${C2}, ${C3})`;
const GRAD_TEXT = `linear-gradient(135deg, ${C3}, ${C2})`;

const PROJECTS = [
    {
        title: "EduConnect Platform",
        image: "", // Ganti dengan path screenshot: "/screenshots/educonnect.png"
        desc: "A fullstack learning management system with real-time collaboration, video streaming, and progress tracking for students and educators.",
        tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
        accent: C2,
        link: "#",
        github: "#",
    },
    {
        title: "TaskFlow API",
        image: "", // Ganti dengan path screenshot: "/screenshots/taskflow.png"
        desc: "RESTful API backend for a project management tool with authentication, role-based access control, and real-time notifications.",
        tech: ["Express.js", "JWT", "MongoDB", "Redis"],
        accent: "#a78bfa",
        link: "#",
        github: "#",
    },
    {
        title: "WeatherNow App",
        image: "", // Ganti dengan path screenshot: "/screenshots/weathernow.png"
        desc: "A responsive weather dashboard integrating multiple APIs with beautiful data visualizations and 7-day forecast capabilities.",
        tech: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
        accent: "#818cf8",
        link: "#",
        github: "#",
    },
    {
        title: "DevBlog CMS",
        image: "", // Ganti dengan path screenshot: "/screenshots/devblog.png"
        desc: "Full-featured content management system for developers with markdown support, syntax highlighting, and SEO optimization.",
        tech: ["Next.js", "TypeScript", "Prisma", "Vercel"],
        accent: C3,
        link: "#",
        github: "#",
    },
];

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setInView(true);
            },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
}

function Cursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [hov, setHov] = useState(false);
    useEffect(() => {
        const m = (e) => setPos({ x: e.clientX, y: e.clientY });
        const over = (e) => setHov(!!e.target.closest("a,button,[data-hover]"));
        window.addEventListener("mousemove", m);
        window.addEventListener("mouseover", over);
        return () => {
            window.removeEventListener("mousemove", m);
            window.removeEventListener("mouseover", over);
        };
    }, []);
    return (
        <>
            <div
                className={`cursor-dot ${hov ? "cursor-hover-dot" : ""}`}
                style={{
                    left: pos.x - 6,
                    top: pos.y - 6,
                }}
            />
            <div
                className={`cursor-ring ${hov ? "cursor-hover-ring" : ""}`}
                style={{
                    left: pos.x - 24,
                    top: pos.y - 24,
                }}
            />
        </>
    );
}

function FloatingOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="orb orb-1 animate-float-slow" />
            <div className="orb orb-2 animate-float-medium" />
            <div className="orb orb-3 animate-float-fast" />
            <div className="orb orb-4 animate-float-medium" />
        </div>
    );
}

// ─── EXPERIENCE ────────────────────────────────────────────────
function ExperienceSection() {
    const [ref, inView] = useInView(0.08);
    return (
        <section id="experience" className="py-32 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C3 }}>
                        Where I've Been
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Experience</h2>
                    <p className="text-slate-400 mb-16 max-w-xl">
                        My journey through internships, organizations, and freelance work.
                    </p>
                </div>

                <div className="relative pl-8">
                    {/* Vertical timeline line */}
                    <div
                        className="absolute left-[7px] top-2 bottom-2 w-px"
                        style={{ background: `linear-gradient(to bottom, ${C2}, transparent)` }}
                    />

                    <div className="flex flex-col gap-8">
                        {EXPERIENCES.map((exp, i) => (
                            <div
                                key={i}
                                className="relative transition-all duration-700"
                                style={{
                                    transitionDelay: `${i * 150}ms`,
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "translateY(24px)",
                                }}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-8 top-[6px] w-3.5 h-3.5 rounded-full border-2"
                                    style={{
                                        borderColor: C2,
                                        background: C1,
                                        boxShadow: `0 0 12px ${C2}55`,
                                    }}
                                />

                                <div
                                    className="rounded-2xl p-6 transition-all duration-300"
                                    style={{
                                        border: `1px solid ${C2}20`,
                                        background: `${C1}08`,
                                        backdropFilter: "blur(16px)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = `${C2}40`;
                                        e.currentTarget.style.transform = "translateX(4px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = `${C2}20`;
                                        e.currentTarget.style.transform = "translateX(0)";
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                                        <div>
                                            <p className="text-base font-black text-white">{exp.role}</p>
                                            <p className="text-sm font-semibold mt-1" style={{ color: C3 }}>
                                                {exp.place}
                                            </p>
                                        </div>
                                        <span
                                            className="text-xs font-semibold px-3 py-1.5 rounded-full"
                                            style={{
                                                border: `1px solid ${C2}30`,
                                                background: `${C1}12`,
                                                color: "#a78bfa",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {exp.duration}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.desc}</p>

                                    {/* Projects label */}
                                    <p
                                        className="text-xs font-bold tracking-widest uppercase mb-3"
                                        style={{ color: `${C3}70` }}
                                    >
                                        Project yang dikerjakan
                                    </p>

                                    {/* Projects list */}
                                    <div className="flex flex-col gap-2 mb-4">
                                        {exp.projects.map((p, pi) => (
                                            <div key={pi} className="flex items-start gap-2 text-sm text-slate-300">
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0"
                                                    style={{ background: C3 }}
                                                />
                                                <span>
                                                    <strong className="text-white font-semibold">{p.name}</strong> — {p.detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-3 py-1 rounded-lg text-slate-400"
                                                style={{
                                                    border: "1px solid rgba(255,255,255,0.08)",
                                                    background: "rgba(255,255,255,0.04)",
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── PROJECTS ──────────────────────────────────────────────────
function ProjectCard({ project, index, inView }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div
            className="group relative transition-all duration-700"
            style={{
                transitionDelay: `${index * 150}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
            }}
        >
            <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle, ${project.accent}28, transparent 70%)` }}
            />
            <div
                className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02]"
                style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: `linear-gradient(135deg, ${project.accent}10, ${C1}06)`,
                    backdropFilter: "blur(16px)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${project.accent}38`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
                {/* Top shimmer line */}
                <div
                    className="absolute top-0 left-0 right-0 h-px z-10"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
                />

                {/* ── IMAGE PREVIEW AREA ── */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        height: 190,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        background: `linear-gradient(135deg, ${project.accent}12, ${C1}08)`,
                    }}
                >
                    {/* Project number watermark */}
                    <span
                        className="absolute top-3 right-4 text-5xl font-black select-none font-mono z-10"
                        style={{ color: `${project.accent}18` }}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {project.image && !imgError ? (
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            style={{ opacity: 0.88 }}
                        />
                    ) : (
                        /* Placeholder when no image provided */
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                style={{ background: `${project.accent}18`, border: `1px solid ${project.accent}25` }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="3" width="20" height="14" rx="2" stroke={project.accent} strokeWidth="1.5" strokeOpacity="0.6" />
                                    <path d="M8 21h8M12 17v4" stroke={project.accent} strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p className="text-xs font-semibold" style={{ color: `${project.accent}50` }}>
                                Add screenshot to PROJECTS data
                            </p>
                        </div>
                    )}

                    {/* Bottom gradient fade */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-12"
                        style={{
                            background: `linear-gradient(to bottom, transparent, ${project.accent}08)`,
                        }}
                    />
                </div>

                {/* ── CARD BODY ── */}
                <div className="p-7">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300"
                                style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <a
                            href={project.link}
                            className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:scale-105"
                            style={{
                                background: `linear-gradient(135deg, ${project.accent}ee, ${project.accent}99)`,
                                boxShadow: `0 4px 16px ${project.accent}30`,
                            }}
                        >
                            Live Demo ↗
                        </a>
                        <a
                            href={project.github}
                            className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:scale-105"
                            style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.04)" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.09)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                        >
                            GitHub →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectsSection() {
    const [ref, inView] = useInView(0.05);
    return (
        <section id="projects" className="py-32 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: C3 }}>
                        What I've Built
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Projects</h2>
                    <p className="text-slate-400 mb-16 max-w-xl">
                        A selection of projects I've built with love, curiosity, and plenty of coffee.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Landingpage() {
    const [active, setActive] = useState("Home");
    useEffect(() => {
        const sections = navLinks.map((n) => document.getElementById(n.toLowerCase()));
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const id = e.target.id;
                        setActive(id.charAt(0).toUpperCase() + id.slice(1));
                    }
                });
            },
            { threshold: 0.4 }
        );
        sections.forEach((s) => s && obs.observe(s));
        return () => obs.disconnect();
    }, []);

    return (
        <div
            className="min-h-screen text-white relative overflow-x-hidden"
        >
            <Cursor />
            <FloatingOrbs />
            <NewNavbar active={active} setActive={setActive} />

            <main>
                <NewHero />
                <NewAbout />
                <NewSkill />
                <ExperienceSection />
                <ProjectsSection />
            </main>
        </div>
    );
}