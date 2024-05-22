


interface MenuItemProps {
  to: string,
  name: string
}

function DesktopMenuItem({to, name}: MenuItemProps) {

  return (
    <li className="mr-6">
      <a
        href={to}
        className="text-gray-600 dark:text-gray-300 font-medium"
      >
        {name}
      </a>
    </li>
);
}

export default DesktopMenuItem;