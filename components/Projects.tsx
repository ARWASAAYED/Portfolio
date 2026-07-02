"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Syne } from "next/font/google";
import {
  Code2,
  ExternalLink,
  Building2,
  Shield,
  Heart,
  Calendar,
  Laptop,
  ArrowUpRight,
} from "lucide-react";
import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const syneFont = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
});

const iconMap: Record<string, React.ReactNode> = {
  building: <Building2 size={15} />,
  shield: <Shield size={15} />,
  heart: <Heart size={15} />,
  calendar: <Calendar size={15} />,
  laptop: <Laptop size={15} />,
};

const colorMap: Record<string, { bg: string; icon: string }> = {
  purple: { bg: "rgba(83,74,183,0.12)", icon: "#8B7FE8" },
  teal: { bg: "rgba(15,110,86,0.12)", icon: "#2DD4BF" },
  coral: { bg: "rgba(153,60,29,0.12)", icon: "#FB923C" },
};

const badgeStyle: Record<string, { bg: string; color: string }> = {
  "full-stack": { bg: "rgba(153,60,29,0.14)", color: "#FB923C" },
  live: { bg: "rgba(15,110,86,0.14)", color: "#2DD4BF" },
  frontend: { bg: "rgba(83,74,183,0.14)", color: "#8B7FE8" },
};

