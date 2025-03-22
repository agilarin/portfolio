import Chip from "@/components/Chip";
import TechnologiesItem from "@/pages/Home/components/Technologies/TechnologiesItem.tsx";
import IconJS from "@/assets/icons/icon-javascript.svg?react";
import IconTS from "@/assets/icons/icon-typescript.svg?react";
import IconReact from "@/assets/icons/icon-react.svg?react";
import IconRedux from "@/assets/icons/icon-redux.svg?react";
import IconSass from "@/assets/icons/icon-sass.svg?react";
import IconTailwind from "@/assets/icons/icon-tailwind.svg?react";
import IconNodejs from "@/assets/icons/icon-nodejs.svg?react";
import IconGit from "@/assets/icons/icon-git.svg?react";
import BlockDescription from "@/pages/Home/components/BlockDescription";



const technologiesItemsProps = [
  { title: "JavaScript", icon: ({className}: {className: string}) => <IconJS className={className}/> },
  { title: "TypeScript", icon: ({className}: {className: string}) =>  <IconTS className={className}/> },
  { title: "React", icon: ({className}: {className: string}) =>  <IconReact className={className}/> },
  { title: "Redux", icon: ({className}: {className: string}) =>  <IconRedux className={className}/> },
  { title: "Node.js", icon: ({className}: {className: string}) =>  <IconNodejs className={className}/> },
  { title: "Sass/Scss", icon: ({className}: {className: string}) =>  <IconSass className={className}/> },
  { title: "Tailwindcss", icon: ({className}: {className: string}) =>  <IconTailwind className={className}/> },
  { title: "Git", icon: ({className}: {className: string}) =>  <IconGit className={className}/> },
]


function Technologies() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container flex flex-col items-center">

        <Chip className="mb-4">
          Технологии
        </Chip>

        <BlockDescription>
          Мои основные инструметы и технологии:
        </BlockDescription>

        <div className="w-full grid gap-y-12 grid-cols-3 sm:grid-cols-5 lg:grid-cols-8">
          {technologiesItemsProps.map(({title, icon}) =>
            <TechnologiesItem
              key={title}
              title={title}
              icon={icon}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default Technologies;