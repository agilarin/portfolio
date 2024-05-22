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
  return (
    <div className="dark:bg-gray-950">
      <div className="container py-4 flex items-center justify-between">
        <Logo/>
        <DesktopMenu items={menuItems}/>
        <BurgerMenu items={menuItems}/>
      </div>
    </div>
  );
}

export default Header;