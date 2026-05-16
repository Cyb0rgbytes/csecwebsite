"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

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
          <motion.div
            className={styles.visual}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
          >
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
            <motion.div
              className={styles.floatingBadge}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              <span className={styles.floatingNum}>10+</span>
              <span className={styles.floatingLabel}>Years of<br />Experience</span>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className={styles.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeUp}>
              About CSECNIX
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Your Trusted Partner in{" "}
              <span className="gradient-text">Cybersecurity</span>
            </motion.h2>
            <motion.p
              className="section-subtitle"
              style={{ marginBottom: 40 }}
              variants={fadeUp}
            >
              CSECNIX is a cybersecurity firm dedicated to protecting businesses
              from modern digital threats. We combine cutting-edge technology
              with expert knowledge to deliver comprehensive security solutions
              tailored to your specific needs.
            </motion.p>

            {/* Feature list */}
            <motion.div className={styles.features} variants={staggerContainer}>
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className={styles.feature}
                  variants={fadeUp}
                  whileHover={{
                    backgroundColor: "rgba(139, 106, 191, 0.06)",
                    borderColor: "rgba(255, 255, 255, 0.06)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <div>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
