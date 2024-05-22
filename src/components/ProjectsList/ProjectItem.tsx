import {Link} from "react-router-dom";
import {Project} from "@/types.ts";
import Tag from "@/components/Tag";
import IconLink from "@/assets/icons/icon-external-link.svg?react";
import IconGithub from "@/assets/icons/icon-github.svg?react";



interface ProjectItemProps {
  project: Project
}

function ProjectItem({project}: ProjectItemProps) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden lg:flex dark:shadow-2xl even:flex-row-reverse">

      <div className="w-full p-8 space-y-6 dark:bg-gray-800 lg:p-12">
        <h3 className="text-gray-900 font-semibold text-xl dark:text-gray-50">
          {project.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag =>
            <Tag key={tag}>
              {tag}
            </Tag>
          )}
        </div>

        <div className="flex items-center">
          {project.github &&
            <Link
              className="p-1.5"
              to={project.github}
            >
              <IconGithub className="size-6 fill-gray-600 dark:fill-gray-300"/>
            </Link>
          }

          {project.url &&
            <Link
              className="p-1.5"
              to={project.url}
            >
              <IconLink className="size-6 stroke-gray-600 dark:stroke-gray-300"/>
            </Link>
          }
        </div>
      </div>

      <div className="w-full p-8 bg-gray-50 dark:bg-gray-700">
        <img
          className="w-full rounded-xl"
          src={project.img}
          alt="Превью проекта"
        />
      </div>

    </div>
  );
}

export default ProjectItem;