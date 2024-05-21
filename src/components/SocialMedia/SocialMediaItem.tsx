import React from "react";


interface SocialMediaItemProps {
  to: string,
  children: React.ReactNode
}

function SocialMediaItem({to, children}: SocialMediaItemProps) {
  return (
    <a
      href={to}
      className="p-1.5"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default SocialMediaItem;