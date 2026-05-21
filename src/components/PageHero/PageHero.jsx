import { Link } from "react-router-dom";
import styles from "./PageHero.module.css";

export const PageHero = ({ image, eyebrow, title, lede, breadcrumbs }) => {
  return (
    <section className={styles.hero}>
      <img src={image} className={styles.heroImg} alt="" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <div className={styles.heroContent}>
        {breadcrumbs?.length ? (
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className={styles.crumb}>
                {c.to ? (
                  <Link to={c.to} className={styles.crumbLink}>
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 ? (
                  <span className={styles.crumbSep} aria-hidden>
                    /
                  </span>
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h1 className={styles.title}>{title}</h1>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
      </div>
    </section>
  );
};
