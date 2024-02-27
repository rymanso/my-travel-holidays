import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.webp";
import { isMobile } from "react-device-detect";
import { RxArrowRight, RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import {
  FaAngleRight,
  FaCross,
  FaCrosshairs,
  FaRightFromBracket,
  FaRightToBracket,
} from "react-icons/fa6";

export const Header = () => {
  const navigate = useNavigate();
  const [expandedSidebar, setExpandedSidebar] = useState(false);
  return (
    <>
      <div className={styles.banner}>
        <img
          src={logo}
          className={styles.logo}
          alt="Logo"
          onClick={() => navigate("/")}
        />

        <div className={styles.nav}>
          {isMobile ? (
            <RxHamburgerMenu onClick={() => setExpandedSidebar(true)} />
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
      <div
        className={`${styles.sidebar} ${
          expandedSidebar ? styles.sidebarExpanded : ""
        }`}
      >
        <div className={styles.closeSidebar}>
          <RxCross1 onClick={() => setExpandedSidebar(false)} />
        </div>
        <a href="/resorts">Resorts</a>
        <a href="/guest-houses">Guest Houses</a>
        <a href="/">Contact Us</a>
      </div>
    </>
  );
};
