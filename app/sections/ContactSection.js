"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";

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

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder — wire up to your backend / email service
    alert("Thank you! We'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left info */}
          <motion.div
            className={styles.info}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeUp}>
              Get In Touch
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Ready to <span className="gradient-text">Secure</span> Your
              Business?
            </motion.h2>
            <motion.p
              className="section-subtitle"
              style={{ marginBottom: 40 }}
              variants={fadeUp}
            >
              Reach out to our team for a free consultation. We&apos;ll assess
              your security posture and recommend the right solutions for your
              needs.
            </motion.p>

            {/* Contact details */}
            <motion.div className={styles.details} variants={staggerContainer}>
              <motion.div className={styles.detail} variants={fadeUp}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Email Us</h4>
                  <p className={styles.detailText}>info@csecnix.com</p>
                </div>
              </motion.div>

              <motion.div className={styles.detail} variants={fadeUp}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Call Us</h4>
                  <p className={styles.detailText}>+971 50 137 0946</p>
                </div>
              </motion.div>

              <motion.div className={styles.detail} variants={fadeUp}>
                <div className={styles.detailIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.detailTitle}>Location</h4>
                  <p className={styles.detailText}>Abu Dhabi, UAE</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="john@company.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell us about your security needs..."
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
