import { ProjectConstant } from "../../constants/ProjectConstant";
import { UseInView } from "../../hooks/UseInView";
import './style.css';
import ProjectCard from "./ProjectCard";

export default function Project() {
    const [ref, inView] = UseInView(0.05);
    return (
        <section id="projects" className="py-32 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-sr-lavender">
                        What I've Built
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Projects</h2>
                    <p className="text-slate-400 mb-16 max-w-xl">
                        A selection of projects I've built with love, curiosity, and plenty of coffee.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {ProjectConstant.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
}