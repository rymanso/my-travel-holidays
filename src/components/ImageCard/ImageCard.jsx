import { Link } from "react-router-dom";
import styles from "./ImageCard.module.css";

export const ImageCard = ({ src, title, eyebrow, linkTo, children }) => {
  const inner = (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img src={src} className={styles.picture} alt="" loading="lazy" />
      </div>
      <div className={styles.body}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h3 className={styles.title}>{title}</h3>
        {children ? <div className={styles.details}>{children}</div> : null}
        {linkTo ? (
          <span className={styles.cue} aria-hidden="true">
            Discover <span className={styles.cueArrow}>→</span>
          </span>
        ) : null}
      </div>
    </article>
  );

  if (!linkTo) return inner;

  return (
    <Link to={linkTo} className={styles.cardLink} aria-label={title}>
      {inner}
    </Link>
  );
};
