"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
}
