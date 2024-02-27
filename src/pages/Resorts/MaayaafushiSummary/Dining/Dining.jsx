import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";
import four from "./four.webp";
import five from "./five.webp";

export const MaayaafushiDining = () => (
  <GridPage title="Restaurant, Bar & Romantic Dining">
    <GridTextBox title="Restaurant">
      Discover all the flavors of Maayafushi. With the two formulas All
      Inclusive and A la càrte you can taste the full range of our Chef's menu.
      In our Restaurant you can experience both Italian and Maldivian cuisine.
    </GridTextBox>
    <img src={one} alt="restaurant" />
    <img src={two} alt="romantic-dining" />
    <GridTextBox title="Romantic Dining">
      Feel the sand under your feet. Listen to the sound of the sea. Look to the
      star and enjoy your Romantic Dinner.
    </GridTextBox>
    <GridTextBox title="Main Bar">
      Characterized by a quite yet sociable atmosphere, it's the perfect
      location to enjoy the drinks of our All Inclusive offer.
    </GridTextBox>
    <img src={three} alt="main-bar" />
    <img src={four} alt="ocean-bar" />
    <GridTextBox title="Ocean Bar">
      The Ocean Bar stands right into the sea. It's the perfect spot to have a
      fresh drink during hot maldivian mornings, while at the end of the day,
      you will be the spectator of the sun light show.
    </GridTextBox>
    <GridTextBox title="Sand cafe">
      Enjoy a drink, american coffee or a hot tea with sweet or savory snacks
      while looking at the ocean in total relax.
    </GridTextBox>
    <img src={five} alt="sand-cafe" />
  </GridPage>
);
