import { Project } from "@/types";
// import tetrisImg from "@/assets/projects/tetris-640.png";
import bookwormImage from "@/assets/projects/bookworm-640.jpg";
import kinopoiskImage from "@/assets/projects/kinopoisk-640.jpg";
import webchatImage from "@/assets/projects/webchat-640.png";

export const projectsData: Project[] = [
  {
    id: "4",
    name: "WebChat",
    description:
      "WebChat - это веб приложение для общения между пользователями. " +
      "В приложении вы можете найти себе собеседника для общения и создать приватный чат для общения с ним.",
    img: webchatImage,
    tags: ["JavaScript", "TypeScript", "React", "Scss", "Firebase"],
    url: "https://agilarin.github.io/webchat/",
    github: "https://github.com/agilarin/webchat/",
  },
  {
    id: "3",
    name: "BookWorm",
    description:
      "Веб-приложение интернет-магазина книг. " +
      "На нем можно найти интересующие вас книги и добавить их себе в корзину.",
    img: bookwormImage,
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Scss",
      "Material UI",
      "Firebase",
    ],
    url: "https://bookworm-agilarin.netlify.app/",
    github: "https://github.com/agilarin/bookworm-app/",
  },
  {
    id: "2",
    name: "Kinopoisk clone",
    description:
      "Копия веб сайта kinopoisk.ru сделанная с помощью api сервиса kinopoisk.dev. " +
      "Функционал сайта ограничен возможностями api сервиса. " +
      "На сайте доступны списки фильмов, возможность поиска и карточки фильмов.",
    img: kinopoiskImage,
    tags: ["JavaScript", "TypeScript", "React", "Scss"],
    url: "https://agilarin.github.io/kinopoisk-clone/",
    github: "https://github.com/agilarin/kinopoisk-clone/",
  },
  // {
  //   id: "1",
  //   name: "Tetris",
  //   description: "Веб-версия игры Тетрис. В приложении реализован весь стандартный функционал игры.",
  //   img: tetrisImage,
  //   tags: ["JavaScript", "TypeScript", "React", "Scss"],
  //   url: "https://vlagris.github.io/tetris-app/",
  //   github: "https://github.com/vlagris/tetris-app/"
  // }
];
