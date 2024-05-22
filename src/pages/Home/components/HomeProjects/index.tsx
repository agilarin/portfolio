import Tag from "@/components/Tag";
import BlockDescription from "@/pages/Home/components/BlockDescription";
import ProjectsList from "@/components/ProjectsList";
import {projectsData} from "@/data.ts";



function HomeProjects() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container flex flex-col items-center">
        <Tag className="mb-4">
          Мои проекты
        </Tag>

        <BlockDescription>
          Некоторые из моих проектов:
        </BlockDescription>

        <ProjectsList projects={projectsData}/>
      </div>
    </div>
  );
}

export default HomeProjects;