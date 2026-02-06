import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <img src="./src/assets/logo-placeholder.svg" alt="placeholder logo" />
        </a>

        {/* Desktop nav (hidden on mobile) */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#books">Our Books</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger (mobile nav) */}
        <button
          className={styles.hamburger}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M2 4h20M2 12h20M2 20h20"
              stroke="currentColor"
              strokeWidth="3.25"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobile menu"
        aria-hidden={!open}
      >
        <ul className={styles.mobileList}>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#books" onClick={() => setOpen(false)}>
              Our Books
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
