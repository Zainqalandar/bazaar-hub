'use client';
import Image from "next/image";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});


export default function Home() {
  return (
    <main className={`page ${space.variable} ${playfair.variable}`}>
      <div className="grain" aria-hidden="true" />
      <section className="hero">
        <div className="notice">
          <span className="notice-dot" aria-hidden="true" />
          <p>
            Website under development. Bazaar Hub par kaam jari hai, jaldi
            milte hain.
          </p>
        </div>
        <div className="hero-content">
          <p className="eyebrow">Bazaar Hub</p>
          <h1>Local bazaar ko digital banane ka bada irada.</h1>
          <p className="subhead">
            Hum ek aisa marketplace bana rahe hain jahan trusted sellers, smart
            deals, aur fast delivery ek hi jagah milegi.
          </p>
          <div className="cta-row">
            <button className="cta" type="button">
              Get launch updates
            </button>
            <span className="meta">Launch wave: 2025</span>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="orb orb-c" />
          <div className="badge">
            <span>Build Status</span>
            <strong>70%</strong>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="section-head">
          <h2>Design Preview</h2>
          <p>
            Warm colors, bold type, aur thori si street energy. Yeh sirf ek
            taste hai jo aage barhega.
          </p>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>City bazaar vibe</h3>
            <p>
              Har category ka apna mood hoga, jahan visuals local culture ko
              celebrate karenge.
            </p>
            <span className="tag">Street Smart</span>
          </article>
          <article className="card">
            <h3>Trusted sellers</h3>
            <p>
              Verified profiles, transparent ratings, aur real-time support se
              trust built-in rahega.
            </p>
            <span className="tag">Safe Deals</span>
          </article>
          <article className="card">
            <h3>Fast discovery</h3>
            <p>
              Search experience lightning fast hoga, with curated picks and
              quick filters.
            </p>
            <span className="tag">Quick Finds</span>
          </article>
        </div>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f6efe7;
          color: #1f1510;
          font-family: var(--font-space), "Trebuchet MS", sans-serif;
        }

        :global(h1),
        :global(h2),
        :global(h3) {
          font-family: var(--font-playfair), "Times New Roman", serif;
          letter-spacing: -0.02em;
        }

        .page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
        }

        .grain {
          position: fixed;
          inset: 0;
          background-image: linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            repeating-linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.03) 0,
              rgba(0, 0, 0, 0.03) 1px,
              transparent 1px,
              transparent 6px
            );
          pointer-events: none;
          mix-blend-mode: multiply;
          opacity: 0.4;
        }

        .hero {
          padding: 4.5rem 6vw 3.5rem;
          display: grid;
          gap: 2.5rem;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .notice {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1.2rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(121, 67, 36, 0.2);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .notice-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d4572a;
          box-shadow: 0 0 0 6px rgba(212, 87, 42, 0.15);
        }

        .hero-content {
          max-width: 520px;
          animation: fadeUp 0.7s ease both;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.75rem;
          margin-bottom: 0.75rem;
          font-weight: 700;
          color: #8a4d2c;
        }

        h1 {
          font-size: clamp(2.2rem, 4vw, 3.6rem);
          margin: 0 0 1rem;
        }

        .subhead {
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0 0 1.8rem;
          color: #5a3b2c;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
        }

        .cta {
          border: none;
          border-radius: 999px;
          padding: 0.9rem 1.8rem;
          background: #1f1510;
          color: #f6efe7;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 12px 24px rgba(31, 21, 16, 0.2);
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 28px rgba(31, 21, 16, 0.25);
        }

        .meta {
          font-size: 0.9rem;
          font-weight: 600;
          color: #8a4d2c;
        }

        .hero-visual {
          position: relative;
          min-height: 280px;
          display: grid;
          place-items: center;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(0.5px);
          animation: float 5s ease-in-out infinite;
        }

        .orb-a {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle at 30% 30%, #ffcc99, #f59e5f);
          top: 10px;
          left: 20px;
        }

        .orb-b {
          width: 140px;
          height: 140px;
          background: radial-gradient(circle at 60% 40%, #f2b9a3, #c35b3a);
          bottom: 30px;
          right: 30px;
          animation-delay: 0.6s;
        }

        .orb-c {
          width: 90px;
          height: 90px;
          background: radial-gradient(circle at 40% 40%, #fce9d2, #f0a46b);
          bottom: 120px;
          left: 120px;
          animation-delay: 1.2s;
        }

        .badge {
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 16px;
          padding: 1rem 1.4rem;
          display: grid;
          gap: 0.3rem;
          text-align: center;
          border: 1px solid rgba(121, 67, 36, 0.2);
          box-shadow: 0 18px 30px rgba(80, 45, 25, 0.2);
          backdrop-filter: blur(6px);
        }

        .badge span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #8a4d2c;
          font-weight: 700;
        }

        .badge strong {
          font-size: 1.6rem;
        }

        .showcase {
          padding: 2rem 6vw 5rem;
          position: relative;
          z-index: 1;
        }

        .section-head {
          max-width: 640px;
          margin-bottom: 2.5rem;
        }

        .section-head h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          margin: 0 0 0.8rem;
        }

        .section-head p {
          margin: 0;
          color: #5a3b2c;
          font-size: 1rem;
          line-height: 1.6;
        }

        .card-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .card {
          background: #ffffff;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 16px 30px rgba(54, 28, 12, 0.1);
          border: 1px solid rgba(121, 67, 36, 0.15);
          animation: fadeUp 0.7s ease both;
        }

        .card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .card:nth-child(3) {
          animation-delay: 0.4s;
        }

        .card h3 {
          margin: 0 0 0.75rem;
          font-size: 1.3rem;
        }

        .card p {
          margin: 0 0 1.4rem;
          color: #5a3b2c;
          line-height: 1.6;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          background: #f8e7d7;
          color: #9b4f2a;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @media (max-width: 720px) {
          .notice {
            font-size: 0.85rem;
            border-radius: 16px;
          }

          .hero {
            padding-top: 3.5rem;
          }

          .cta-row {
            align-items: stretch;
          }

          .cta {
            width: 100%;
            text-align: center;
          }

          .hero-visual {
            min-height: 220px;
          }
        }
      `}</style>
    </main>
  );
}
