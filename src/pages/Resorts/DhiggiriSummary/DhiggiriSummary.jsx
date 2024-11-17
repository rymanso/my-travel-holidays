import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import accom from "./accom.jpeg";
import dining from "./dining.jpeg";
import jetski from "./jetski.jpeg";
import { Header } from "../../../components/Header/Header";
import { getSlideImages } from "./imgUrls";
import { isMobile } from "react-device-detect";

export const DhiggiriSummary = () => {
  return (
    <>
      <Header />
      <ResortSummary
        resortName="Nakai Dhiggiri"
        slogan="Dive in to the silence and get inspired."
        slideImages={getSlideImages(isMobile ? "400" : "800")}
        description="Here, love and respect for the environment are accompanied by aunique atmosphere where tranquility and silence envelope everything and become the setting for a unique experience."
      >
        <ImageCard
          title="Accomodation"
          src={accom}
          linkTo="/resorts/nakai-dhiggiri/accomodation"
        >
          <ul style={{ lineHeight: 1.5 }}>
            <li>34 Over Water Bungalows</li>
            <li>27 Beach Bungalows</li>
            <li>1 Garden Villa</li>
            <li>3 Suites</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Dining & Bar"
          src={dining}
          linkTo={"/resorts/nakai-dhiggiri/dining"}
        >
          <ul style={{ lineHeight: 1.5 }}>
            <li>Over Water Restaurant</li>
            <li>Sand Restaurant</li>
            <li>Main Bar</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          src={jetski}
          linkTo={"/resorts/nakai-dhiggiri/recreation"}
        >
          <ul style={{ lineHeight: 1.5 }}>
            <li>Water Sports</li>
            <li>Scuba Diving</li>
            <li>Beach Volley </li>
            <li>Aqua Gym</li>
          </ul>
          <ul style={{ lineHeight: 1.5 }}>
            <li>Gym</li>
            <li>Bocce </li>
            <li>Ping-Pong</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
