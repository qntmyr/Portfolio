import Link from "next/link";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="page" style={{ minHeight: "100vh" }}>
      <Nav />
      <section className="stack">
        <span className="eyebrow eyebrow--accent">404 · off the route</span>
        <h1 className="h-display">This page took a wrong turn.</h1>
        <Link href="/" className="link-strong">
          ← Back home
        </Link>
      </section>
    </div>
  );
}
