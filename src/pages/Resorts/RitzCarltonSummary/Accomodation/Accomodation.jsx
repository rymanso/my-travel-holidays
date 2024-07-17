import {
  GridPage,
  GridTextBox,
} from "../../../../components/GridPage/GridPage";
import ocean_pool_villa from "./ocean_pool_villa.jpg";
import lagoon_pool_villa from "./lagoon_pool_villa.jpg";
import beach_pool_villa from "./beach_pool_villa.jpg";
import sunset_beach_pool_villa from "./sunset_beach_pool_villa.jpg";
import two_bedroom_water_pool_villa from "./two_bedroom_water_pool_villa.jpg";
import two_bedroom_beach_pool_villa from "./two_bedroom_beach_pool_villa.jpg";
import two_bedroom_sunset_beach_pool_villa from "./two_bedroom_sunset_beach_pool_villa.jpg";
import the_ritz_carlton_estate from "./the_ritz_carlton_estate.jpg";

export const RitzCarltonAccomodation = () => (
  <GridPage title="Accomodation">
    <img src={ocean_pool_villa} alt="ocean-pool-villa" />
    <GridTextBox title="Ocean Pool Villa">
    Nestled overwater looking out unto an endless horizon of
    ocean, welcome a spectacular Maldivian sunrise everyday.
    </GridTextBox>
    <GridTextBox title="Lagoon Pool Villa">
    Floating over a crystal clear lagoon overlooking a
    breath-taking Maldivian sunset.
    </GridTextBox>
    <img src={lagoon_pool_villa} alt="lagoon-pool-villa" />
    <img src={beach_pool_villa} alt="beach-pool-villa" />
    <GridTextBox title="Beach Pool Villa">
    Tucked away amidst lush vegetation with private pathways
    to a vast lagoon-facing beachfront. Wake up to a glowing
    Maldivian sun rise over the horizon.
    </GridTextBox>
    <GridTextBox title="Sunset Beach Pool Villa">
    Surrounded by coconut trees and foliage, step unto your
    private pathway to an expansive beachfront overlooking a
    surreal Maldivian sunset.
    </GridTextBox>
    <img src={sunset_beach_pool_villa} alt="sunset-beach-pool-villa" />
    <img src={two_bedroom_water_pool_villa} alt="two-bedroom-water-pool-villa" />
    <GridTextBox title="Two Bedroom Water Pool Villa">
    Panoramic ocean views with either sunrise or sunset outlook.
    </GridTextBox>
    <GridTextBox title="Two Bedroom Beach Pool Villa">
    Cocooned by verdant vegetation opening up to an
    expansive sunrise-facing beachfront.
    </GridTextBox>
    <img src={two_bedroom_beach_pool_villa} alt="two-bedroom-beach-pool-villa" />
    <img src={two_bedroom_sunset_beach_pool_villa} alt="two-bedroom-sunset-beach-pool-villa" />
    <GridTextBox title="Two Bedroom Sunset Beach Pool Villa">
    Enveloped by natural vegetation opening up to a beachfront
    of unparalleled space to watch the sunset over the horizon.
    </GridTextBox>
    <GridTextBox title="The Ritz-Carlton Estate">
    The ultimate private beach residence ensconced by natural
    vegetation with an unparalleled space and sunset views.
    </GridTextBox>
    <img src={the_ritz_carlton_estate} alt="the-ritz-carlton-estate" />
  </GridPage>
);
