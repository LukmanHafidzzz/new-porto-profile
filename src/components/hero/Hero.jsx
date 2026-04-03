import react, { useEffect, useState } from 'react';
import './style.css'

export default function Hero() {
    const [typed, setTyped] = useState("");
    const words = ["Fullstack Developer", "JS Enthusiast", "Web Craftsman", "Problem Solver"];
    const [wi, setWi] = useState(0);
    const [ci, setCi] = useState(0);
    const [del, setDel] = useState(false);

    useEffect(() => {
        const w = words[wi];
        const speed = del ? 38 : 85;
        const t = setTimeout(() => {
            if (!del) {
                if (ci < w.length) {
                    setTyped(w.slice(0, ci + 1));
                    setCi(ci + 1);
                } else setTimeout(() => setDel(true), 1800);
            } else {
                if (ci > 0) {
                    setTyped(w.slice(0, ci - 1));
                    setCi(ci - 1);
                } else {
                    setDel(false);
                    setWi((wi + 1) % words.length);
                }
            }
        }, speed);
        return () => clearTimeout(t);
    }, [ci, del, wi]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6">
            <div className="text-center max-w-4xl mx-auto">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in availability-badge"
                >
                    <span className="w-2 h-2 rounded-full animate-pulse availability-dot" />
                    <span className="text-sm font-medium availability-text">
                        Available for opportunities
                    </span>
                </div>

                <p className="text-slate-400 text-lg mb-3 animate-fade-in-delay-1">Hi there, I'm</p>

                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none animate-fade-in-delay-2">
                    <span className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                        Lukman Hafidz
                    </span>
                </h1>

                <div className="h-14 flex items-center justify-center mb-8 animate-fade-in-delay-3">
                    <span
                        className="text-2xl md:text-3xl font-bold hero-gradient-text"
                    >
                        {typed}
                    </span>
                    <span className="animate-blink text-2xl md:text-3xl font-bold ml-0.5 hero-cursor">
                        |
                    </span>
                </div>

                <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-in-delay-4">
                    A student of <span className="text-white font-semibold">Information Technology</span> at the{" "}
                    <span className="font-semibold university-text">
                        State University of Yogyakarta
                    </span>
                    , passionate about building powerful web experiences with{" "}
                    <span className="text-yellow-300 font-semibold">JavaScript</span> — from Frontend to Backend.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-4">
                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 rounded-2xl font-semibold text-white hero-btn-primary"
                    >
                        View My Work ↓
                    </button>
                    <button
                        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-4 rounded-2xl font-semibold text-white hero-btn-primary"
                    >
                        About Me
                    </button>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow opacity-40">
                    <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-12 scroll-indicator" />
                </div>
                {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow opacity-40">
                    <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-12" style={{ background: `linear-gradient(to bottom, ${C2}, transparent)` }} />
                </div> */}
            </div>
        </section>
    );
}