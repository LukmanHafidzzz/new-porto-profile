import { useState } from "react";
import './style.css';

export default function ProjectCard({ project, index, inView }) {
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
                    background: `linear-gradient(135deg, ${project.accent}10, var(--vr-lavender)06)`,
                    backdropFilter: "blur(16px)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${project.accent}38`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
                <div
                    className="absolute top-0 left-0 right-0 h-px z-10"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
                />
                <div
                    className="relative overflow-hidden"
                    style={{
                        height: 190,
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        background: `linear-gradient(135deg, ${project.accent}12, var(--vr-lavender)08)`,
                    }}
                >
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
                    <div
                        className="absolute bottom-0 left-0 right-0 h-12 bottom-gradient-fade"
                        style={{ "--accent": project.accent }}
                    />
                </div>
                <div className="p-7">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 rounded-lg text-xs font-medium text-slate-300 card-tech-border"
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