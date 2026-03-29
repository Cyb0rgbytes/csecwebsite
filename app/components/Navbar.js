"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <Image
            src="/images/csec-logo.png"
            alt="CSECNIX Logo"
            width={44}
            height={44}
            className={styles.logoImg}
            priority
          />
          <span className={styles.logoText}>CSECNIX</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {["about", "services", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={styles.link}
                onClick={(e) => handleNavClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`btn btn-primary ${styles.cta}`}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Get Protected
        </a>

        {/* Mobile Toggle */}
        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              {["about", "services", "contact"].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={styles.mobileLink}
                    onClick={(e) => handleNavClick(e, id)}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, "contact")}
              style={{ marginTop: 20, width: "100%", justifyContent: "center" }}
            >
              Get Protected
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
