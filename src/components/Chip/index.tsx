import React from "react";


interface ChipProps {
  className?: string,
  children?: React.ReactNode,
}

function Chip({children, className}: ChipProps) {
  return (
    <div className={`py-1 px-5 bg-gray-200 rounded-xl dark:bg-gray-700 ${className}`}>
      <p className="text-gray-600 font-medium text-sm dark:text-gray-300">
        {children}
      </p>
    </div>
  );
}

export default Chip;