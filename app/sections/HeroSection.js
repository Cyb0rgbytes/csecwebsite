"use client";

import dynamic from "next/dynamic";
import styles from "./HeroSection.module.css";

const SplineScene = dynamic(() => import("../components/SplineScene"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Spline 3D — Full-screen background layer */}
      <div className={styles.splineBackground}>
        <SplineScene />
      </div>

      {/* Dark overlay to ensure text readability */}
      <div className={styles.overlay} />

      {/* Background effects */}
      <div className={styles.gridOverlay} />
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      {/* Content on top */}
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-in-up`}>
            <span className={styles.badgeDot} />
            Cybersecurity Experts
          </div>

          <h1 className={`${styles.title} animate-fade-in-up animate-delay-1`}>
            Defend Your
            <br />
            <span className="gradient-text">Digital Frontier</span>
          </h1>

          <p
            className={`${styles.subtitle} animate-fade-in-up animate-delay-2`}
          >
            CSECNIX delivers enterprise-grade cybersecurity solutions — from
            endpoint protection to email security — keeping your business safe
            in an evolving threat landscape.
          </p>

          <div
            className={`${styles.actions} animate-fade-in-up animate-delay-3`}
          >
            <a href="#services" className="btn btn-primary">
              Explore Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>

          {/* Stats Strip */}
          <div
            className={`${styles.stats} animate-fade-in-up animate-delay-4`}
          >
            <div className={styles.stat}>
              <span className={styles.statNum}>24/7</span>
              <span className={styles.statLabel}>Monitoring</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>99.9%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
