import { useInView } from "../../hooks/useInView";
import { skillCategories } from "../../constants/skillCategories";
import "./style.css";

export default function Skill() {
    const [ref, inView] = useInView(0.1);
    return (
        <section id="skills" className="py-32 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-sr-lavender">
                        What I Know
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Skills & Tools</h2>
                    <p className="text-slate-400 mb-16 max-w-xl">Technologies I work with to build modern, fullstack web applications.</p>
                </div>
                <div className="flex flex-col gap-10">
                    {skillCategories.map((cat, ci) => (
                        <div
                            key={cat.label}
                            className="transition-all duration-700"
                            style={{
                                "--cat-color": cat.color,
                                transitionDelay: `${ci * 120}ms`,
                                opacity: inView ? 1 : 0,
                                transform: inView ? "translateY(0)" : "translateY(24px)",
                            }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-2 h-2 rounded-full skill-cat-dot" />
                                <span className="text-xs font-bold tracking-widest uppercase skill-cat-label">
                                    {cat.label}
                                </span>
                                <div className="skill-cat-line" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill, si) => (
                                    <div
                                        key={skill}
                                        className="group relative transition-all duration-300 hover:scale-105"
                                        style={{ transitionDelay: `${ci * 120 + si * 50}ms` }}
                                    >
                                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md skill-badge-glow" />
                                        <div className="relative px-4 py-2.5 rounded-xl text-sm font-medium skill-badge">
                                            {skill}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}