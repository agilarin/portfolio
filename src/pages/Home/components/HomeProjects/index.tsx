import Chip from "@/components/Chip";
import BlockDescription from "@/pages/Home/components/BlockDescription";
import ProjectsList from "@/components/ProjectsList";
import {projectsData} from "@/data";



function HomeProjects() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container flex flex-col items-center">
        <Chip className="mb-4">
          Мои проекты
        </Chip>

        <BlockDescription>
          Некоторые из моих проектов:
        </BlockDescription>

        <ProjectsList projects={projectsData}/>
      </div>
    </div>
  );
}

export default HomeProjects;