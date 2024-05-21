import React from "react";



interface BlockDescriptionProps {
  children?: React.ReactNode
}

function BlockDescription({children}: BlockDescriptionProps) {
  return (
    <p className="mb-6 max-w-xl text-gray-600 text-lg text-center dark:text-gray-300 sm:mb-12 lg:text-xl">
      {children}
    </p>
  );
}

export default BlockDescription;