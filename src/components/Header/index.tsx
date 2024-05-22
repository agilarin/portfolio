import {useEffect, useState} from "react";
import {HOME_NAV} from "@/constans.ts";
import BurgerMenu from "@/components/Header/components/BurgerMenu";
import DesktopMenu from "@/components/Header/components/DesktopMenu";
import Logo from "@/components/Header/components/Logo.tsx";


export type MenuItem = {
  to: string,
  name: string
}

const menuItems: MenuItem[] = [
  {to: `#${HOME_NAV.about}`, name: "Обо мне"},
  {to: `#${HOME_NAV.technologies}`, name: "Технологии"},
  {to: `#${HOME_NAV.projects}`, name: "Проекты"},
  {to: `#${HOME_NAV.contacts}`, name: "Контакты"},
]


function Header() {
  const [scrollClasses, setScrollClasses] = useState("")


  useEffect(() => {
    let scrollY = window.scrollY;
    function scrollEvent() {
      if (window.scrollY < 70) {
        setScrollClasses("")
      } else if (scrollY < window.scrollY) {
        setScrollClasses("shadow -translate-y-[--header-height]")
      } else if (scrollY > window.scrollY) {
        setScrollClasses("shadow translate-y-0")
      }
      scrollY = window.scrollY;
    }

    window.addEventListener('scroll', scrollEvent)
    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])


  return (
    <div className={`fixed w-full bg-white/80 backdrop-blur transition-transform duration-200 ${scrollClasses} dark:bg-gray-950/80`}>
      <div className="container py-4 flex items-center justify-between">
        <Logo/>
        <DesktopMenu items={menuItems}/>
        <BurgerMenu items={menuItems}/>
      </div>
    </div>
  );
}

export default Header;