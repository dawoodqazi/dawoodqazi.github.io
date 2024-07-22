import { GITHUB_LINK } from "../constants";
import { Projects } from "../types/project";

const PROJECTS: Projects = [
  {
    name: "Library Management System",
    description:
      "Library Management System, Made using PHP language with PhpMyAdmin as database for Structured Query Language.",

    imageUrl: "/projects/project1/",
    urls: {
      repo: GITHUB_LINK + "/lms",
      liveDemo: "#",
    },
  },
  {
    name: "ShopSmart",
    description:
      "ShopSmart is an e-commerce platform that aims to provide users with a seamless shopping experience. Our platform offers a wide range of products from various categories, allowing users to discover their style and shop with ease. Whether you're looking for fashion, electronics, home decor, or any other product, ShopSmart has you covered.",

    imageUrl: "/projects/project2/",
    urls: {
      repo: GITHUB_LINK + "/shopsmart",
      liveDemo: "#",
    },
  },
  {
    name: "KaamKaro",
    description:
      "KaamKaro is a simple React-based Todo web app that allows users to manage tasks. Users can add, update, and delete tasks. The app provides a clean and intuitive interface for managing your to-do list.",

    imageUrl: "/projects/project3/main.png",
    urls: {
      repo: GITHUB_LINK + "/kaamkaro",
      liveDemo: "https://kaamkaro.vercel.app",
    },
  },
  {
    name: "Xolen.pk",
    description:
      "Xolen.pk is a dream footwear store for all the shoe lovers. We have a wide range of shoes for all the occasions. Fluffy sneakers. Cushy slippers. Nights out. Days in. Quick errands. Transcontinental trips. Durable. Comfortable. Planet-friendly. Home or away, we’ve got what you needs to chill the most.",

    imageUrl: "/projects/xolen.pk/main.png",
    urls: {
      repo: "https://www.github.com/xolen-pk/xolen-pk",
      liveDemo: "https://xolen-pk-backend.up.railway.app",
    },
  },
];

export default PROJECTS;
