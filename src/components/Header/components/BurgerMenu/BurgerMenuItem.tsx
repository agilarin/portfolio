import {Link} from "react-router-dom";



interface BurgerMenuItemProps {
  to: string,
  name: string
  onClick: () => void
}

function BurgerMenuItem({to, name, onClick}: BurgerMenuItemProps) {

  return (
    <li>
      <Link
        to={to}
        className="inline-block w-full py-2 text-gray-600 dark:text-gray-300 font-medium"
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
}

export default BurgerMenuItem;