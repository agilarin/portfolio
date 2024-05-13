import {Link} from "react-router-dom";




interface MenuItemProps {
  to: string,
  value: string
}

function DesktopMenuItem({to, value}: MenuItemProps) {

  return (
    <li className="mr-6">
      <Link
        to={to}
        className="text-gray-600 dark:text-gray-300 font-medium"
      >
        {value}
      </Link>
    </li>
);
}

export default DesktopMenuItem;