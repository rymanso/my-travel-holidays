import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import maayafushi from "../maayafushi.webp";
import accom from "./accom.jpeg";
import dining from "./dining.jpeg";
import recre from "./recre.jpeg";
import { Header } from "../../../components/Header/Header";

export const MaayaafushiSummary = () => {
  return (
    <>
      <Header />
      <ResortSummary
        resortName="Nakai Maayaafushi"
        slogan="Where the beauty reveals itself"
        src={maayafushi}
        description="Located in the Alif Alif atoll, Maayafushi has all the peculiarities that make this place unique: a wild vegetation and a seabed populated by many species of fish. Largely renovatedduring 2021, Maayafushi looks more beautiful than ever and is ready to make everyone fall in love once again"
      >
        <ImageCard
          title="Accomodation"
          src={accom}
          linkTo={"/resorts/nakai-maayaafushi/accomodation"}
        >
          <ul style={{ lineHeight: 1.4 }}>
            <li>34 Over Water Bungalows</li>
            <li>27 Beach Bungalows</li>
            <li>1 Garden Villa</li>
            <li>3 Suites</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Dining & Bar"
          src={dining}
          linkTo={"/resorts/nakai-maayaafushi/dining"}
        >
          <ul style={{ lineHeight: 1.4 }}>
            <li>Over Water Restaurant</li>
            <li>Sand Restaurant</li>
            <li>Main Bar</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          src={recre}
          linkTo={"/resorts/nakai-maayaafushi/recreation"}
        >
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
