import {Project} from "@/types";
import tetrisImg from "@/assets/projects/tetris-640.png";
import greenbookImg from "@/assets/projects/greenbook-640.png";
import kinopoiskImg from "@/assets/projects/kinopoisk-640.jpg";
import webchatImg from "@/assets/projects/webchat-640.png";



export const projectsData : Project[] = [
  {
    id: "4",
    name: "WebChat",
    description: "WebChat - это веб приложение для общения между пользователями. Для использования приложения нужно зарегистрироваться. В приложении доступен поиск с помощью которого можно найти других пользователей для общения. Так же есть возможность редактировать свой аккаунт.",
    img: webchatImg,
    tags: ["JavaScript", "TypeScript", "React", "Scss", "Firebase"],
    url: "https://vlagris.github.io/webchat/",
    github: "https://github.com/vlagris/webchat/"
  },
  {
    id: "3",
    name: "Kinopoisk",
    description: "Копия веб сайта kinopoisk.ru сделанная с помощью api сервиса kinopoisk.dev. Функционал сайта ограничен возможностями api сервиса.",
    img: kinopoiskImg,
    tags: ["JavaScript", "TypeScript", "React", "Scss"],
    url: "https://vlagris.github.io/kinopoisk-app/",
    github: "https://github.com/vlagris/kinopoisk-app/"
  },
  {
    id: "2",
    name: "GreenBook - Web Store",
    description: "Веб-приложение интернет-магазина книг. В приложении имеется возможность создавать учетную запись, фильтровать и сортировать книги, а также добавлять их в свою корзину.",
    img: greenbookImg,
    tags: ["JavaScript", "TypeScript", "React", "Redux", "Scss"],
    url: "https://vlagris.github.io/greenbook-web-store/",
    github: "https://github.com/vlagris/greenbook-web-store/"
  },
  {
    id: "1",
    name: "Tetris",
    description: "Веб-версия игры Тетрис. В приложении реализован весь стандартный функционал игры.",
    img: tetrisImg,
    tags: ["JavaScript", "TypeScript", "React", "Scss"],
    url: "https://vlagris.github.io/tetris-app/",
    github: "https://github.com/vlagris/tetris-app/"
  }
]