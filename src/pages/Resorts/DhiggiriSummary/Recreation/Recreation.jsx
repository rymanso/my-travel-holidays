import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import two from "./two.webp";
import three from "./three.webp";
import jetski from "../jetski.webp";

export const DhiggiriRecreation = () => (
  <GridPage title="Recreation">
    <img src={jetski} alt="scuba-diving" />
    <GridTextBox title="Scuba Diving & Water Sports">
      Completely restored in 2016, DhiggiriResort has reborn with a new look
      whilemaintaining the values that havecharacterized its management for
      thepast 20 years. Here, love and respect forthe environment are
      accompanied by aunique atmosphere where tranquility andsilence envelop
      everything and becomethe setting for a unique experience.
    </GridTextBox>
    <GridTextBox title="Spa">
      Let yourself be transported by the tranquility of our Maadigha spa. A cozy
      and quiet place where you can abandon yourself thanks to the best massage
      techniques and rebalance your senses.
    </GridTextBox>
    <img src={two} alt="spa" />
    <img src={three} alt="sports" />
    <GridTextBox title="Sports & Activities"></GridTextBox>
  </GridPage>
);
