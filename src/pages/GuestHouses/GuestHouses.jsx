import resorts from "../Resorts/resorts.webp";
import dhiggiri from "../Resorts/dhiggiri.jpeg";
import football from "./football.webp";
import styles from "./GuestHouses.module.css";
import { isMobile } from "react-device-detect";
import { ImageCard } from "../../components/ImageCard/ImageCard";
import { Header } from "../../components/Header/Header";

export const GuestHouses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={football} className={styles.football} alt="Football pitch" />
        <p className={styles.title}>Guest Houses</p>
      </div>
      <Header />
      <div
        className={styles.content}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <ImageCard src={resorts} title="Eky Home Stay" />
        <ImageCard src={dhiggiri} title="Olive Goidhoo" />
      </div>
    </div>
  );
};
