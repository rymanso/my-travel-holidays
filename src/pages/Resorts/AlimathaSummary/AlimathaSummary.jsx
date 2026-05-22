import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import accom from "./accom.jpeg";
import dining from "./dining.jpeg";
import tennis from "./tennis.jpeg";
import { Header } from "../../../components/Header/Header";
import { getSlideImages } from "./imgUrls";
import { isMobile } from "react-device-detect";

export const AlimathaSummary = () => {
  return (
    <>
      <Header transparent />
      <ResortSummary
        resortName="Nakai Alimatha"
        slogan="Barefoot in paradise."
        slideImages={getSlideImages(isMobile ? "400" : "800")}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Resorts", to: "/resorts" },
          { label: "Nakai Alimatha" },
        ]}
        description="Located in the Vaavu Atoll, one of the most pristine sites in the Maldives, Alimathà embodies the soul of the NAKAI group. Recently renovated, it is more beautiful and greener than ever. Brand new for 2021 are a 550-square-metre swimming pool and the installation of the Maldives' first padel tennis court."
      >
        <ImageCard
          title="Accomodation"
          eyebrow="Stays"
          src={accom}
          linkTo="/resorts/nakai-alimatha/accomodation"
        >
          <ul>
            <li>34 over-water bungalows</li>
            <li>98 beach bungalows</li>
            <li>29 garden bungalows</li>
            <li>12 garden rooms</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Dining &amp; Bar"
          eyebrow="Taste"
          src={dining}
          linkTo="/resorts/nakai-alimatha/dining"
        >
          <ul>
            <li>Main restaurant</li>
            <li>Romantic dinner</li>
            <li>Barabaru café</li>
            <li>Main bar</li>
            <li>Sunset bar</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          eyebrow="Activities"
          src={tennis}
          linkTo="/resorts/nakai-alimatha/recreation"
        >
          <ul>
            <li>Water sports &amp; scuba diving</li>
            <li>Beach volley &amp; aqua gym</li>
            <li>Tennis &amp; padel tennis</li>
            <li>Football, gym &amp; bocce</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
