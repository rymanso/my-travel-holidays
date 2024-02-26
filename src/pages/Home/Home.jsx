import alimatha from "./alimatha.webp";
import styles from "./Home.module.css";
import bigLogo from "./big-logo.webp";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  return (
    <div className={styles.container}>
      <img
        src={alimatha}
        className={styles.alimatha}
        alt="Alimatha drone shot"
      />
      <Header />

      <div className={styles.body}>
        <img src={bigLogo} className={styles.bigLogo} alt="Logo" />
        <p className={styles.embarkText}>
          Embark on your journey to paradise and let the magic of the Maldives
          unfold before your eyes with MY Travels and Holidays.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};
