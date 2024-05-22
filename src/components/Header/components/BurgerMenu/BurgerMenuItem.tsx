


interface BurgerMenuItemProps {
  to: string,
  name: string
}

function BurgerMenuItem({to, name}: BurgerMenuItemProps) {

  return (
    <li>
      <a
        href={to}
        className="inline-block w-full py-2 text-gray-600 dark:text-gray-300 font-medium"
      >
        {name}
      </a>
    </li>
  );
}

export default BurgerMenuItem;