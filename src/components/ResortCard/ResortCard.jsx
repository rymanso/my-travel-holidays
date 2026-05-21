import styles from "./ResortCard.module.css";
import { FaLocationDot, FaPlane, FaSailboat } from "react-icons/fa6";
import { ImageCard } from "../ImageCard/ImageCard";

export const ResortCard = ({ src, resort, distance, flight, boat, linkTo, eyebrow = "Resort" }) => {
  return (
    <ImageCard src={src} title={resort} eyebrow={eyebrow} linkTo={linkTo}>
      <ul className={styles.facts}>
        <li className={styles.fact}>
          <FaLocationDot className={styles.icon} aria-hidden />
          <span>{distance}</span>
        </li>
        {flight ? (
          <li className={styles.fact}>
            <FaPlane className={styles.icon} aria-hidden />
            <span>{flight}</span>
          </li>
        ) : null}
        <li className={styles.fact}>
          <FaSailboat className={styles.icon} aria-hidden />
          <span>{boat}</span>
        </li>
      </ul>
    </ImageCard>
  );
};
