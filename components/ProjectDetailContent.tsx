"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink, CheckCircle } from "lucide-react";
import type { Project } from "@/lib/data";

type ProjectDetailData = {
  overview: string;
  challenge: string;
  solution: string;
  keyHighlights: string[];
  features: Record<string, string[]>;
};

type ProjectDetailContentProps = {
  project: Project;
  detail: ProjectDetailData;
};

const colorMap: Record<string, { bg: string; icon: string }> = {
  purple: { bg: "rgba(83,74,183,0.12)", icon: "#8B7FE8" },
  teal: { bg: "rgba(15,110,86,0.12)", icon: "#2DD4BF" },
  coral: { bg: "rgba(153,60,29,0.12)", icon: "#FB923C" },
};

export default function ProjectDetailContent({
  project,
  detail,
}: ProjectDetailContentProps) {
  const c = colorMap[project.color] ?? colorMap.purple;

  return (
    <main
      style={{ maxWidth: 800, margin: "0 auto", padding: "7rem 2rem 5rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            color: "#94a3b8",
            textDecoration: "none",
            marginBottom: "2.5rem",
          }}
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: c.bg,
              color: c.icon,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              flexShrink: 0,
            }}
          >
            {project.icon === "building"
              ? "🏢"
              : project.icon === "shield"
                ? "🛡️"
                : project.icon === "heart"
                  ? "🏥"
                  : project.icon === "calendar"
                    ? "📅"
                    : "💻"}
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 8,
                flexWrap: "wrap",
              }}
            >
              {(project.tags || []).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    padding: "2px 10px",
                    borderRadius: 10,
                    background:
                      tag === "live"
                        ? "rgba(15,110,86,0.12)"
                        : tag === "full-stack"
                          ? "rgba(153,60,29,0.12)"
                          : "rgba(83,74,183,0.12)",
                    color:
                      tag === "live"
                        ? "#2DD4BF"
                        : tag === "full-stack"
                          ? "#FB923C"
                          : "#8B7FE8",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              style={{
                fontSize: 32,
                fontWeight: 600,
                color: "#f4f4f6",
                letterSpacing: "-0.02em",
                marginBottom: 8,
              }}
            >
              {project.name}
            </h1>
            <p style={{ fontSize: 14, color: "#94a3b8" }}>{project.period}</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: "3rem",
          }}
        >
          {(project.tech || []).map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                padding: "4px 12px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.025)",
                color: "#94a3b8",
                border: "1px solid rgba(244,244,246,0.06)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {[
          { title: "Overview", content: detail?.overview },
          { title: "The Challenge", content: detail?.challenge },
          { title: "The Solution", content: detail?.solution },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: "0.75rem",
                color: c.icon,
              }}
            >
              {s.title}
            </h2>
            <p style={{ fontSize: 15, color: "#94a3b8", lineHeight: 1.8 }}>
              {s.content || "No details provided."}
            </p>
          </div>
        ))}

        <div
          style={{
            background: "#121217",
            border: "1px solid rgba(244,244,246,0.06)",
            borderRadius: 16,
            padding: "1.75rem",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#f4f4f6",
              marginBottom: "1.25rem",
            }}
          >
            Key Highlights
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {(detail?.keyHighlights || []).length > 0 ? (
              detail.keyHighlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    color: "#94a3b8",
                    lineHeight: 1.6,
                  }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: c.icon, flexShrink: 0, marginTop: 2 }}
                  />
                  {h}
                </li>
              ))
            ) : (
              <li style={{ fontSize: 14, color: "#64748b" }}>
                No key highlights listed.
              </li>
            )}
          </ul>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#f4f4f6",
                color: "#121217",
                fontWeight: 600,
                borderRadius: 12,
                padding: "12px 24px",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <Code2 size={15} /> View Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#534AB7",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 12,
                padding: "12px 24px",
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          <Link
            href="/#projects"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "#94a3b8",
              border: "1px solid rgba(244,244,246,0.2)",
              borderRadius: 12,
              padding: "12px 24px",
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={15} /> All Projects
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
