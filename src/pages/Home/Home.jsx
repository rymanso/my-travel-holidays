import { Link } from "react-router-dom";
import { FaCompass, FaHandsHelping, FaUmbrellaBeach } from "react-icons/fa";
import alimatha from "./alimatha.jpeg";
import dhiggiri from "../Resorts/dhiggiri.jpeg";
import maayafushi from "../Resorts/maayafushi.webp";
import ritz from "../Resorts/ritz-carlton.jpg";
import resortsImg from "../Resorts/resorts.webp";
import styles from "./Home.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ResortCard } from "../../components/ResortCard/ResortCard";

const FEATURED = [
  {
    src: resortsImg,
    resort: "Nakai Alimatha",
    distance: "65 km from Malé",
    flight: "25 min seaplane",
    boat: "90 min speedboat",
    linkTo: "/resorts/nakai-alimatha",
    eyebrow: "Vaavu Atoll",
  },
  {
    src: dhiggiri,
    resort: "Nakai Dhiggiri",
    distance: "65 km from Malé",
    flight: "25 min seaplane",
    boat: "90 min speedboat",
    linkTo: "/resorts/nakai-dhiggiri",
    eyebrow: "Vaavu Atoll",
  },
  {
    src: maayafushi,
    resort: "Nakai Maayaafushi",
    distance: "65 km from Malé",
    flight: "25 min seaplane",
    boat: "90 min speedboat",
    linkTo: "/resorts/nakai-maayaafushi",
    eyebrow: "Alif Alif Atoll",
  },
  {
    src: ritz,
    resort: "The Ritz-Carlton, Fari Islands",
    distance: "51 km from Malé",
    boat: "45 min speedboat",
    linkTo: "/resorts/ritz-carlton",
    eyebrow: "Fari Islands",
  },
];

const VALUE_PROPS = [
  {
    Icon: FaCompass,
    title: "Hand-picked islands",
    body: "Every resort we recommend has been visited, vetted and loved. No two atolls are alike — we'll match you to the one that fits.",
  },
  {
    Icon: FaHandsHelping,
    title: "Concierge from start to finish",
    body: "Flights, seaplanes, transfers, dinners and dives. One point of contact, taking care of the small things so you can be still.",
  },
  {
    Icon: FaUmbrellaBeach,
    title: "Locally rooted",
    body: "We live in the Maldives. Our recommendations come from years of relationships with the people behind the resorts.",
  },
];

export const Home = () => {
  return (
    <div className={styles.page}>
      <Header transparent />

      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <img src={alimatha} className={styles.heroImg} alt="" />
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>MY Travels &amp; Holidays</span>
          <h1 className={styles.heroTitle}>
            Maldives, <em>curated.</em>
          </h1>
          <p className={styles.heroLede}>
            Embark on your journey to paradise and let the magic of the
            Maldives unfold before your eyes.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/resorts" className={styles.ctaPrimary}>
              Explore resorts
            </Link>
            <a href="#contact" className={styles.ctaGhost}>
              Plan a stay
            </a>
          </div>
        </div>
        <a href="#story" className={styles.scrollCue} aria-label="Scroll down">
          <span className={styles.scrollDot} />
        </a>
      </section>

      {/* ===================== STORY ===================== */}
      <section id="story" className={styles.story}>
        <div className={styles.section}>
          <span className="eyebrow">Our story</span>
          <h2 className={styles.storyTitle}>
            A quieter way to discover the islands.
          </h2>
          <p className={styles.storyBody}>
            From private overwater bungalows in the Vaavu Atoll to the
            sustainably-built villas of the Ritz-Carlton, Fari Islands — we
            help travellers find the corner of the Maldives that feels like
            it was built for them.
          </p>
        </div>
      </section>

      {/* ===================== VALUE PROPS ===================== */}
      <section className={styles.values}>
        <div className={styles.section}>
          <div className={styles.valueGrid}>
            {VALUE_PROPS.map(({ Icon, title, body }) => (
              <article key={title} className={styles.value}>
                <Icon className={styles.valueIcon} aria-hidden />
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED RESORTS ===================== */}
      <section className={styles.featured}>
        <div className={styles.section}>
          <div className={styles.sectionHead}>
            <div>
              <span className="eyebrow">Featured stays</span>
              <h2 className={styles.featuredTitle}>Our favourite islands.</h2>
            </div>
            <Link to="/resorts" className={styles.sectionLink}>
              View all resorts <span aria-hidden>→</span>
            </Link>
          </div>
          <div className={styles.featuredGrid}>
            {FEATURED.map((r) => (
              <ResortCard key={r.resort} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactCopy}>
            <span className="eyebrow">Get in touch</span>
            <h2 className={styles.contactTitle}>Let's plan something memorable.</h2>
            <p className={styles.contactLede}>
              Tell us a little about your trip — when you'd like to go, how
              many of you there are, and the kind of escape you have in
              mind. We'll come back to you within a day.
            </p>
          </div>
          <div className={styles.contactCard}>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
