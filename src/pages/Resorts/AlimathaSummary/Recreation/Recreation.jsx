import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";
import four from "./four.webp";

export const AlimathaRecreation = () => (
  <GridPage title="Recreation">
    <img src={one} alt="scuba-diving" />
    <GridTextBox title="Scuba Diving">
      Alimathà is not only a tropical paradise for the sun, the beautiful beach
      and the surrounding nature. Underwater there is a real world to discover
      and you can do it with the staff of NAKAI Diving Center (PADI). The island
      is located near a wide selection of unique dive sites. Some of them are on
      the list of the best dive sites in the world.
    </GridTextBox>
    <GridTextBox title="Water Sports">
      Alimatha is located in the middle of a vast lagoon, ideal for exploring
      banana boating, tube riding or even to go explore the islands on the
      jetskis.
    </GridTextBox>
    <img src={two} alt="water-sports" />
    <img src={three} alt="spa" />
    <GridTextBox title="Spa">
      Let yourself be carried away by the tranquility of our Maadigha spa. A
      cozy and quiet place where you can indulge in the best massage techniques
      and rebalance your senses.
    </GridTextBox>
    <GridTextBox title="Sports & Activities">
      Windsurfing, Canoe, Football, Tennis, Aquagym, Beach Volley, Gym, Padel
      Tennis, Ping-pong, Darts, Bocce, Muscle awakening.
    </GridTextBox>
    <img src={four} alt="activities" />
  </GridPage>
);
