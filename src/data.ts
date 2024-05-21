import {Project} from "@/types.ts";
import tetrisImg from "@assets/projects/tetris-1.jpg";



export const projectsData : Project[] = [
  {
    id: "1",
    name: "GreenBook - Web Store",
    description: "Веб приложение интернет магазина книг.",
    img: "",
    tags: ["JavaScript", "TypeScript", "React", "Redux", "Scss", "Jest"],
    url: "",
    github: ""
  },
  {
    id: "2",
    name: "Tetris",
    description: "Веб-версия игры Тетрис. В приложении реализован весь стандартный функционал игры.",
    img: tetrisImg,
    tags: ["JavaScript", "TypeScript", "React", "Scss"],
    url: "https://vlagris.github.io/tetris-app/",
    github: "https://github.com/vlagris/tetris-app"
  }
]