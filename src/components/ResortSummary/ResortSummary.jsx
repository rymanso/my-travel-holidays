import styles from "./ResortSummary.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const ResortSummary = ({
  resortName,
  slogan,
  slideImages,
  description,
  breadcrumbs,
  children,
}) => {
  return (
    <div className={styles.page}>
      {/* ============ Hero carousel ============ */}
      <section className={styles.hero}>
        <div className={styles.heroCarousel}>
          <Carousel
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            stopOnHover={false}
            animationHandler="fade"
            swipeable={false}
            autoPlay
            infiniteLoop
            interval={5000}
            transitionTime={1200}
          >
            {slideImages.map((slide) => (
              <div key={slide.url} className={styles.slide}>
                <img src={slide.url} className={styles.slideImg} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          {breadcrumbs?.length ? (
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              {breadcrumbs.map((c, i) => (
                <span key={i} className={styles.crumb}>
                  {c.to ? (
                    <Link to={c.to} className={styles.crumbLink}>{c.label}</Link>
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
          <h1 className={styles.resortName}>{resortName}</h1>
          {slogan ? <p className={styles.slogan}>{slogan}</p> : null}
        </div>
      </section>

      {/* ============ About ============ */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <span className="eyebrow">About the island</span>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </section>

      {/* ============ Explore ============ */}
      <section className={styles.explore}>
        <div className={styles.exploreInner}>
          <div className={styles.exploreHead}>
            <span className="eyebrow">Explore</span>
            <h2 className={styles.exploreTitle}>What awaits you.</h2>
          </div>
          <div className={styles.exploreGrid}>{children}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
