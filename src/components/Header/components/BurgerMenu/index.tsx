import React, {useState} from "react";
import {createPortal} from "react-dom";
import MenuButton from "@components/Header/components/BurgerMenu/MenuButton.tsx";
import BurgerMenuItem from "@components/Header/components/BurgerMenu/BurgerMenuItem.tsx";
import ThemeSwitch from "@components/Header/components/ThemeSwitch.tsx";



const menuItemsProps = [
  {to: "", value: "About"},
  {to: "", value: "Projects"},
]

function BurgerMenu() {
  const [show, setShow] = useState(false);


  function closeMenu(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      setShow(false);
    }
  }


  return (
    <div className="sm:hidden">
      <MenuButton show={show} setShow={setShow}/>

      {show && createPortal(
        <div
          className="absolute inset-0 top-[68px] bg-gray-600/10 dark:bg-gray-50/10"
          onClick={closeMenu}
        >
          <div className="w-[320px] h-full ml-auto bg-white dark:bg-gray-900">
            <ul className="py-2 px-4 border-y border-gray-100 dark:border-gray-800">
              {menuItemsProps.map(({to, value}) =>
              <BurgerMenuItem key={value} to={to} value={value}/>
              )}
            </ul>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Switch Theme</span>
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