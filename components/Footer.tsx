"use client";
import { Code2, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border)",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
            arwa<span style={{ color: "#534AB7" }}>.</span>dev
          </div>
          <div style={{ fontSize: 12, color: "var(--text-hint)" }}>
            © 2026 Arwa Ahmed · Built with Next.js &amp; TypeScript
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          <a
            href="https://github.com/ARWASAAYED"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 13,
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            <Code2 size={14} /> GitHub
          </a>
          <a
            href="mailto:arwaahmed2553@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 13,
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            <Mail size={14} /> Email
          </a>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "var(--purple-light)",
              color: "#534AB7",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
