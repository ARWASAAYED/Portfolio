"use client";
import { motion } from "framer-motion";

const groups = [
  {
    cat: "Core Architecture",
    items: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3 Architecture",
    ],
  },
  {
    cat: "Immersive & Creative",
    items: [
      "Three.js",
      "WebGL Shaders",
      "Framer Motion",
      "GSAP Animation",
      "Canvas API",
      "3D Layouts",
    ],
  },
  {
    cat: "State & Data Layer",
    items: [
      "Zustand",
      "Redux Toolkit",
      "React Query",
      "GraphQL",
      "RESTful APIs",
      "Axios",
    ],
  },
  {
    cat: "Styling & UI Systems",
    items: [
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
      "SASS",
      "UI/UX",
      "Figma Translation",
    ],
  },
  {
    cat: "Ecosystem & Tooling",
    items: [
      "Git / GitHub",
      "Vite",
      "Webpack",
      "NPM / PNPM",
      "Vercel",
      "Chrome DevTools",
    ],
  },
  {
    cat: "Performance & QA",
    items: [
      "SEO Metrics",
      "Core Web Vitals",
      "Lighthouse",
      "Jest",
      "Unit Testing",
      "Lazy Loading",
    ],
  },
];

const anim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        <motion.div {...anim} className="skills-header">
          <div className="skills-subtitle">What I Work With</div>
          <h2 className="skills-title">
            Technical <span className="text-gradient">Ecosystem</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {groups.map((g, gi) => (
            <motion.div
              key={g.cat}
              {...anim}
              transition={{ delay: gi * 0.05 }}
              className="category-card"
            >
              <div className="category-header">
                <span className="accent-indicator" />
                <h3 className="category-title">{g.cat}</h3>
              </div>
              <div className="pills-container">
                {g.items.map((s) => (
                  <span key={s} className="skill-pill">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        .skills-section { padding: 7rem 2rem; background: var(--bg-secondary, #0c0c12); border-top: 1px solid var(--border, rgba(255,255,255,0.04)); border-bottom: 1px solid var(--border, rgba(255,255,255,0.04)); }
        .skills-wrapper { max-width: 1100px; margin: 0 auto; }
        .skills-header { margin-bottom: 4rem; }
        .skills-subtitle { font-size: 12px; font-weight: 700; color: #8B7FE8; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 0.5rem; font-family: 'Syne', sans-serif; }
        .skills-title { font-size: clamp(36px, 5vw, 54px); font-weight: 800; letter-spacing: -.03em; font-family: 'Syne', sans-serif; color: var(--text, #f4f4f6); margin: 0; line-height: 1.1; }
        .text-gradient { background: linear-gradient(135deg, #635ad9, #9b91f0, #ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
        .category-card { background: var(--bg-card, rgba(20, 20, 28, 0.4)); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--border, rgba(255, 255, 255, 0.05)); border-radius: 24px; padding: 1.75rem; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .category-card:hover { border-color: rgba(83, 74, 183, 0.35); background: var(--bg-card-hover, rgba(24, 24, 37, 0.6)); box-shadow: 0 12px 40px rgba(83, 74, 183, 0.04), inset 0 0 12px rgba(83, 74, 183, 0.05); }
        .category-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }
        .accent-indicator { width: 4px; height: 14px; background: #534AB7; border-radius: 2px; }
        .category-title { font-size: 15px; font-weight: 700; color: var(--text, #f4f4f6); margin: 0; }
        .pills-container { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-pill { font-size: 13px; font-weight: 500; padding: 6px 14px; border-radius: 30px; background: var(--skill-bg, rgba(255, 255, 255, 0.03)); color: var(--skill-color, #94a3b8); border: 1px solid var(--border-soft, rgba(255, 255, 255, 0.06)); transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .category-card:hover .skill-pill { color: var(--text, #e2e8f0); border-color: rgba(255, 255, 255, 0.1); }
        .skill-pill:hover { background: rgba(83, 74, 183, 0.12) !important; color: #fff !important; transform: translateY(-2px) scale(1.03); border-color: #8B7FE8 !important; box-shadow: 0 4px 12px rgba(83, 74, 183, 0.15); }
        @media (max-width: 480px) { .skills-section { padding: 5rem 1rem; } .skills-grid { grid-template-columns: 1fr; } .category-card { padding: 1.25rem; } }
      `}</style>
    </section>
  );
}
