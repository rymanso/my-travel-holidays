import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./GridPage.module.css";

export const GridPage = ({ title, eyebrow, breadcrumbs, children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.head}>
        <div className={styles.headInner}>
          {breadcrumbs?.length ? (
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              {breadcrumbs.map((c, i) => (
                <span key={i} className={styles.crumb}>
                  {c.to ? (
                    <Link to={c.to} className={styles.crumbLink}>
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <span className={styles.crumbSep} aria-hidden>/</span>
                  ) : null}
                </span>
              ))}
            </nav>
          ) : null}
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>

      <section className={styles.gridSection}>
        <div className={styles.grid}>{children}</div>
      </section>

      <Footer />
    </div>
  );
};

export const GridTextBox = ({ title, children }) => {
  return (
    <div className={styles.gridTextBox}>
      <h2 className={styles.gridTextBoxTitle}>{title}</h2>
      <p className={styles.gridTextBoxText}>{children}</p>
    </div>
  );
};
