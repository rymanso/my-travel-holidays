import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";

export const AlimathaDining = () => (
  <GridPage title="Restaurant, Bar & Romantic Dining">
    <GridTextBox title="Restaurant">
      Savor the Italian style of our restaurant. You can choose between the
      all-inclusive formula and a la carte, experiencing a journey of flavors
      between the Maldives and Italy.
    </GridTextBox>
    <img src={one} alt="restaurant" />
    <img src={two} alt="romantic-dining" />
    <GridTextBox title="Romantic Dining">
      Feel the sand beneath your feet. Listen to the sound of the sea. Look at
      the stars and enjoy your romantic dinner at Barabaru cafe, with the chefs'
      special a la carte menu.
    </GridTextBox>
    <GridTextBox title="Main Bar">
      A perfect place to enjoy every hour of the day. Have a cool drink in the
      morning and enjoy live music at night.
    </GridTextBox>
    <img src={three} alt="main-bar" />
  </GridPage>
);
