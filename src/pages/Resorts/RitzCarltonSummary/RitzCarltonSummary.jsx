import { ImageCard } from "../../../components/ImageCard/ImageCard";
import { ResortSummary } from "../../../components/ResortSummary/ResortSummary";
import ritz from "../ritz-carlton.jpg";
import accom from "./accom.jpeg";
import dining from "./dining.jpeg";
import recre from "./recre.jpeg";
import { Header } from "../../../components/Header/Header";

export const RitzCarltonSummary = () => {
  const cardDescriptionStyle = {
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Bacasime Antique",
  };
  return (
    <>
      <Header />
      <ResortSummary
        resortName="The Ritz-Carlton"
        slogan="Maldives, Fari Islands"
        src={ritz}
        description="The Ritz-Carlton Maldives, Fari Islands welcomes you to
        embrace island life as sounds of the boduberu drum beat
        against a breath-taking Maldivian sunset as the island transitions
        from a day filled with memorable moments into an evening of
        serenity and reflection.
        <br/><br/>
        Designing The Ritz-Carlton Maldives, Fari Islands encompassed more than architecture, art and décor; above all, it was
        created with respect for the area’s fragile ecosystem. Before breaking ground on an existing sandbank, marine experts
        extensively studied the oceanographic conditions to ensure minimal impact on the coral reef and spawning.
        Construction materials were carefully sourced to favor prefabricated materials, which reduced the need for cutting and heavy
        machinery, and PEFC-certified timber was brought from sustainable forests in Europe, allowing us to earn PEFC Project
        Certification. The resort’s developers achieved EDGE certification in building the resort, which led to the Maldives’ first green
        loan."
      >
        <ImageCard
          title="Accomodation"
          src={accom}
          linkTo={"/resorts/ritz-carlton/accomodation"}
        >
          <div style={cardDescriptionStyle}>
            Presenting 100 elegantly-designed villas by globally renowned Kerry
            Hill Architects. <br />
            <br />
            The legendary Ritz-Carlton service is refined by a distinguished
            Aris Meeha for each villa.
          </div>
        </ImageCard>
        <ImageCard
          title="Dining by Design"
          src={dining}
          linkTo={"/resorts/ritz-carlton/dining"}
        >
          <ul style={{ lineHeight: 1.5, marginLeft: "-20px" }}>
            <li>Cinema Under The Stars</li>
            <li> Mystique Garden</li>
            <li>Grand Sunset Beach</li>
          </ul>

          <ul style={{ lineHeight: 1.5, marginLeft: "-20px" }}>
            <li>Beach Cove</li>
            <li>Sandbank</li>
          </ul>
        </ImageCard>
        <ImageCard
          title="Recreation"
          src={recre}
          linkTo={"/resorts/ritz-carlton/recreation"}
        >
          <ul style={{ lineHeight: 1.5, marginLeft: "-20px" }}>
            <li>Tennis Academy</li>
            <li>Fitness Classes</li>
            <li>Watersports</li>
          </ul>
          <ul style={{ lineHeight: 1.5, marginLeft: "-20px" }}>
            <li>Spa</li>
            <li>Yoga</li>
            <li>Snorkelling and Diving</li>
          </ul>
        </ImageCard>
      </ResortSummary>
    </>
  );
};
