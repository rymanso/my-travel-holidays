import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";

export const MaayaafushiAccomodation = () => (
  <GridPage title="Accomodation">
    <img src={one} alt="over-water-suite" />
    <GridTextBox title="Over Water">
      Peer out over infinity from your private balcony during the day, and be
      lulled by the sound of the sea before falling asleep. You'll have a unique
      experience overlooking infinity.
    </GridTextBox>
    <GridTextBox title="Beach Bungalow">
      Facing directly onto the beach, these rooms are the perfect solution for
      those who like to peer through the vegetation to enjoy the unique
      spectacle of the Maldivian horizon.
    </GridTextBox>
    <img src={two} alt="beach-bungalow" />
    <img src={three} alt="garden-villa" />
    <GridTextBox title="Garden Villa">
      A cozy room and a private garden enclosed by a coral wall. Enjoy the scent
      of palm trees and a magical tranquility. A unique experience to discover
      the soul of Maayafushi.
    </GridTextBox>
  </GridPage>
);
