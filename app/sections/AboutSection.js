"use client";

import Image from "next/image";
import styles from "./AboutSection.module.css";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Proactive Defense",
    desc: "We don't wait for threats — we anticipate and neutralize them before they reach your network.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "24/7 Operations",
    desc: "Our security operations center monitors your infrastructure around the clock, every day of the year.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Expert Team",
    desc: "Certified security professionals with deep expertise across threat intelligence, IR, and compliance.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Image/Visual */}
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/csec-logo.png"
                alt="CSECNIX — Cybersecurity Experts"
                width={320}
                height={320}
                className={styles.aboutImage}
              />
              <div className={styles.imageGlow} />
            </div>
            {/* Floating badge */}
            <div className={styles.floatingBadge}>
              <span className={styles.floatingNum}>10+</span>
              <span className={styles.floatingLabel}>Years of<br />Experience</span>
            </div>
          </div>

          {/* Right — Content */}
          <div className={styles.content}>
            <span className="section-label">About CSECNIX</span>
            <h2 className="section-title">
              Your Trusted Partner in{" "}
              <span className="gradient-text">Cybersecurity</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              CSECNIX is a cybersecurity firm dedicated to protecting businesses
              from modern digital threats. We combine cutting-edge technology
              with expert knowledge to deliver comprehensive security solutions
              tailored to your specific needs.
            </p>

            {/* Feature list */}
            <div className={styles.features}>
              {features.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