type Filter = "all" | "full-stack" | "live" | "frontend";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  // Safeguard: Ensure projects exists as an array before processing
  const filtered = useMemo(() => {
    const rawProjects = projects || [];
    return rawProjects.filter(
      (p) => filter === "all" || p.tags?.includes(filter),
    );
  }, [filter]);

  return (
    <section id="projects" className={`pc ${syneFont.variable}`}>
      {/* ── header ── */}
      <motion.div {...fadeUp} className="ph">
        <div>
          <span className="badge-label">Selected Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="filter-pills" role="group" aria-label="Filter projects">
          {(["all", "full-stack", "frontend", "live"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`fpill${filter === f ? " fpill--on" : ""}`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      {/* ── grid ── */}
      {/* Removed container layout tag to prevent performance choke loops */}
      <div className="pg">
        {/* Changed mode to "wait" to let cards fade gracefully before layout updates */}
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const c = colorMap[project.color] ?? colorMap.purple;
            const img = project.image
              ? project.image.startsWith("/")
                ? project.image
                : `/${project.image}`
              : null;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`card${project.featured ? " card--featured" : ""}`}
              >
                {/* image */}
                <div className="card-img-wrap">
                  {img ? (
                    <Image
                      src={img}
                      alt={project.name}
                      fill
                      sizes="(max-width: 600px) 100vw, 400px"
                      className="card-img"
                      priority={project.featured}
                    />
                  ) : (
                    <div className="card-img-placeholder">
                      <span className="placeholder-initials">
                        {(project.name || "PR").slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="img-scrim" aria-hidden />
                  <div
                    className="icon-badge"
                    style={{ background: c.bg, color: c.icon }}
                    aria-hidden
                  >
                    {iconMap[project.icon]}
                  </div>
                </div>

                {/* body */}
                <div className="card-body">
                  <div className="card-head-row">
                    <h3 className="card-name">{project.name}</h3>
                    <div className="tags">
                      {(project.tags || [])
                        .filter((t) => t !== ("all" as string))
                        .map((tag) => (
                          <span
                            key={tag}
                            className="tag"
                            style={{
                              background:
                                badgeStyle[tag]?.bg ?? "rgba(255,255,255,0.04)",
                              color: badgeStyle[tag]?.color ?? "#94a3b8",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>

                  <p className="card-desc">{project.description}</p>

                  <div className="tech-row">
                    {(project.tech || []).map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="card-foot">
                    <Link
                      href={`/projects/${project.id}`}
                      className="details-link"
                    >
                      Details <ArrowUpRight size={12} className="arrow-icon" />
                    </Link>

                    <div className="action-group">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn"
                        >
                          <Code2 size={12} />
                          Source
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-btn"
                        >
                          <ExternalLink size={12} />
                          Live
                        </a>
                      )}
                    </div>

                    <span className="period">{project.period}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      <style>{`
    
        .pc {
  padding: 6rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.ph {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.badge-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #8B7FE8;
  margin-bottom: 6px;
}

.section-title {
  font-family: var(--font-syne), sans-serif;
  font-size: clamp(28px,4vw,38px);
  font-weight: 800;
  letter-spacing: -.02em;
  color: var(--text);
  margin:0;
}


/* Filters */
.filter-pills {
  display:flex;
  gap:4px;
  background:var(--bg-secondary);
  border:1px solid var(--border);
  padding:4px;
  border-radius:30px;
}

.fpill {
  padding:5px 14px;
  border-radius:20px;
  border:none;
  background:transparent;
  color:var(--text-muted);
  font-size:12px;
  font-weight:500;
  cursor:pointer;
  text-transform:capitalize;
  transition:.18s ease;
}

.fpill:hover {
  color:var(--text);
}

.fpill--on {
  background:linear-gradient(135deg,#534AB7,#7B72D4);
  color:white;
  box-shadow:0 3px 10px rgba(83,74,183,.28);
}


/* Grid */
.pg {
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
  gap:1.4rem;
}


/* Card */
.card {
  background:var(--bg-card);
  border:1px solid var(--border);
  border-radius:18px;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  transition:
    transform .28s cubic-bezier(.16,1,.3,1),
    border-color .28s,
    box-shadow .28s;
}


.card:hover {
  transform:translateY(-4px);
  border-color:rgba(139,127,232,.35);
  box-shadow:0 14px 32px rgba(0,0,0,.12);
}


.card--featured {
  border-color:rgba(83,74,183,.4);
}


/* Image */
.card-img-wrap {
  position:relative;
  height:185px;
  background:var(--bg-secondary);
  overflow:hidden;
  border-bottom:1px solid var(--border);
}


.card-img {
  object-fit:cover;
  transition:transform .5s cubic-bezier(.16,1,.3,1)!important;
}


.card:hover .card-img {
  transform:scale(1.04)!important;
}


.card-img-placeholder {
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:var(--bg-secondary);
}


.placeholder-initials {
  font-family:var(--font-syne),sans-serif;
  font-size:36px;
  font-weight:800;
  color:var(--text-hint);
  opacity:.35;
}


/* Overlay */
.img-scrim {
  position:absolute;
  inset:0;
  background:linear-gradient(
    0deg,
    rgba(0,0,0,.18),
    transparent 55%
  );
  pointer-events:none;
  z-index:1;
}


.icon-badge {
  position:absolute;
  bottom:12px;
  left:14px;
  width:32px;
  height:32px;
  border-radius:9px;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:2;
}


/* Body */
.card-body {
  padding:1.3rem 1.3rem 1.1rem;
  display:flex;
  flex-direction:column;
  flex:1;
}


.card-head-row {
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:.6rem;
  margin-bottom:.55rem;
}


.card-name {
  font-size:15.5px;
  font-weight:600;
  color:var(--text);
  letter-spacing:-.01em;
  margin:0;
}


.tags {
  display:flex;
  flex-wrap:wrap;
  gap:4px;
  justify-content:flex-end;
}


.tag {
  font-size:10px;
  font-weight:600;
  padding:2px 7px;
  border-radius:20px;
  text-transform:uppercase;
}


/* Description */
.card-desc {
  font-size:13px;
  color:var(--text-muted);
  line-height:1.65;
  margin:0 0 1rem;
}


/* Tech */
.tech-row {
  display:flex;
  flex-wrap:wrap;
  gap:5px;
  margin-bottom:1.1rem;
}


.tech-chip {
  font-size:10.5px;
  padding:3px 8px;
  border-radius:6px;
  background:var(--skill-bg);
  color:var(--skill-color);
  border:1px solid var(--border);
}


/* Footer */
.card-foot {
  display:flex;
  align-items:center;
  gap:12px;
  padding-top:.85rem;
  border-top:1px solid var(--border);
}


.details-link {
  font-size:12px;
  color:#8B7FE8;
  font-weight:600;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  gap:3px;
}


.details-link:hover {
  color:#534AB7;
}


.arrow-icon {
  transition:.18s;
}


.details-link:hover .arrow-icon {
  transform:translate(1px,-1px);
}


.action-group {
  display:flex;
  gap:10px;
}


.action-btn {
  font-size:11.5px;
  color:var(--text-muted);
  text-decoration:none;
}


.action-btn:hover {
  color:var(--text);
}
  .action-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 4px 8px;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 600;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.04);
  color: var(--text-muted);

  border: 1px solid var(--border);
  transition: 0.2s ease;
}

.action-btn:hover {
  color: var(--text);
  transform: translateY(-1px);
}


.period {
  font-size:11px;
  color:var(--text-hint);
  margin-left:auto;
}
  .live-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 4px 8px;
  border-radius: 999px;

  font-size: 11px;
  font-weight: 600;
  text-decoration: none;

  background: rgba(15, 110, 86, 0.12);
  color: #2dd4bf;

  border: 1px solid rgba(45, 212, 191, 0.25);
  transition: 0.2s ease;
}

.live-btn:hover {
  transform: translateY(-1px);
  background: rgba(15, 110, 86, 0.2);
  color: #5eead4;
}


/* Responsive */
@media(max-width:600px){

.ph {
 flex-direction:column;
 align-items:flex-start;
}

.filter-pills {
 width:100%;
}

.fpill {
 flex:1;
 text-align:center;
}

.pg {
 grid-template-columns:1fr;
}

}


@media(prefers-reduced-motion:reduce){

.card,
.card-img {
 transition:none!important;
}

}
      `}</style>
    </section>
  );
}
