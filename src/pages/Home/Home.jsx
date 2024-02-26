import alimatha from "./alimatha.webp";
import logo from "./logo.webp";
import styles from "./Home.module.css";
import bigLogo from "./big-logo.webp";
import ContactForm from "../../components/ContactForm/ContactForm";
import { RxHamburgerMenu } from "react-icons/rx";
import { isMobile } from "react-device-detect";

export const Home = () => {
  return (
    <div className={styles.container}>
      <img
        src={alimatha}
        className={styles.alimatha}
        alt="Alimatha drone shot"
      />
      <div className={styles.banner}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <div className={styles.nav}>
          {isMobile ? (
            <RxHamburgerMenu />
          ) : (
            <>
              <span>
                <a href="/resorts">Resorts</a>
              </span>
              <span>Guest Houses</span>
              <span>Services</span>
              <span>Contact Us</span>
            </>
          )}
        </div>
      </div>
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
