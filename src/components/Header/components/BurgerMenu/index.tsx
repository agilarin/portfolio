import React, {useEffect, useRef, useState} from "react";
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
  const rootRef = useRef<HTMLDivElement>(null);
  const menuInnerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!show) {
      document.body.className = "";
    } else if (document.body.offsetWidth < window.innerWidth) {
      document.body.className = "pr-[17px] overflow-hidden md:pr-0 md:overflow-auto";
    } else {
      document.body.className = "overflow-hidden md:overflow-auto";
    }
    let frameId: number;
    if (show) {
      rootRef.current?.classList.remove('hidden');
      frameId = requestAnimationFrame(() => {
        menuInnerRef.current?.classList.add('translate-x-0');
        menuInnerRef.current?.classList.remove('translate-x-full');
      })

    } else {
      menuInnerRef.current?.classList.remove('translate-x-0');
      menuInnerRef.current?.classList.add('translate-x-full');

      setTimeout(() => {
        rootRef.current?.classList.add('hidden');
      }, 200);
    }
    return () => cancelAnimationFrame(frameId);
  }, [show]);


  function handleOverlayClick(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      setShow(false);
    }
  }


  function handleItemClick() {
    setShow(false)
  }


  return (
    <div className="md:hidden">
      <MenuButton show={show} setShow={setShow}/>

      {createPortal(
        <div
          ref={rootRef}
          className="fixed inset-0 bg-gray-600/10 dark:bg-gray-50/10 md:hidden hidden"
          onClick={handleOverlayClick}
        >

          <div className="flex w-[320px] h-full ml-auto">
            <div
              ref={menuInnerRef}
              className="flex-auto bg-white dark:bg-gray-950 transition-transform duration-200"
            >
              <div className="flex justify-end items-center px-4 h-[--header-height]">
                <MenuButton show={show} setShow={setShow}/>
              </div>

              <ul className="py-2 px-4 border-y border-gray-100 dark:border-gray-800">
                {items.map(({to, name}) =>
                  <BurgerMenuItem
                    key={name}
                    to={to}
                    name={name}
                    onClick={handleItemClick}
                  />
                )}
              </ul>

              <div className="p-4 flex items-center justify-between">
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