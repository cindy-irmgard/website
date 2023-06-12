import portrait from "@/assets/images/portrait.jpg";
import falling from "@/assets/images/falling.jpg";
import Mees from "@/assets/images/Mees.jpg";
import Alisha from "@/assets/images/Alisha.jpg";
import AlishaNDSM from "@/assets/images/AlishaNDSM.jpg";
import BiancaEnKontiki from "@/assets/images/BiancaEnKontiki.jpg";
import luca from "@/assets/images/luca.jpg";
import mom from "@/assets/images/mom.jpg";

// concert
import kiefer from "@/assets/images/kiefer.jpg";
import JessCalcaterra from "@/assets/images/JessCalcaterra.jpg";
import KelvinJones from "@/assets/images/KelvinJones.jpg";
import KelvinJonesSing from "@/assets/images/KelvinJonesSing.jpg";
import XanderHubrecht from "@/assets/images/XanderHubrecht.jpg";
import KennyB from "@/assets/images/KennyB.jpg";
import VanVelzenEnRalfPouw from "@/assets/images/vanVelzenEnRalfPouw.jpg";
import HaarlemJazz from "@/assets/images/HaarlemJazz.jpg";
import Alvarosoler from "@/assets/images/alvarosoler.jpg";
import CaseyLowry from "@/assets/images/CaseyLowry.jpg";
import ConorMaynard from "@/assets/images/ConorMaynard.jpg";
import MitchellTheWailers from "@/assets/images/MitchellTheWailers.jpg";

// fauna
import bij from "@/assets/images/bij.jpg";
import Snake from "@/assets/images/snake.jpg";
import Cat from "@/assets/images/cat.jpg";
import KieferSnow from "@/assets/images/KieferSnow.jpg";
import Kiefertje from "@/assets/images/Kiefertje.jpg";
import squirrel from "@/assets/images/squirrel.jpg";
import monkey from "@/assets/images/monkey.jpg";
import KieferBeach from "@/assets/images/KieferBeach.jpg";
import butterfly from "@/assets/images/butterfly.jpg";
import crocodile from "@/assets/images/crocodile.jpg";

// flora
import IJsland from "@/assets/images/IJsland.jpg";
import NationaalParkPingvellir from "@/assets/images/NationaalParkPingvellir.jpg";
import Tree from "@/assets/images/tree.jpg";
import Tram from "@/assets/images/tram.jpg";

// travel
import oldman from "@/assets/images/old-man.jpg";
import taxi from "@/assets/images/taxi.jpg";
import gardenwoman from "@/assets/images/gardenwoman.jpg";
import JonasWithGuests from "@/assets/images/jonasWithGuests.jpg";
import LucyAndAnusha from "@/assets/images/LucyAndAnusha.jpg";
// cartoon
import mccartney from "@/assets/images/mccartney.jpg";
import AintNoMountain from "@/assets/images/aint-no-mountain.jpg";
import weed from "@/assets/images/weed.jpg";
import RockingTeddiursa from "@/assets/images/rocking-teddiursa.jpg";
import RoelKleur from "@/assets/images/roel-kleur.jpg";
import drawingTMB from "@/assets/images/drawing-tmb.jpg";

// outline
import building from "@/assets/images/building.jpg";
import captainAmerica from "@/assets/images/outline-captain-america.jpg";
import metMees from "@/assets/images/outline-met-mees.jpg";
import KieferSutherlandOutline from "@/assets/images/kiefer-sutherland-outline.jpg";
import KieferTouring from "@/assets/images/KieferTouring.jpg";

// painting
import lp from "@/assets/images/lp.jpg";
import { StaticImageData } from "next/image";

export interface SubCategory {
  slug: string;
  name: string;
  backgroundImage: StaticImageData;
  items: Item[];
}

export interface Item {
  slug: string;
  name: string;
  description?: string;
  image: StaticImageData;
}

