import {Link} from "react-router-dom";


interface BurgerMenuItemProps {
  to: string,
  value: string
}

function BurgerMenuItem({to, value}: BurgerMenuItemProps) {

  return (
    <li>
      <Link
        to={to}
        className="inline-block w-full py-2 text-gray-600 dark:text-gray-300 font-medium"
      >
        {value}
      </Link>
    </li>
  );
}

export default BurgerMenuItem;