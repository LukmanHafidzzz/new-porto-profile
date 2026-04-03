import { UseInView } from "../../hooks/UseInView";
import { Experiences } from "../../constants/Experiences";
import "./style.css";

export default function Experience() {
    const [ref, inView] = UseInView(0.08);
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
                    <div
                        className="absolute left-[7px] top-2 bottom-2 w-px vertical-timeline-line"
                    />
                    <div className="flex flex-col gap-8">
                        {Experiences.map((exp, i) => (
                            <div
                                key={i}
                                className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div
                                    className="absolute -left-8 top-[6px] w-3.5 h-3.5 rounded-full border-2 exp-timeline-dot"
                                />
                                <div className="rounded-2xl p-6 exp-card">
                                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                                        <div>
                                            <p className="text-base font-black text-white">{exp.role}</p>
                                            <p className="text-sm font-semibold mt-1 project-header-place">
                                                {exp.place}
                                            </p>
                                        </div>
                                        <span
                                            className="text-xs font-semibold px-3 py-1.5 rounded-full project-header-duration"
                                        >
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.desc}</p>
                                    <p
                                        className="text-xs font-bold tracking-widest uppercase mb-3 project-label"
                                    >
                                        Project yang dikerjakan
                                    </p>

                                    <div className="flex flex-col gap-2 mb-4">
                                        {exp.projects.map((p, pi) => (
                                            <div key={pi} className="flex items-start gap-2 text-sm text-slate-300">
                                                <span
                                                    className="w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0 project-list-bg"
                                                />
                                                <span>
                                                    <strong className="text-white font-semibold">{p.name}</strong> — {p.detail}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-3 py-1 rounded-lg text-slate-400 text-stack-border"
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