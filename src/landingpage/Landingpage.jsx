import { useState, useEffect } from "react";
import './style.css';

import NewNavbar from "../components/navbar/Navbar";
import NewHero from "../components/hero/Hero";
import NewAbout from "../components/about/About";
import NewSkill from "../components/skill/Skill";
import NewExperience from "../components/experience/Experience";
import NewProject from "../components/project/Project";
import { NavLinks } from "../constants/NavLinks";

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

export default function Landingpage() {
    const [active, setActive] = useState("Home");
    useEffect(() => {
        const sections = NavLinks.map((n) => document.getElementById(n.toLowerCase()));
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
                <NewExperience />
                <NewProject />
            </main>
        </div>
    );
}