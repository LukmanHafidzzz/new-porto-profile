import { useInView } from "../../hooks/useInView";
import { experiences } from "../../constants/experiences";
import "./style.css";

export default function Experience() {
    const [ref, inView] = useInView(0.08);
    return (
        <section id="experience" className="py-32 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-sr-lavender">
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
                        className="absolute left-[7px] top-2 bottom-2 w-px vertical-timeline-line"
                    />
                    <div className="flex flex-col gap-8">
                        {experiences.map((exp, i) => (
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