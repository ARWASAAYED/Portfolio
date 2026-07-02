"use client";
import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("arwaahmed2553@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY",
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 14,
    borderRadius: 10,
    border: "0.5px solid var(--border-strong)",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 2rem",
        background: "var(--bg-secondary)",
        borderTop: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            let&apos;s work together
          </div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              marginBottom: "3rem",
            }}
          >
            Get in touch
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: "2rem",
                maxWidth: 380,
              }}
            >
              Open to frontend &amp; full-stack roles, freelance projects, and
              collaborations.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {[
                {
                  icon: <Mail size={16} />,
                  label: "arwaahmed2553@gmail.com",
                  href: "mailto:arwaahmed2553@gmail.com",
                },
                {
                  icon: <Phone size={16} />,
                  label: "01063072720",
                  href: "tel:+201063072720",
                },
                {
                  icon: <MapPin size={16} />,
                  label: "Cairo, Egypt",
                  href: null,
                },
                {
                  icon: <Code2 size={16} />,
                  label: "github.com/ARWASAAYED",
                  href: "https://github.com/ARWASAAYED",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "var(--purple-light)",
                      color: "#534AB7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 14,
                        color: "var(--text-muted)",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={copyEmail}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "#534AB7",
                border: "0.5px solid rgba(83,74,183,0.3)",
                borderRadius: 10,
                padding: "10px 18px",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {copied ? (
                <>
                  <CheckCircle size={14} /> Copied!
                </>
              ) : (
                "Copy email address"
              )}
            </button>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--border)",
              borderRadius: 20,
              padding: "2rem",
            }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
                className="form-row"
              >
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Your name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Layla Hassan"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#534AB7")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-strong)")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="layla@company.com"
                    required
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#534AB7")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border-strong)")
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Arwa, I'd love to discuss..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  onFocus={(e) => (e.target.style.borderColor = "#534AB7")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-strong)")
                  }
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  background:
                    status === "success"
                      ? "#0F6E56"
                      : status === "error"
                        ? "#993C1D"
                        : "#534AB7",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "13px 24px",
                  fontSize: 14,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background 0.3s",
                  opacity: status === "sending" ? 0.8 : 1,
                }}
              >
                {status === "sending" && (
                  <Loader
                    size={15}
                    style={{ animation: "spin 1s linear infinite" }}
                  />
                )}
                {status === "success" && <CheckCircle size={15} />}
                {status === "error" && <AlertCircle size={15} />}
                {status === "idle" && <Send size={15} />}
                {status === "idle"
                  ? "Send message"
                  : status === "sending"
                    ? "Sending…"
                    : status === "success"
                      ? "Message sent!"
                      : "Failed — try again"}
              </button>

              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-hint)",
                  textAlign: "center",
                }}
              >
                Or reach me directly at arwaahmed2553@gmail.com · Response
                within 24h
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media(max-width:768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
