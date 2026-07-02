"use client";
import { GraduationCap, Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#534AB7",
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          background
        </div>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}
        >
          Experience &amp; Education
        </h2>
      </motion.div>

      <div style={{ maxWidth: 720 }}>
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              display: "grid",
              gridTemplateColumns: "48px 1fr",
              gap: "1rem",
              marginBottom: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 4,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background:
                    item.type === "education"
                      ? "var(--teal-light)"
                      : "var(--purple-light)",
                  color: item.type === "education" ? "#0F6E56" : "#534AB7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {item.type === "education" ? (
                  <GraduationCap size={16} />
                ) : (
                  <Briefcase size={16} />
                )}
              </div>
              {i < experience.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    width: 1,
                    background: "var(--border)",
                    margin: "8px 0 0",
                    minHeight: 32,
                  }}
                />
              )}
            </div>
            <div style={{ paddingBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 4,
                  marginBottom: 4,
                }}
              >
                <div>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>
                    {item.role}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: item.type === "education" ? "#0F6E56" : "#534AB7",
                      marginTop: 2,
                    }}
                  >
                    {item.company}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-hint)",
                    background: "var(--skill-bg)",
                    padding: "3px 10px",
                    borderRadius: 10,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.period}
                </span>
              </div>
              {item.bullets.length > 0 && (
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0.75rem 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {item.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        fontSize: 14,
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        paddingLeft: "1.1rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color:
                            item.type === "education" ? "#0F6E56" : "#534AB7",
                          fontWeight: 500,
                        }}
                      >
                        →
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
