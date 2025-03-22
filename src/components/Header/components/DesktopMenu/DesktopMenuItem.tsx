import {Link} from "react-router-dom";



interface MenuItemProps {
  to: string,
  name: string
}

function DesktopMenuItem({to, name}: MenuItemProps) {

  return (
    <li className="flex mr-6">
      <Link
        to={to}
        className="py-1.5 text-gray-600 dark:text-gray-300 font-medium"
      >
        {name}
      </Link>
    </li>
);
}

export default DesktopMenuItem;