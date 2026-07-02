"use client";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "projects", href: "/#projects" },
  { label: "skills", href: "/#skills" },
  { label: "experience", href: "/#experience" },
  { label: "contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "#");
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          arwa<span style={{ color: "#534AB7" }}>.</span>
        </Link>

        {/* Center Desktop Links */}
        <div className="nav-desktop">
          {links.map((l) => (
            <button key={l.label} onClick={() => handleNav(l.href)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button onClick={toggle} aria-label="Toggle theme" className="icon-btn theme-toggle">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button onClick={() => setOpen(!open)} className="icon-btn mobile-toggle" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-dropdown"
          >
            {links.map((l) => (
              <button key={l.label} onClick={() => handleNav(l.href)} className="mobile-link">
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* Structural Layout */
        .nav-header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; padding: 0 1.5rem; transition: all 0.3s ease; }
        .nav-header.scrolled { top: 12px; }
        
        .nav-container {
          max-width: 1100px; margin: 0 auto; height: 64px; padding: 0 2rem;
          display: flex; align-items: center; justify-content: space-between; transition: all 0.3s ease;
        }
        .scrolled .nav-container {
          border-radius: 32px; background: var(--nav-bg); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }

        /* BIGGER TYPOGRAPHY */
        .nav-logo { text-decoration: none; color: var(--text); font-size: 19px; font-weight: 700; letter-spacing: -0.03em; }
        .nav-link { background: none; border: none; cursor: pointer; font-size: 15px; font-weight: 500; color: var(--text-muted); padding: 8px 4px; transition: color 0.2s; }
        .nav-link:hover { color: var(--text); }
        .mobile-link { background: none; border: none; cursor: pointer; text-align: left; font-size: 17px; font-weight: 500; color: var(--text); padding: 12px 0; border-bottom: 1px solid var(--border-soft); }

        /* Controls */
        .nav-actions { display: flex; gap: 0.75rem; align-items: center; }
        .nav-desktop { display: none; }
        .mobile-toggle { border: none; color: var(--text); background: none; }
        
        .icon-btn {
          border: 1px solid var(--border-strong); border-radius: 50%; width: 38px; height: 38px; 
          cursor: pointer; color: var(--text-muted); display: flex; align-items: center; justify-content: center; transition: all 0.2s;
        }
        .theme-toggle:hover { background: var(--border-soft); color: var(--text); }

        .mobile-dropdown {
          background: var(--nav-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border); border-radius: 24px; padding: 1.5rem;
          display: flex; flex-direction: column; gap: 0.5rem; margin: 8px auto 0; max-width: 1100px;
        }

        /* Desktop Layout (Grid Centered) */
        @media (min-width: 769px) {
          .nav-container { display: grid !important; grid-template-columns: 1fr auto 1fr; }
          .nav-desktop { display: flex !important; gap: 2.5rem; justify-content: center; }
          .nav-actions { justify-self: end; }
          .mobile-toggle, .mobile-dropdown { display: none !important; }
        }
      `}</style>
    </header>
  );
}