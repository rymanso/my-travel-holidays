import styles from "./ResortCard.module.css";
import { FaHouse } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa6";
import { FaSailboat } from "react-icons/fa6";
import { ImageCard } from "../ImageCard/ImageCard";

export const ResortCard = ({ src, resort, distance, flight, boat, linkTo }) => {
  return (
    <ImageCard src={src} title={resort} linkTo={linkTo}>
      <div className={styles.detailItem}>
        <FaHouse />
        <p>{distance}</p>
      </div>
      <div className={styles.detailItem}>
        <FaPlane />
        <p>{flight}</p>
      </div>
      <div className={styles.detailItem}>
        <FaSailboat />
        <p>{boat}</p>
      </div>
    </ImageCard>
  );
};
