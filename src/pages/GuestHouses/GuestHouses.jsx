import resorts from "../Resorts/resorts.webp";
import dhiggiri from "../Resorts/dhiggiri.jpeg";
import football from "./football.webp";
import styles from "./GuestHouses.module.css";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { PageHero } from "../../components/PageHero/PageHero";

const GUEST_HOUSES = [
  { src: resorts, title: "Eky Home Stay", eyebrow: "Local stay" },
  { src: dhiggiri, title: "Olive Goidhoo", eyebrow: "Local stay" },
];

export const GuestHouses = () => {
  return (
    <div className={styles.page}>
      <Header transparent />
      <PageHero
        image={football}
        eyebrow="Maldives"
        title="Guest Houses"
        lede="Closer to the community, on the inhabited islands. A different
              Maldives — local food, neighbourly hospitality, and a slower pace."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Guest Houses" },
        ]}
      />

      <section className={styles.body}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <span className="eyebrow">Local hospitality</span>
            <h2 className={styles.introTitle}>Stays with the locals.</h2>
          </div>
          <div className={styles.grid}>
            {GUEST_HOUSES.map((g) => (
              <ImageCard key={g.title} {...g} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
