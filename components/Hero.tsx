"use client";

import { useEffect, useRef } from "react";
import { Code2, Mail, Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import * as THREE from "three";

// Reusable animation presets to keep JSX clean and lightweight
const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

/* ── Three.js Particle Hook ─────────────────────────────────── */
function useScene(ref: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    // SAFE DEVICE PIXEL RATIO DISCOVERY
    const dpr =
      typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;
    renderer.setPixelRatio(dpr);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 5;

    // Streamlined 3D Floating Geometry Setup
    const palette = [0x534ab7, 0x8b7fe8, 0x7b72d4];
    const shards = Array.from({ length: 24 }, (_, i) => {
      const geo =
        i % 2 === 0
          ? new THREE.IcosahedronGeometry(Math.random() * 0.18 + 0.06, 0)
          : new THREE.OctahedronGeometry(Math.random() * 0.14 + 0.05, 0);

      const mat = new THREE.MeshBasicMaterial({
        color: palette[i % palette.length],
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 4,
      );
      scene.add(mesh);
      return {
        mesh,
        vx: (Math.random() - 0.5) * 0.001,
        vy: (Math.random() - 0.5) * 0.001,
        phase: Math.random() * Math.PI,
      };
    });

    // Mouse Tracking Parallax
    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      if (typeof window === "undefined") return;
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    onResize();

    let raf: number;
    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);
      shards.forEach(({ mesh, vx, vy, phase }) => {
        mesh.position.x += vx + Math.sin(ts * 0.001 * 0.2 + phase) * 0.0005;
        mesh.position.y += vy + Math.cos(ts * 0.001 * 0.2 + phase) * 0.0005;
        mesh.rotation.x += 0.002;
        if (Math.abs(mesh.position.x) > 6) mesh.position.x *= -0.95;
        if (Math.abs(mesh.position.y) > 4.5) mesh.position.y *= -0.95;
      });
      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, [ref]);
}

/* ── Main Component ─────────────────────────────────────── */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useScene(canvasRef);

  return (
    <section className="hero-container">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-vignette" />

      <div className="hero-content">
        {/* Status Badge */}
        <motion.div {...fadeInUp} className="status-badge">
          <span className="pulse-dot" />
          Available for Global Opportunities · Cairo
        </motion.div>

        {/* Subtitle / Role */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="hero-role"
        >
          Frontend Engineer
        </motion.p>

        {/* Main Headline Statement */}
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.18 }}
          className="hero-title"
        >
          Arwa{" "}
          <span className="text-gradient">
            Ahmed
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="title-underline"
            />
          </span>
        </motion.h1>

        {/* Impact-Driven Professional Pitch */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.26 }}
          className="hero-bio"
        >
          I bridge the gap between design and architecture—crafting
          high-fidelity, production-grade web interfaces packed with immersive
          interactions and top-tier optimization metrics.
        </motion.p>

        {/* Professional Call To Actions */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.34 }}
          className="cta-wrapper"
        >
          <a
            href="https://github.com/ARWASAAYED"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Code2 size={15} /> Github{" "}
            <ArrowUpRight size={13} className="arrow" />
          </a>
          <a
            href="mailto:arwaahmed2553@gmail.com"
            className="btn btn-secondary"
          >
            <Mail size={15} /> Direct Inquiry
          </a>
          <a
            href="/Arwa_Ahmed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Download size={15} /> Resume
          </a>
        </motion.div>
      </div>

      <style>{`
        /* Layout Structure */
        .hero-container { position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--bg, #0b0b0f); }
        .hero-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .hero-vignette { position: absolute; inset: 0; background: radial-gradient(circle 60% 80% at 50% 50%, transparent 0%, var(--bg, #0b0b0f) 80%); pointer-events: none; z-index: 2; }
        .hero-content { position: relative; z-index: 3; text-align: center; padding: 4rem 1.5rem; display: flex; flex-direction: column; align-items: center; max-width: 640px; margin: 0 auto; }

        /* Typography Elements */
        .hero-role { font-size: 12px; font-weight: 700; color: #534AB7; letter-spacing: .2em; text-transform: uppercase; margin-bottom: .75rem; font-family: var(--font-syne), 'Syne', sans-serif; }
        .hero-title { font-size: clamp(46px, 9vw, 82px); font-weight: 800; line-height: 0.95; letter-spacing: -.04em; margin-bottom: 1.5rem; font-family: var(--font-syne), 'Syne', sans-serif; color: var(--text, #f4f4f6); }
        .text-gradient { background: linear-gradient(135deg,#635ad9,#9b91f0,#ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; position: relative; display: inline-block; }
        .title-underline { position: absolute; bottom: 3px; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,#534AB7,#8B7FE8,transparent); border-radius: 2px; transform-origin: left; }
        .hero-bio { font-size: 15px; color: var(--text-muted, #94a3b8); line-height: 1.75; margin-bottom: 2.5rem; max-width: 460px; }

        /* Badge Components */
        .status-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(83,74,183,.25); color: #8B7FE8; border-radius: 30px; padding: 5px 14px; font-size: 11px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 1.7rem; background: rgba(83,74,183,.06); backdrop-filter: blur(8px); }
        .pulse-dot { width: 6px; height: 6px; border-radius: 50%; background: #8B7FE8; animation: pulseGlow 2s infinite; }
        @keyframes pulseGlow { 0%,100%{opacity:1;box-shadow:0 0 8px #8B7FE8} 50%{opacity:.4;box-shadow:0 0 3px #8B7FE8} }

        /* Buttons Framework */
        .cta-wrapper { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .btn { display: inline-flex; align-items: center; gap: 6px; border-radius: 30px; padding: 10px 22px; font-size: 13px; font-weight: 600; text-decoration: none; transition: all .2s ease; }
        .btn:hover { transform: translateY(-1.5px); }
        .btn-primary { background: #f4f4f6; color: #0b0b0f; }
        .btn-primary .arrow { transition: transform .2s ease; opacity: 0.6; }
        .btn-primary:hover .arrow { transform: translate(1px, -1px); opacity: 1; }
        .btn-secondary { background: linear-gradient(135deg,#534AB7,#7B72D4); color: #fff; box-shadow: 0 4px 16px rgba(83,74,183,.3); }
        .btn-outline { background: transparent; color: var(--text, #f4f4f6); border: 1px solid rgba(244,244,246,0.15); }
        .btn-outline:hover { border-color: #534AB7; background: rgba(83,74,183,0.04); }

        @media(prefers-reduced-motion:reduce){ .hero-canvas { display:none } }
      `}</style>
    </section>
  );
}
