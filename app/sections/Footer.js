"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Image
              src="/images/csec-logo.png"
              alt="CSECNIX"
              width={36}
              height={36}
              className={styles.logo}
            />
            <span className={styles.name}>CSECNIX</span>
          </div>

          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} CSECNIX. All rights reserved.
          </p>

          <div className={styles.links}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
