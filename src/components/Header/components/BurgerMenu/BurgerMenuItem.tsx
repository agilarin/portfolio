import {Link} from "react-router-dom";



interface BurgerMenuItemProps {
  to: string,
  name: string
}

function BurgerMenuItem({to, name}: BurgerMenuItemProps) {

  return (
    <li>
      <Link
        to={to}
        className="inline-block w-full py-2 text-gray-600 dark:text-gray-300 font-medium"
      >
        {name}
      </Link>
    </li>
  );
}

export default BurgerMenuItem;