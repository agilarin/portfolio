import DesktopMenuItem from "@components/Header/components/DesktopMenu/DesktopMenuItem.tsx";
import ThemeSwitch from "@components/Header/components/ThemeSwitch.tsx";



const menuItemsProps = [
  {to: "", value: "About"},
  {to: "", value: "Projects"},
]

function DesktopMenu() {
  return (
    <div className="hidden items-center sm:flex">
      <ul className="flex items-center">
        {menuItemsProps.map(({to, value}) =>
          <DesktopMenuItem key={value} to={to} value={value}/>
        )}
      </ul>
      <div className="w-[1px] h-6 mr-6 bg-gray-100 dark:bg-gray-800"/>
      <ThemeSwitch/>
    </div>

  )
    ;
}

export default DesktopMenu;