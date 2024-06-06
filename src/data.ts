import {Project} from "@/types.ts";
import tetrisImg from "@/assets/projects/tetris-640.png";
import greenbookImg from "@/assets/projects/greenbook-640.png";



export const projectsData : Project[] = [
  {
    id: "1",
    name: "GreenBook - Web Store",
    description: "Веб-приложение интернет-магазина книг. В приложении имеется возможность создавать учетную запись, фильтровать и сортировать книги, а также добавлять их в свою корзину.",
    img: greenbookImg,
    tags: ["JavaScript", "TypeScript", "React", "Redux", "Scss", "Jest"],
    url: "https://vlagris.github.io/greenbook-web-store/",
    github: "https://github.com/vlagris/greenbook-web-store"
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