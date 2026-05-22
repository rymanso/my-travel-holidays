import resorts from "./resorts.webp";
import dhiggiri from "./dhiggiri.jpeg";
import maayafushi from "./maayafushi.webp";
import ritz from "./ritz-carlton.jpg";
import styles from "./Resorts.module.css";
import { ResortCard } from "../../components/ResortCard/ResortCard";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { PageHero } from "../../components/PageHero/PageHero";

const RESORTS = [
  {
    src: resorts,
    resort: "Nakai Alimatha",
    eyebrow: "Vaavu Atoll",
    distance: "65 km from Malé",
    flight: "25 min seaplane",
    boat: "90 min speedboat",
    linkTo: "/resorts/nakai-alimatha",
  },
  {
    src: dhiggiri,
    resort: "Nakai Dhiggiri",
    eyebrow: "Vaavu Atoll",
    distance: "65 km from Malé",
    flight: "25 min seaplane",
    boat: "90 min speedboat",
    linkTo: "/resorts/nakai-dhiggiri",
  },
  {
    src: maayafushi,
    resort: "Nakai Maayaafushi",
    eyebrow: "Alif Alif Atoll",
    distance: "65 km from Malé",
    flight: "25 min seaplane",
    boat: "90 min speedboat",
    linkTo: "/resorts/nakai-maayaafushi",
  },
  {
    src: ritz,
    resort: "The Ritz-Carlton, Fari Islands",
    eyebrow: "North Malé Atoll",
    distance: "51 km from Malé",
    boat: "45 min speedboat",
    linkTo: "/resorts/ritz-carlton",
  },
];

export const Resorts = () => {
  return (
    <div className={styles.page}>
      <Header transparent />
      <PageHero
        image={resorts}
        eyebrow="Maldives"
        title="Resorts"
        lede="Four distinctive islands, each with a personality of its own. From the
              wild lagoons of Alimathà to the architectural calm of the Ritz-Carlton,
              Fari Islands."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Resorts" },
        ]}
      />

      <section className={styles.body}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <span className="eyebrow">Featured collection</span>
            <h2 className={styles.introTitle}>Pick your island.</h2>
          </div>
          <div className={styles.grid}>
            {RESORTS.map((r) => (
              <ResortCard key={r.resort} {...r} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
