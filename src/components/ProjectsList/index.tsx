import {Project} from "@/types.ts";
import ProjectItem from "@components/ProjectsList/ProjectItem.tsx";



interface ProjectsListProps {
  projects: Project[]
}

function ProjectsList({projects}: ProjectsListProps) {
  return (
    <div className="w-full space-y-12 lg:px-8">
      {projects.map((project) =>
        <ProjectItem
          key={project.id}
          project={project}
        />
      )}
    </div>
  );
}

export default ProjectsList;