import {Link} from "react-router-dom";
import Tag from "@components/Tag";
import IconLink from "@assets/icons/icon-external-link.svg?react";



const ads = ["React", "Redux", "TypeScript", "Ads", "QWE", "VBDS", "DSFGEWWE", "dfgerge", "vcberbdfb"]


interface HomeProjectItemProps {
  title?: string
}

function HomeProjectsItem({title}: HomeProjectItemProps) {
  return (
    <div className="flex ">
      <div className="w-2/4 p-12 bg-gray-50 dark:bg-gray-700">

      </div>

      <div className="w-2/4 p-12 space-y-6">
        <h4 className="text-gray-900 font-semibold text-xl dark:text-gray-50">
          Fiskil
          {title}
        </h4>
        
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
        </p>

        <div className="flex flex-wrap gap-2">
          {ads.map(item =>
            <Tag key={item}>
              {item}
            </Tag>
          )}
        </div>

        <Link
          className="inline-block p-1.5"
          to="#"
        >
          <IconLink className="size-6 stroke-gray-600 dark:stroke-gray-300"/>
        </Link>
      </div>

    </div>
  );
}

export default HomeProjectsItem;