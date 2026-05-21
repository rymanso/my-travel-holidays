import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import accom from "./accom.jpeg";
import dining from "./dining.jpeg";
import recre from "./recre.jpeg";
import { Header } from "../../../components/Header/Header";
import { getSlideImages } from "./imgUrls";
import { isMobile } from "react-device-detect";

export const RitzCarltonSummary = () => {
  return (
    <>
      <Header transparent />
      <ResortSummary
        resortName="The Ritz-Carlton"
        slogan="Maldives, Fari Islands."
        slideImages={getSlideImages(isMobile ? "400" : "800")}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Resorts", to: "/resorts" },
          { label: "The Ritz-Carlton" },
        ]}
        description="The Ritz-Carlton Maldives, Fari Islands welcomes you to embrace island life as sounds of the boduberu drum beat against a breath-taking Maldivian sunset.
        <br/><br/>
        Designed with respect for the area's fragile ecosystem — and the first Maldivian project to earn PEFC certification — the resort was built largely from prefabricated materials, with timber sourced from sustainable European forests. Its developers achieved EDGE certification, which led to the Maldives' first green loan."
      >
        <ImageCard
          title="Accomodation"
          eyebrow="Stays"
          src={accom}
          linkTo="/resorts/ritz-carlton/accomodation"
        >
          <p>
            100 elegantly-designed villas by globally renowned Kerry Hill
            Architects, each refined by a distinguished Aris Meeha — the
            legendary Ritz-Carlton butler service.
          </p>
        </ImageCard>
        <ImageCard
          title="Dining by Design"
          eyebrow="Taste"
          src={dining}
          linkTo="/resorts/ritz-carlton/dining"
        >
          <ul>
            <li>Cinema Under The Stars</li>
            <li>Mystique Garden</li>
            <li>Grand Sunset Beach</li>
            <li>Beach Cove &amp; Sandbank</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          eyebrow="Activities"
          src={recre}
          linkTo="/resorts/ritz-carlton/recreation"
        >
          <ul>
            <li>Tennis academy</li>
            <li>Fitness classes &amp; yoga</li>
            <li>Watersports</li>
            <li>Spa, snorkelling &amp; diving</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
