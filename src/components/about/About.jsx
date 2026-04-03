import { UseInView } from "../../hooks/UseInView";
import "./style.css";

export default function About() {
    const [ref, inView] = UseInView();
    return (
        <section id="about" className="py-32 px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-sr-lavender">
                        Who I Am
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-16">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Glass card */}
                    <div
                        className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 rounded-3xl blur-2xl about-card-glow"
                            />
                            <div
                                className="relative rounded-3xl p-8 about-card"
                            >
                                <div
                                    className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-black text-white mb-6 mx-auto about-avatar"
                                >
                                    YN
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white mb-1">Lukman Hafidz</h3>
                                    <p className="text-sm font-medium mb-5 text-st-lavender">
                                        Fullstack Web Developer
                                    </p>
                                    <div className="flex justify-center gap-2">
                                        {["GitHub", "LinkedIn", "Email"].map((s) => (
                                            <a
                                                key={s}
                                                href="#"
                                                className="about-social-link px-3 py-1.5 rounded-lg text-xs"
                                            >
                                                {s}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                    >
                        <div className="space-y-5 text-slate-400 leading-relaxed">
                            <p>
                                I am a student of <span className="text-white font-semibold">Information Technology</span> at the{" "}
                                <span className="font-semibold text-sr-lavender">
                                    State University of Yogyakarta
                                </span>{" "}
                                who is passionate about Fullstack web development.
                            </p>
                            <p>
                                My interest in technology is mainly focused on the use of{" "}
                                <span className="text-yellow-300 font-semibold">JavaScript</span> because of its incredible flexibility —
                                allowing me to work effectively on both <span className="text-white font-medium">Frontend</span> and{" "}
                                <span className="text-white font-medium">Backend</span> development.
                            </p>
                            <p>
                                I believe that every project is an opportunity to learn and grow. I am committed to continually exploring
                                and enhancing my abilities in the world of web development.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-10">
                            {[
                                { val: "10+", label: "Projects" },
                                { val: "2+", label: "Years Exp" },
                                { val: "5+", label: "Tech Stack" },
                            ].map(({ val, label }) => (
                                <div key={label} className="group relative">
                                    <div className="absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 stat-card-glow" />
                                    <div className="relative text-center p-4 rounded-2xl stat-card">
                                        <p className="text-3xl font-black stat-value">{val}</p>
                                        <p className="text-slate-500 text-xs mt-1">{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}