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
      "Современный веб-мессенджер с поддержкой реального времени для обмена сообщениями между пользователями. " +
      "<br/>" +
      "<br/>" +
      "<ul>" +
      "<li>• Обмен сообщениями в реальном времени</li>" +
      "<li>• Создание и управление чатами</li>" +
      "<li>• Аутентификация с помощью Firebase</li>" +
      "<li>• Поиск пользователей</li>" +
      "<li>• Редактирование данных в аккаунте</li>" +
      "<li>• Адаптивный дизайн</li>" +
      "</ul>",
    img: webchatImage,
    tags: ["JavaScript", "TypeScript", "React", "Scss", "Firebase"],
    url: "https://agilarin.github.io/webchat/",
    github: "https://github.com/agilarin/webchat/",
  },
  {
    id: "3",
    name: "BookWorm",
    description:
      "Интернет-магазин для продажи книг с корзиной покупок. " +
      "<br/>" +
      "<br/>" +
      "<ul>" +
      "<li>• Фильтрация книг по жанрам</li>" +
      "<li>• Корзина покупок на Redux</li>" +
      "<li>• Хранение состояние корзины в localStorage</li>" +
      "<li>• Поиск книг</li>" +
      "<li>• Адаптивный дизайн</li>" +
      "</ul>",
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
      "Копия веб сайта kinopoisk.ru сделанная с помощью api сервиса kinopoisk.dev." +
      "<br/>" +
      "<br/>" +
      "<ul>" +
      "<li>• Детальная информация о фильмах</li>" +
      "<li>• Фильтрация фильмов по  категориям, жанрам и годам</li>" +
      "<li>• Коллекции фильмов</li>" +
      "<li>• Поиск фильмов</li>" +
      "<li>• Адаптивный дизайн</li>" +
      "</ul>",
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
