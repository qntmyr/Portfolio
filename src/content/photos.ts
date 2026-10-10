import type { StaticImageData } from "next/image";

import boulderGym from "@/assets/photos/boulder-gym.jpg";
import climbMountain from "@/assets/photos/climb-mountain.jpg";
import climbRock from "@/assets/photos/climb-rock.jpg";
import czechJersey from "@/assets/photos/czech-jersey.jpg";
import elephant from "@/assets/photos/elephant.jpg";
import juggling from "@/assets/photos/juggling.jpg";
import kyotoJump from "@/assets/photos/kyoto-jump.jpg";
import raceMedal from "@/assets/photos/race-medal.jpg";
import raceRun from "@/assets/photos/race-run.jpg";
import seoulCertificate from "@/assets/photos/seoul-certificate.jpg";
import sunset from "@/assets/photos/sunset.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** CSS object-position, used to crop the photo inside its frame. */
  focus?: string;
};

export const photos = {
  sunset: { src: sunset, alt: "Quentin by the sea at sunset", focus: "50% 60%" },
  czechJersey: { src: czechJersey, alt: "Quentin in a Czech football jersey, out for a run", focus: "50% 55%" },
  elephant: { src: elephant, alt: "Quentin taking a selfie with an elephant", focus: "60% 50%" },
  raceMedal: { src: raceMedal, alt: "Quentin with his finisher medal after a half-marathon", focus: "50% 32%" },
  raceRun: { src: raceRun, alt: "Quentin running during a half-marathon", focus: "50% 35%" },
  boulderGym: { src: boulderGym, alt: "Quentin on a bouldering wall", focus: "50% 38%" },
  climbRock: { src: climbRock, alt: "Quentin lead climbing on a granite crag", focus: "55% 25%" },
  climbMountain: { src: climbMountain, alt: "Quentin roped up on a mountain route", focus: "50% 50%" },
  juggling: { src: juggling, alt: "Quentin juggling on a mountain trail above the clouds", focus: "50% 42%" },
  seoulCertificate: { src: seoulCertificate, alt: "Quentin holding a certificate in a university auditorium", focus: "50% 40%" },
  kyotoJump: { src: kyotoJump, alt: "Quentin jumping under the torii gates of Fushimi Inari", focus: "50% 40%" },
} satisfies Record<string, Photo>;
