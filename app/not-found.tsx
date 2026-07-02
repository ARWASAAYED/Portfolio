import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <div style={{ fontSize: 64, marginBottom: "1rem" }}>404</div>
      <h1 style={{ fontSize: 24, fontWeight: 500, marginBottom: "0.75rem" }}>Page not found</h1>
      <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: "2rem" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" style={{ background: "#534AB7", color: "#fff", borderRadius: 12, padding: "12px 28px", textDecoration: "none", fontSize: 14 }}>
        Go home
      </Link>
    </main>
  );
}
