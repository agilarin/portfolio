import Tag from "@components/Tag";
import BlockDescription from "@pages/Home/components/BlockDescription";
import HomeProjectsItem from "@pages/Home/components/HomeProjects/HomeProjectsItem.tsx";


const HomeProjectsItemsProps = [
  {id: "adsd"},
  {id: "qwe"},
]

function HomeProjects() {
  return (
    <div className="py-16 sm:py-24 dark:bg-gray-900">
      <div className="container flex flex-col items-center">
        <Tag className="mb-4">
          Projects
        </Tag>

        <BlockDescription>
          Some of the noteworthy projects I have built:
        </BlockDescription>

        <div className="w-full px-8 space-y-12">
          {HomeProjectsItemsProps.map(({id}) =>
            <HomeProjectsItem key={id}/>
          )}
        </div>

      </div>
    </div>
  );
}

export default HomeProjects;