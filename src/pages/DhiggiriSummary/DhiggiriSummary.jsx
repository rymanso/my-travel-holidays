import { ImageCard } from "../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../components/ResortSummary/ResortSummary";
import dhiggiri from "../Resorts/dhiggiri.webp";
import accom from "./accom.webp";
import dining from "./dining.webp";
import jetski from "./jetski.webp";
import { Header } from "../../components/Header/Header";

export const DhiggiriSummary = () => {
  return (
    <>
      <Header />
      <ResortSummary
        resortName="Nakai Dhiggiri"
        slogan="Dive in to the silence and get inspired."
        src={dhiggiri}
        description="Here, love and respect for the environment are accompanied by aunique atmosphere where tranquility and silence envelope everything and become the setting for a unique experience."
      >
        <ImageCard title="Accomodation" src={accom}>
          <ul style={{ lineHeight: 1.4 }}>
            <li>34 Over Water Bungalows</li>
            <li>27 Beach Bungalows</li>
            <li>1 Garden Villa</li>
            <li>3 Suites</li>
          </ul>
        </ImageCard>
        <ImageCard title="Dining & Bar" src={dining}>
          <ul style={{ lineHeight: 1.4 }}>
            <li>Over Water Restaurant</li>
            <li>Sand Restaurant</li>
            <li>Main Bar</li>
          </ul>
        </ImageCard>
        <ImageCard title="Recreation" src={jetski}>
          <ul style={{ lineHeight: 1.4 }}>
            <li>Water Sports</li>
            <li>Scuba Diving</li>
            <li>Beach Volley </li>
            <li>Aqua Gym</li>
          </ul>
          <ul style={{ lineHeight: 1.4 }}>
            <li>Gym</li>
            <li>Bocce </li>
            <li>Ping-Pong</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
