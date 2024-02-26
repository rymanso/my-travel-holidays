import styles from "./ResortCard.module.css";
import { FaHouse } from "react-icons/fa6";
import { FaPlane } from "react-icons/fa6";
import { FaSailboat } from "react-icons/fa6";

export const ResortCard = ({ src, resort, distance, flight, boat }) => {
  return (
    <div className={styles.card}>
      <img src={src} className={styles.picture} alt="resort-in-card" />
      <p className={styles.resortName}>{resort}</p>
      <div className={styles.details}>
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
      </div>
    </div>
  );
};
