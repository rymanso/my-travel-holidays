import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";

export const DhiggiriDining = () => (
  <GridPage title="Restaurant, Bar & Romantic Dining">
    <GridTextBox title="Over Water Restaurant">
      Stare at the sea and face the horizon. Our Over Water Restaurant creates
      out of the meals a poetry of sounds, colors and taste.
    </GridTextBox>
    <img src={one} alt="restaurant" />
    <img src={two} alt="romantic-dining" />
    <GridTextBox title="Sand Restaurant">
      Feel the sand under your feet tasting the best of Italian and Maldivian
      cuisine at our all inclusive restaurant.
    </GridTextBox>
    <GridTextBox title="Main Bar">
      A perfect place to enjoy every hour of the day. Have a cool drink in the
      morning and enjoy live music at night.
    </GridTextBox>
    <img src={three} alt="main-bar" />
  </GridPage>
);
