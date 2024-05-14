import React from "react";


interface TechnologiesItemProps {
  icon: ({className}: {className: string}) => React.ReactNode,
  title: string
}

function TechnologiesItem({icon, title}: TechnologiesItemProps) {
  return (
    <div className="flex flex-col items-center">
        {icon({className: "h-16"})}
      <p className="text-gray-600 text-lg dark:text-gray-300">
        {title}
      </p>
    </div>
  );
}

export default TechnologiesItem;