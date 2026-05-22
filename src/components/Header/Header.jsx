import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.webp";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Resorts", to: "/resorts" },
  // { label: "Guest Houses", to: "/guest-houses" },
  { label: "Contact", to: "/#contact" },
];

export const Header = ({ transparent = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isLight = transparent && !scrolled;
  const headerClass = [
    styles.header,
    isLight ? styles.headerLight : styles.headerSolid,
    transparent ? styles.headerOverlay : "",
  ].join(" ");

  const handleContact = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <>
      <header className={headerClass}>
        <div className={styles.inner}>
          <button
            type="button"
            className={styles.brand}
            onClick={() => navigate("/")}
            aria-label="MY Travels &amp; Holidays — home"
          >
            <img src={logo} className={styles.logo} alt="" />
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>MY Travels</span>
              <span className={styles.brandTagline}>&amp; Holidays</span>
            </span>
          </button>

          <nav className={styles.nav} aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.to.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.to}
                  className={styles.navLink}
                  onClick={handleContact}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to} className={styles.navLink}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </header>

      <div
        className={`${styles.drawerScrim} ${drawerOpen ? styles.drawerScrimOpen : ""}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!drawerOpen}
      >
        <div className={styles.drawerHead}>
          <span className={styles.drawerEyebrow}>Menu</span>
          <button
            type="button"
            className={styles.drawerClose}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <RxCross1 />
          </button>
        </div>
        <nav className={styles.drawerNav}>
          {NAV_LINKS.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                className={styles.drawerLink}
                onClick={handleContact}
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={styles.drawerLink}>
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className={styles.drawerFoot}>
          <span className={styles.drawerEyebrow}>Maldives, curated</span>
        </div>
      </aside>
    </>
  );
};
