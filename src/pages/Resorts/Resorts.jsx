import resorts from "./resorts.webp";
import styles from "./Resorts.module.css";
import { ResortCard } from "../../components/ResortCard/ResortCard";
import dhiggiri from "./dhiggiri.webp";
import maayafushi from "./maayafushi.webp";
import { isMobile } from "react-device-detect";
import { Header } from "../../components/Header/Header";

export const Resorts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={resorts} className={styles.resorts} alt="Resort" />
        <p className={styles.title}>Resorts</p>
      </div>
      <Header />
      <div
        className={styles.content}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <ResortCard
          src={resorts}
          resort="Nakai Alimatha"
          distance="65km from Male'"
          flight="25 mins by Seaplane"
          boat="90 mins by Speedboat"
          linkTo="/nakai-alimatha"
        />
        <ResortCard
          src={dhiggiri}
          resort="Nakai Dhiggiri"
          distance="65km from Male'"
          flight="25 mins by Seaplane"
          boat="90 mins by Speedboat"
          linkTo="/nakai-dhiggiri"
        />
        <ResortCard
          src={maayafushi}
          resort="Nakai Maayaafushi"
          distance="65km from Male'"
          flight="25 mins by Seaplane"
          boat="90 mins by Speedboat"
          linkTo="/nakai-maayaafushi"
        />
      </div>
    </div>
  );
};
