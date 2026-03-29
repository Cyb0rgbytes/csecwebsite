"use client";

import Image from "next/image";
import styles from "./ServicesSection.module.css";

const services = [
  {
    image: "/images/email-security.jpg",
    title: "Email Security & Breach Lookups",
    desc: "Protect your inbox with advanced email filtering, phishing detection, and dark web breach monitoring. We scan for compromised credentials and alert you before attackers strike.",
    tags: ["Phishing Protection", "Dark Web Scanning", "Breach Alerts"],
  },
  {
    image: "/images/business-email.jpg",
    title: "Business Email & Office Integration",
    desc: "Seamless deployment and management of secure business email solutions with full Office 365 and Google Workspace integration, keeping your team productive and protected.",
    tags: ["Office 365", "Google Workspace", "Email Migration"],
  },
  {
    image: "/images/endpoint-edr.jpg",
    title: "Endpoint AV/EDR Install & Configuration",
    desc: "Enterprise-grade endpoint detection and response. We deploy, configure, and manage next-gen antivirus and EDR solutions across your entire fleet of devices.",
    tags: ["Antivirus", "EDR Deployment", "Threat Hunting"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            Comprehensive{" "}
            <span className="gradient-text">Security Solutions</span>
          </h2>
          <p className="section-subtitle">
            From email protection to endpoint security, we cover every layer of
            your digital infrastructure.
          </p>
        </div>

        {/* Service Cards */}
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div key={i} className={`glass-card ${styles.card}`}>
              {/* Image */}
              <div className={styles.cardImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className={styles.img}
                />
                <div className={styles.cardOverlay} />
              </div>

              {/* Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>

                {/* Tags */}
                <div className={styles.tags}>
                  {service.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <a href="#contact" className={styles.cardLink}>
                  Learn More
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
