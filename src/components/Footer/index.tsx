import IconCopyright from "@/assets/icons/icon-copyright.svg?react";



function Footer() {
  return (
    <div className="py-6 bg-gray-50 dark:bg-gray-950">
      <div className="container flex items-center justify-center">
        <IconCopyright className="mr-2 size-4 stroke-gray-600"/>
        <p className="text-gray-600 text-sm dark:text-gray-300">
          2024 | Coded with by Vladimir Grishin
        </p>
      </div>
    </div>
  );
}

export default Footer;