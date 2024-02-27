import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import alima2 from "./alima2.webp";
import accom from "./accom.webp";
import dining from "./dining.webp";
import tennis from "./tennis.webp";
import { Header } from "../../../components/Header/Header";
export const AlimathaSummary = () => {
  return (
    <>
      <Header />
      <ResortSummary
        resortName="Nakai Alimatha"
        slogan="Barefoot in Paradise"
        src={alima2}
        description="Located in the Vaavu Atoll, one of the most pristine sites in the Maldives. Alimathà embodies the soul of the NAKAI group. Recently renovated, it is now more beautiful and greener than ever. Brand new for 2021 are a 550 square meter swimming pool and the installation of the Maldives' first Padel Tennis court."
      >
        <ImageCard
          title="Accomodation"
          src={accom}
          linkTo="/resorts/nakai-alimatha/accomodation"
        >
          <ul style={{ lineHeight: 1.4 }}>
            <li>34 Over water bungalows</li>
            <li>98 Beach bungalows</li>
            <li>29 Garden bungalows</li>
            <li>12 Garden rooms</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Dining & Bar"
          src={dining}
          linkTo={"/resorts/nakai-alimatha/dining"}
        >
          <ul style={{ lineHeight: 1.4 }}>
            <li>Main Restaurant</li>
            <li>Romantic Dinner</li>
            <li>Barabaru Cafe' </li>
            <li>Main Bar</li>
            <li>Sunset Bar</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          src={tennis}
          linkTo={"/resorts/nakai-alimatha/recreation"}
        >
          <ul style={{ lineHeight: 1.4 }}>
            <li>Water Sports</li>
            <li>Scuba Diving</li>
            <li>Beach Volley </li>
            <li>Aqua Gym</li>
            <li>Tennis</li>
          </ul>
          <ul style={{ lineHeight: 1.4 }}>
            <li>Gym</li>
            <li>Football</li>
            <li>Bocce </li>
            <li>Ping-Pong</li>
            <li>Padel Tennis</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
