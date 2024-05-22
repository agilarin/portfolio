import CopyListItem from "@/pages/Home/components/Contacts/CopyList/CopyListItem.tsx";
import IconEmail from "@/assets/icons/icon-email.svg?react";


const copyListItemsProps = [
  {value: "grivle@mail.ru", icon: <IconEmail className="size-6 stroke-gray-600 dark:stroke-gray-300"/> },
]

function CopyList() {
  return (
    <ul className="mb-12 space-y-4 flex flex-col items-center">
      {copyListItemsProps.map(({value, icon}) =>
        <CopyListItem
          key={value}
          value={value}
          icon={icon}
        />
      )}
    </ul>
  );
}

export default CopyList;