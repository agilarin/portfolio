import React, {useState} from "react";
import {createPortal} from "react-dom";
import {MenuItem} from "@/components/Header";
import MenuButton from "@/components/Header/components/BurgerMenu/MenuButton.tsx";
import BurgerMenuItem from "@/components/Header/components/BurgerMenu/BurgerMenuItem.tsx";
import ThemeSwitch from "@/components/Header/components/ThemeSwitch.tsx";



interface BurgerMenuProps {
  items: MenuItem[]
}

function BurgerMenu({items}: BurgerMenuProps) {
  const [show, setShow] = useState(false);


  function closeMenu(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      setShow(false);
    }
  }


  return (
    <div className="md:hidden">
      <MenuButton show={show} setShow={setShow}/>

      {show && createPortal(
        <div
          className="absolute inset-0 top-[68px] bg-gray-600/10 dark:bg-gray-50/10 md:hidden"
          onClick={closeMenu}
        >
          <div className="w-[320px] h-full ml-auto bg-white dark:bg-gray-900">
            <ul className="py-2 px-4 border-y border-gray-100 dark:border-gray-800">
              {items.map(({to, name}) =>
              <BurgerMenuItem key={name} to={to} name={name}/>
              )}
            </ul>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Сменить тему</span>
              <ThemeSwitch/>
              </div>
            </div>
          </div>
        </div>
        ,
        document.body
      )}
    </div>
  );
}

export default BurgerMenu;