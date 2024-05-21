import React from 'react';
import IconCopy from "@assets/icons/icon-copy.svg?react";


interface CopyListItemProps {
  value: string,
  icon?: React.ReactNode
}


function CopyListItem({value, icon}: CopyListItemProps) {

  async function copyTextToClipboard() {
    await navigator.clipboard.writeText(value)
  }

  return (
    <li className="flex items-center space-x-4 lg:space-x-3">
      <div className="p-1.5">
        {icon}
      </div>

      <span className="text-gray-900 font-bold text-lg sm:text-2xl lg:text-3xl dark:text-gray-50">
        {value}
      </span>

      <button
        className="p-1.5"
        onClick={copyTextToClipboard}
      >
        <IconCopy className="size-6 stroke-gray-600 dark:stroke-gray-300"/>
      </button>
    </li>
  );
}

export default CopyListItem;