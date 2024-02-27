import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";
import four from "./four.webp";

export const DhiggiriAccomodation = () => (
  <GridPage title="Accomodation">
    <img src={one} alt="over-water-suite" />
    <GridTextBox title="Suite">
      Facing the ocean, the Suites are quiet, spacious and cozy. The perfect
      place from which to enjoy the Resort and the ocean. the ocean, the Suites
      are quiet, spacious and cozy. The perfect place from which to enjoy the
      Resort and the ocean.
    </GridTextBox>
    <GridTextBox title="Over Water">
      In the 34 Dhiggiri’s Water Villas you will open your eyes listening to the
      sound of the sea and looking at horizon. A breathtaking experience.
    </GridTextBox>
    <img src={two} alt="over-water" />
    <img src={three} alt="beach-bungalow" />
    <GridTextBox title="Beach Bungalow">
      The Beach Bungalows are round shaped and have a brand new and modern
      structure, enclosed in the coral walls of the real Maldives.
    </GridTextBox>
    <GridTextBox title="Garden Room">
      For those who are looking for maximum privacy, this room, located in the
      heart of the island, is surrounded by a wall of real coral.
    </GridTextBox>
    <img src={four} alt="garden-room" />
  </GridPage>
);
