import {
  GITHUB_LINK,
  GMAIL_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "../constants";
import { Sociel } from "../types/sociel";

const SOCIELS: Sociel[] = [
  {
    name: "github",
    imagePath: "/skills/github.svg",
    text: "AmmarSAA",
    href: GITHUB_LINK,
  },
  {
    name: "email",
    imagePath: "/svg/mail.svg",
    text: GMAIL_LINK,
    href: "mailto:" + GMAIL_LINK,
  },
  {
    name: "linkedin",
    imagePath: "/svg/linkedin.svg",
    text: "AmmarSAA",
    href: LINKEDIN_LINK,
  },
  // {
  //   name: "instagram",
  //   imagePath: "/svg/instagram.svg",
  //   text: "Syed Ammar Ahmed",
  //   href: INSTAGRAM_LINK,
  // },
];

export default SOCIELS;
