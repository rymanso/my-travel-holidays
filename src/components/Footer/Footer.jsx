import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa6";
import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <span className={styles.brandTitle}>MY Travels &amp; Holidays</span>
          <p className={styles.brandTagline}>
            Bespoke Maldivian escapes, curated with care. Hand-picked resorts
            for honeymoons, family adventures and quiet escapes.
          </p>
        </div>

        <div className={styles.linkCol}>
          <span className={styles.eyebrow}>Explore</span>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/resorts" className={styles.link}>Resorts</Link>
          <a href="/#contact" className={styles.link}>Contact</a>
        </div>

        <div className={styles.linkCol}>
          <span className={styles.eyebrow}>Featured</span>
          <Link to="/resorts/nakai-alimatha" className={styles.link}>Nakai Alimatha</Link>
          <Link to="/resorts/nakai-dhiggiri" className={styles.link}>Nakai Dhiggiri</Link>
          <Link to="/resorts/nakai-maayaafushi" className={styles.link}>Nakai Maayaafushi</Link>
          <Link to="/resorts/ritz-carlton" className={styles.link}>The Ritz-Carlton, Fari Islands</Link>
        </div>

        <div className={styles.socialCol}>
          <span className={styles.eyebrow}>Follow</span>
          <div className={styles.socials}>
            <a className={styles.social} href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a className={styles.social} href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a className={styles.social} href="/#contact" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.rule} />

      <div className={styles.legal}>
        <span>© {year} MY Travels &amp; Holidays</span>
        <span className={styles.dot} aria-hidden>·</span>
        <span>Crafted in the Maldives</span>
      </div>
    </footer>
  );
};
