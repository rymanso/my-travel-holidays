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
      <Header transparent />
      <ResortSummary
        resortName="Nakai Dhiggiri"
        slogan="Dive into the silence and get inspired."
        slideImages={getSlideImages(isMobile ? "400" : "800")}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Resorts", to: "/resorts" },
          { label: "Nakai Dhiggiri" },
        ]}
        description="Here, love and respect for the environment are accompanied by a unique atmosphere where tranquility and silence envelope everything — and become the setting for a unique experience."
      >
        <ImageCard
          title="Accomodation"
          eyebrow="Stays"
          src={accom}
          linkTo="/resorts/nakai-dhiggiri/accomodation"
        >
          <ul>
            <li>34 over-water bungalows</li>
            <li>27 beach bungalows</li>
            <li>1 garden villa</li>
            <li>3 suites</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Dining &amp; Bar"
          eyebrow="Taste"
          src={dining}
          linkTo="/resorts/nakai-dhiggiri/dining"
        >
          <ul>
            <li>Over-water restaurant</li>
            <li>Sand restaurant</li>
            <li>Main bar</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          eyebrow="Activities"
          src={jetski}
          linkTo="/resorts/nakai-dhiggiri/recreation"
        >
          <ul>
            <li>Water sports &amp; scuba diving</li>
            <li>Beach volley &amp; aqua gym</li>
            <li>Gym, bocce &amp; ping-pong</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
