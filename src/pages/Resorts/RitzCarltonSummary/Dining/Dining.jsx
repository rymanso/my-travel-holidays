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
import seven from "./seven.jpg";

export const RitzCarltonDining = () => (
  <GridPage title="Restaurants and Bars">
    <GridTextBox title="La Locanda">
      The spirit of Southern Italy comes alive at La Locanda. Here, morning is
      signaled by the aroma of rich espresso, Aperitivo hour arrives with the
      setting sun and homemade pasta is a prelude to a leisurely evening ahead.
    </GridTextBox>
    <img src={one} alt="restaurant" />
    <img src={two} alt="summer-dining" />
    <GridTextBox title="Summer Pavilion">
      Floating over the velvety lagoon and set within a lantern-inspired space,
      Summer Pavilion offers an intimate setting where Cantonese cuisine takes
      center stage.
    </GridTextBox>
    <GridTextBox title="IWAU">
      The Japanese translation of “to celebrate,” Iwau is exactly that: an
      honoring of Japanese flavors. Open to the night sky, the restaurant
      presents a lively Japanese Chef’s Table serving creative fresh seafood and
      meat dishes.
    </GridTextBox>
    <img src={three} alt="japanese-bar" />
    <img src={four} alt="ocean-bar" />
    <GridTextBox title="EAU Bar">
      Afternoons invite you to Eau Bar with its laid-back glamourous setting
      with an almost adult-only feel restaurant. The perfect place to relax,
      read a book and indulge in fresh oysters and caviar and sip on tableside
      cocktails.
    </GridTextBox>
    <GridTextBox title="Beach Shack">
      With sand underfoot and the sea just steps away, the family-friendly Beach
      Shack embraces the Mediterranean with its carefree spirit and relaxed
      cuisine. Shared plates and grilled seafood are served alongside fruit and
      herb-driven cocktails.
    </GridTextBox>
    <img src={five} alt="beach shack" />
    <img src={six} alt="arabesque" />
    <GridTextBox title="Arabesque">
      An eye-catching tribute to a traditional Bedouin tent, Arabesque invites
      diners on a journey from Lebanon to North India. The sunken dining room
      sets the scene for multiple dishes, flavorful hookahs, Turkish coffee,
      Moroccan tea and creative cocktails.
    </GridTextBox>
    <GridTextBox title="Tum Tum">
      Bao buns, noodles, dumplings, salads and soups from across the Asian
      continent are prepared to order at this food trailer meets restaurant in
      the Maldives, located at Fari Marina.
    </GridTextBox>
    <img src={seven} alt="tum-tum" />
  </GridPage>
);
