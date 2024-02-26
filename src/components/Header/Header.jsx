import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.webp";
import { isMobile } from "react-device-detect";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.banner}>
      <img
        src={logo}
        className={styles.logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      <div className={styles.nav}>
        {isMobile ? (
          <RxHamburgerMenu />
        ) : (
          <>
            <span>
              <a href="/resorts">Resorts</a>
            </span>
            <span>
              <a href="/guest-houses">Guest Houses</a>
            </span>
            {/* <span>Services</span> */}
            <span>
              <a href="/">Contact Us</a>
            </span>
          </>
        )}
      </div>
    </div>
  );
};
