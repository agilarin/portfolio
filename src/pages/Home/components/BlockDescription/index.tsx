import React from "react";



interface BlockDescriptionProps {
  children?: React.ReactNode
}

function BlockDescription({children}: BlockDescriptionProps) {
  return (
    <p className="mb-6 max-w-xl text-gray-600 text-xl text-center dark:text-gray-300 sm:mb-12">
      {children}
    </p>
  );
}

export default BlockDescription;