import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import one from "./one.webp";
import two from "./two.webp";
import three from "./three.webp";

export const MaayaafushiRecreation = () => (
  <GridPage title="Recreation">
    <img src={one} alt="scuba-diving" />
    <GridTextBox title="Scuba Diving & Water Sports">
      The sea depths that can be visited are numerous and their diversity offers
      options that are enjoyable not only for the more experienced divers, but
      also for beginners who try for the first time to descend into the water.
      The instructors at the NAKAI Diving Center in Maayafushi (PADI) will take
      you along well-known diving sites.
    </GridTextBox>
    <GridTextBox title="Spa">
      Let yourself be carried away by the tranquility of our Maadigha spa. A
      cozy and quiet place where you can indulge in the best massage techniques
      and rebalance your senses.
    </GridTextBox>
    <img src={two} alt="spa" />
    <img src={three} alt="activities" />
    <GridTextBox title="Sports & Activities">
      Windsurf, Canoa, Acquagym, Beach Volley, Darts, Gym, Morning Gym, Table
      Tennis, Bowls & Mini Golf.
    </GridTextBox>
  </GridPage>
);
