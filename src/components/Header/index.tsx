import {PATHS} from "@/constans.ts";
import BurgerMenu from "@components/Header/components/BurgerMenu";
import DesktopMenu from "@components/Header/components/DesktopMenu";
import Logo from "@components/Header/components/Logo.tsx";


export type MenuItem = {
  to: string,
  name: string
}


const menuItems: MenuItem[] = [
  {to: PATHS.home, name: "Обо мне"},
  {to: PATHS.projects, name: "Проекты"},
]


function Header() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container py-4 flex items-center justify-between">
        <Logo/>
        <DesktopMenu items={menuItems}/>
        <BurgerMenu items={menuItems}/>
      </div>
    </div>
  );
}

export default Header;