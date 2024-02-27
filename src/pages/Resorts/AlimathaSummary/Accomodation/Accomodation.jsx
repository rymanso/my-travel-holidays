import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";
import four from "./four.webp";

export const AlimathaAccomodation = () => (
  <GridPage title="Accomodation">
    <img src={one} alt="over-water-bungalow" />
    <GridTextBox title="Over Water">
      These rooms look at sunrise, sunset and the endless horizon. Renovated in
      early 2021, they have been enhanced with a new balcony and eye-catching
      new details.
    </GridTextBox>
    <GridTextBox title="Beach Bungalow">
      These rooms embrace the island, offering glimpses of the ocean through the
      vegetation, and all the comfort of an accommodation close to the sea.
    </GridTextBox>
    <img src={two} alt="beach-bungalow" />
    <img src={three} alt="garden-bungalow" />
    <GridTextBox title="Garden Bungalow">
      The allure of nature's sounds by day, an enveloping silence by night. A
      quiet room with a private patio and garden that offers privacy and
      intimacy in the heart of the island.
    </GridTextBox>
    <GridTextBox title="Garden Room">
      Garden Rooms are a new type of accommodation built in a two-storey
      building located in the inner part of the resort, but close to the sea. A
      new way to live in Alimatha.
    </GridTextBox>
    <img src={four} alt="garden-room" />
  </GridPage>
);
