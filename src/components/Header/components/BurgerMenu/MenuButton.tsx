import React from "react";
import IconMenu from "@/assets/icons/icon-menu.svg?react";
import IconClose from "@/assets/icons/icon-close.svg?react";



interface MenuButtonProps {
  show: boolean,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuButton({show, setShow}: MenuButtonProps) {
  function handleClick() {
    setShow(prev => !prev)
  }


  return (
    <button
      className="p-1.5"
      onClick={handleClick}
    >
      {show ?
        <IconClose className="stroke-gray-600 dark:stroke-gray-300"/>
        :
        <IconMenu className="stroke-gray-600 dark:stroke-gray-300"/>
      }
    </button>
  );
}

export default MenuButton;