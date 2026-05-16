"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const SplineScene = dynamic(() => import("../components/SplineScene"), {
  ssr: false,
});

/* ─── Framer Motion variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

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
      <motion.div
        className={styles.glowOrb1}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className={styles.glowOrb2}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Content on top */}
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeDot} />
            Cybersecurity Experts
          </motion.div>

          <motion.h1 className={styles.title} variants={fadeUp}>
            Defend Your
            <br />
            <span className="gradient-text">Digital Frontier</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={fadeUp}>
            CSECNIX delivers enterprise-grade cybersecurity solutions — from
            endpoint protection to email security — keeping your business safe
            in an evolving threat landscape.
          </motion.p>

          <motion.div className={styles.actions} variants={fadeUp}>
            <motion.a
              href="#services"
              className="btn btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
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
            </motion.a>
            <motion.a
              href="#about"
              className="btn btn-outline"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats Strip */}
          <motion.div className={styles.stats} variants={fadeUp}>
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className={styles.scrollDot} />
      </motion.div>
    </section>
  );
}
