import React, { useEffect, useState } from 'react'
import './style.css'
import { NavLinks } from '../../constants/NavLinks';

export default function Navbar({ active, setActive }) {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        setOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
            <div
                className={`mx-4 md:mx-auto md:max-w-4xl rounded-2xl transition-all duration-500 px-6 py-3 ${scrolled ? "nav-glass" : ""}`}
            >
                <div className="flex items-center justify-between">
                    <span className="font-black text-xl tracking-tight">
                        <span className="nav-logo-gradient">
                            Lukman
                        </span>
                        <span className="text-white">
                            Hafidzzz
                        </span>
                    </span>
                    <div className="hidden md:flex items-center gap-1">
                        {NavLinks.map((n) => {
                            const isActive = active === n;

                            return (
                                <button
                                    key={n}
                                    onClick={() => scrollTo(n)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive ? "nav-link-active" : "nav-link"}`}
                                >
                                    {n}
                                </button>
                            );
                        })}
                    </div>
                    <button className="md:hidden text-slate-400 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
                {open && (
                    <div className="md:hidden pt-4 pb-2 flex flex-col gap-1 mt-3 nav-divider">
                        {NavLinks.map((n) => (
                            <button
                                key={n}
                                onClick={() => scrollTo(n)}
                                className="text-left px-4 py-3 rounded-xl text-sm nav-mobile-link transition-all"
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}