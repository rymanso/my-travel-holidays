import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import accom from "./accom.jpeg";
import dining from "./dining.jpeg";
import recre from "./recre.jpeg";
import { Header } from "../../../components/Header/Header";
import { getSlideImages } from "./imgUrls";
import { isMobile } from "react-device-detect";

export const MaayaafushiSummary = () => {
  return (
    <>
      <Header transparent />
      <ResortSummary
        resortName="Nakai Maayaafushi"
        slogan="Where the beauty reveals itself."
        slideImages={getSlideImages(isMobile ? "400" : "800")}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Resorts", to: "/resorts" },
          { label: "Nakai Maayaafushi" },
        ]}
        description="Located in the Alif Alif atoll, Maayafushi has all the peculiarities that make this place unique: wild vegetation and a seabed populated by many species of fish. Largely renovated during 2021, Maayafushi looks more beautiful than ever and is ready to make everyone fall in love once again."
      >
        <ImageCard
          title="Accomodation"
          eyebrow="Stays"
          src={accom}
          linkTo="/resorts/nakai-maayaafushi/accomodation"
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
          linkTo="/resorts/nakai-maayaafushi/dining"
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
          src={recre}
          linkTo="/resorts/nakai-maayaafushi/recreation"
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
