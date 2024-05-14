import React from 'react';
import IconCopy from "@assets/icons/icon-copy.svg?react";


interface CopyListItemProps {
  value: string,
  icon?: React.ReactNode
}

function CopyListItem({value, icon}: CopyListItemProps) {

  function copyTextToClipboard() {
    navigator.clipboard.writeText(value).then(() => {
    })
      .catch(err => {
        console.log('Something went wrong', err);
      });
  }

  return (
    <li className="flex items-center">
      {icon && <div className="mr-5">
        {icon}
      </div>}

      <span className="mr-5 text-gray-900 font-bold text-4xl dark:text-gray-50">
        {value}
      </span>

      <button
        className="p-1.5"
        onClick={copyTextToClipboard}
      >
        <IconCopy className="size-8 stroke-gray-600 dark:stroke-gray-300"/>
      </button>
    </li>
  );
}

export default CopyListItem;