const gallerySubCategories: SubCategory[] = [
  {
    slug: "portrait",
    name: "Portrait",
    backgroundImage: portrait,
    items: [
      {
        slug: "self-portrait",
        name: "Self portrait",
        description: "",
        image: portrait,
      },

      {
        slug: "falling",
        name: "Falling for you",
        image: falling,
      },
      {
        slug: "mees",
        name: "Mees",
        image: Mees,
      },
      {
        slug: "alisha",
        name: "Alisha",
        image: Alisha,
      },
      {
        slug: "alisha-ndsm",
        name: "Alisha NDSM werf",
        image: AlishaNDSM,
      },
      {
        slug: "bianca-en-kontiki",
        name: "Bianca & Kontiki",
        image: BiancaEnKontiki,
      },
      {
        slug: "luca",
        name: "Luca",
        image: luca,
      },
      {
        slug: "mom",
        name: "Ingrid",
        image: mom,
      },
    ],
  },
  {
    slug: "concert",
    name: "Concert",
    backgroundImage: kiefer,
    items: [
      {
        slug: "kiefer-sutherland",
        name: "Kiefer Sutherland Tivoli Utrecht",
        description: "",
        image: kiefer,
      },
      {
        slug: "jess-calcaterra",
        name: "Jess Calcaterra Tivoli Utrecht",
        image: JessCalcaterra,
      },
      {
        slug: "kelvin-jones",
        name: "Kelvin Jones Melkweg Amsterdam",
        image: KelvinJones,
      },
      {
        slug: "kelvin-jones-Amsterdam",
        name: "Kelvin Jones Melkweg Amsterdam",
        image: KelvinJonesSing,
      },
      {
        slug: "xander-hubrecht",
        name: "Xander Hubrecht",
        image: XanderHubrecht,
      },
      {
        slug: "kennyb",
        name: "KennyB",
        image: KennyB,
      },
      {
        slug: "van-velzen-en-ralf-pouw",
        name: "van Velzen en Ralf Pouw",
        image: VanVelzenEnRalfPouw,
      },
      {
        slug: "haarlem-jazz",
        name: "van Velzen Haarlem Jazz",
        image: HaarlemJazz,
      },
      {
        slug: "alvaro-soler",
        name: "Alvaro Soler & Fritz ",
        image: Alvarosoler,
      },
      {
        slug: "casey-lowry",
        name: "Casey Lowry",
        image: CaseyLowry,
      },
      {
        slug: "conor-maynard",
        name: "Conor Maynard",
        image: ConorMaynard,
      },
      {
        slug: "mitchell-the-wailers",
        name: "Mitchell the Wailers",
        image: MitchellTheWailers,
      },
    ],
  },
  {
    slug: "fauna",
    name: "Fauna",
    backgroundImage: bij,
    items: [
      {
        slug: "bee",
        name: "Bee on flower",
        image: bij,
      },
      {
        slug: "python-regius",
        name: "Python regius Artis Amsterdam",
        image: Snake,
      },
      {
        slug: "cat",
        name: "Cat",
        description: "Captured on Sony a6400",
        image: Cat,
      },
      {
        slug: "kiefer-snow",
        name: "Kiefer in the snow",
        image: KieferSnow,
      },
      {
        slug: "kiefertje",
        name: "Kiefer",
        image: Kiefertje,
      },
      {
        slug: "squirrel",
        name: "squirrel",
        description: "Captured on Sony a6400",
        image: squirrel,
      },
      {
        slug: "goeldis-monkey",
        name: "Goeldi's monkey",
        description: "Captured on Sony a6400",
        image: monkey,
      },
      {
        slug: "kiefer-beach",
        name: "Kiefer",
        description: "Captured on Sony a6400",
        image: KieferBeach,
      },
      {
        slug: "butterfly",
        name: "Butterfly",
        description: "Captured on Canon 1200D",
        image: butterfly,
      },
      {
        slug: "crocodile",
        name: "Crocodile",
        description: "Captured on Canon 1200D",
        image: crocodile,
      },
    ],
  },
  {
    slug: "flora",
    name: "Flora",
    backgroundImage: IJsland,
    items: [
      {
        slug: "solheimajokull-iceland",
        name: "Sólheimajökull Iceland",
        image: IJsland,
      },
      {
        slug: "national-park-pingvellir-iceland",
        name: "National Park Pingvellir Iceland",
        image: NationaalParkPingvellir,
      },
      {
        slug: "bulgaria-tree",
        name: "Bulgaria",
        image: Tree,
      },
      {
        slug: "tram-amsterdam",
        name: "Amsterdam",
        image: Tram,
      },
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    backgroundImage: oldman,
    items: [
      {
        slug: "bulgaria",
        name: "Bulgarian Citizen",
        image: oldman,
      },
      {
        slug: "bulgarian-taxi",
        name: "Bulgarian taxi driver",
        image: taxi,
      },
      {
        slug: "garden-woman",
        name: "Bulgarian citizen",
        image: gardenwoman,
      },
      {
        slug: "jonas-with-guest",
        name: "Jonas with guests SuneoClub",
        image: JonasWithGuests,
      },
      {
        slug: "lucy-and-anusha",
        name: "Lucy and Anusha performing Abba",
        image: LucyAndAnusha,
      },
    ],
  },
];

const artworkSubCategories: SubCategory[] = [
  {
    slug: "cartoon",
    name: "Cartoon",
    backgroundImage: mccartney,
    items: [
      {
        slug: "paul-mccartney",
        name: "Paul Mccartney on stage",
        image: mccartney,
      },

      {
        slug: "aint-no-mountain",
        name: "Ain't no mountain high enough",
        image: AintNoMountain,
      },
      {
        slug: "weed",
        name: "Weed 420",
        image: weed,
      },
      {
        slug: "rocking-teddiursa",
        name: "Rocking Teddiursa",
        image: RockingTeddiursa,
      },
      {
        slug: "roel-van-velzen",
        name: "Roel van Velzen",
        image: RoelKleur,
      },
      {
        slug: "brandaris-terschelling",
        name: "Brandaris Terschelling",
        image: drawingTMB,
      },
    ],
  },
  {
    slug: "line-art",
    name: "Line Art",
    backgroundImage: building,
    items: [
      {
        slug: "bank-of-england",
        name: "Bank of England ",
        image: building,
      },
      {
        slug: "captain-america",
        name: "Captain America ",
        image: captainAmerica,
      },
      {
        slug: "kiefer-sutherland-outline",
        name: "Kiefer Sutherland ",
        image: KieferSutherlandOutline,
      },
      {
        slug: "with-mees",
        name: "On the boat with Mees",
        image: metMees,
      },
      {
        slug: "kiefer-sutherland-touring",
        name: "Kiefer Sutherland touring Utrecht",
        image: KieferTouring,
      },
    ],
  },
  {
    slug: "painting",
    name: "Painting",
    backgroundImage: lp,
    items: [
      {
        slug: "lp-birds",
        name: "LP painting with birds",
        image: lp,
      },
    ],
  },
];

export const categories = [
  {
    slug: "gallery",
    name: "Gallery",
    subCategories: gallerySubCategories,
  },
  {
    slug: "artwork",
    name: "Artwork",
    subCategories: artworkSubCategories,
  },
];
