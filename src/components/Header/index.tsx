import {useEffect, useRef} from "react";
import {HOME_NAV} from "@/constants";
import BurgerMenu from "@/components/Header/components/BurgerMenu";
import DesktopMenu from "@/components/Header/components/DesktopMenu";
import Logo from "@/components/Header/components/Logo.tsx";
import {debounce} from "@/utils/debounce.ts";



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
  const headerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const debouncedHandleScroll = debounce(function handleScroll() {
      if (window.scrollY === 0) {
        headerRef.current?.classList.remove("shadow");
      } else {
        headerRef.current?.classList.add("shadow");
      }
    }, 20)

    window.addEventListener('scroll', debouncedHandleScroll)
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
    }
  }, [])


  return (
    <div
      ref={headerRef}
      className="fixed w-full bg-white/80 backdrop-blur transition-transform duration-200 dark:bg-gray-950/80"
    >
      <div className="container flex items-center justify-between">
        <Logo/>
        <DesktopMenu items={menuItems}/>
        <BurgerMenu items={menuItems}/>
      </div>
    </div>
  );
}

export default Header;