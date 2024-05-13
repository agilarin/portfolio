import BurgerMenu from "@components/Header/components/BurgerMenu";
import DesktopMenu from "@components/Header/components/DesktopMenu";



function Header() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container py-4 flex justify-end">
        <DesktopMenu/>
        <BurgerMenu/>
      </div>
    </div>
  );
}

export default Header;