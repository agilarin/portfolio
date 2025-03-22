import IconDarkMode from "@/assets/icons/icon-dark-mode.svg?react";
import IconLightMode from "@/assets/icons/icon-light-mode.svg?react";



function ThemeSwitch() {

  function handleClick() {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
  }


  return (
    <button className="p-1.5" onClick={handleClick}>
      <IconLightMode className="stroke-gray-600 dark:hidden"/>
      <IconDarkMode className="stroke-gray-300 hidden dark:block"/>
    </button>
  );
}

export default ThemeSwitch;