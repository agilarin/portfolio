import DesktopMenuItem from "@components/Header/components/DesktopMenu/DesktopMenuItem.tsx";
import ThemeSwitch from "@components/Header/components/ThemeSwitch.tsx";
import {MenuItem} from "@components/Header";



interface DesktopMenuProps {
  items: MenuItem[]
}

function DesktopMenu({items}: DesktopMenuProps) {
  return (
    <div className="hidden items-center sm:flex">
      <ul className="flex items-center">
        {items.map(({to, name}) =>
          <DesktopMenuItem key={name} to={to} name={name}/>
        )}
      </ul>
      <div className="w-[1px] h-6 mr-6 bg-gray-100 dark:bg-gray-800"/>
      <ThemeSwitch/>
    </div>

  )
    ;
}

export default DesktopMenu;