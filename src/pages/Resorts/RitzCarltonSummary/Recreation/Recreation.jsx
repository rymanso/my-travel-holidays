import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.jpg";
import two from "./two.jpg";
import three from "./three.jpg";
import four from "./four.jpg";
import five from "./five.jpg";
import six from "./six.jpg";

export const RitzCarltonRecreation = () => (
  <GridPage title="Recreation">
    <img src={one} alt="tennis" />
    <GridTextBox title="Tennis Academy">
      Enjoy a game on our synthetic foored lit tennis court. If you are in need
      of a tennis partner, our Ladies & Gentlemen are happy to assist in fnding
      someone suitable to play with during your stay. Our professional tennis
      professional is available for private coaching sessions or as playing
      partner, to help you improve your tennis game while on holidays. From
      private, semi-private, ‘hitting match play’ to a social group
      tournament... the possibilities are endless!
    </GridTextBox>
    <GridTextBox title="Fitness Centre">
      The Fitness Centre offers state-of-the-art LifeFitness Elevation Series
      equipment, located within its own specialised studio. LifeFitness
      equipment incorporates the principles of the most innovative training
      techniques, introduced to our guests by our Fitness Instructors, who will
      inspire you to create, change or enhance your personal lifestyle goals.
    </GridTextBox>
    <img src={two} alt="fitness" />
    <img src={three} alt="SUP" />
    <GridTextBox title="Family Watersports">
      Take a catamaran trip, or try the stand-up paddle board.
    </GridTextBox>
    <GridTextBox title="Yoga">
      Come experience any, or many of our Yoga and Yoga related experiences,
      inlucding{" "}
      <i>
        Sound of Healing, Meditation and Pranayama, Tradational Hatha Yoga,
        Aerial Yoga, Yin Yoga, Post-natal Yoga
      </i>{" "}
      and more...
    </GridTextBox>
    <img src={four} alt="Yoga" />
    <img src={five} alt="spa" />
    <GridTextBox title="Spa">
      A ring-shaped sanctuary nestled over the turquoise lagoon, The
      Ritz-Carlton Spa at The Ritz-Carlton Maldives, Fari Islands, offers nine
      spa treatment rooms, including a spa suite with its own relaxation lounge,
      a salon, and a boutique. Cardinal directions of each treatment room exude
      powerful energy complemented with healing massages and an organic body and
      skincare collection by Bamford, offering guests a luxurious wellness
      experience for their visit to the Maldives.​
    </GridTextBox>
    <GridTextBox title="Ocean Discoveries">
      Nowhere on earth is the sea as captivating as it is here, lapping at the
      shores of The Ritz-Carlton Maldives, Fari Islands. The breathtaking waters
      of the Indian Ocean surrounding this pristine island offer endless
      opportunities to discover and explore a magnificent underwater world that
      lies beneath the glittering surface. This environment is rich in marine
      life, waiting for you to discover the underwater world.
    </GridTextBox>
    <img src={six} alt="Yoga" />
  </GridPage>
);
