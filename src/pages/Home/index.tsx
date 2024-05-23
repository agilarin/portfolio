import Intro from "@/pages/Home/components/Intro";
import Technologies from "@/pages/Home/components/Technologies";
import Contacts from "@/pages/Home/components/Contacts";
import HomeProjects from "@/pages/Home/components/HomeProjects";
import {HOME_NAV} from "@/constans.ts";
import useScrollToHashElement from "@/hooks/useScrollToHashElement.ts";


function Home() {
  useScrollToHashElement()


  return (
    <>
      <section
        className="odd:bg-gray-50 dark:bg-gray-950 dark:odd:bg-gray-900"
        id={HOME_NAV.about}
      >
        <Intro/>
      </section>
      <section
        className="odd:bg-gray-50 dark:bg-gray-950 dark:odd:bg-gray-900"
        id={HOME_NAV.technologies}
      >
        <Technologies/>
      </section>
      <section
        className="odd:bg-gray-50 dark:bg-gray-950 dark:odd:bg-gray-900"
        id={HOME_NAV.projects}
      >
        <HomeProjects/>
      </section>
      <section
        className="odd:bg-gray-50 dark:bg-gray-950 dark:odd:bg-gray-900"
        id={HOME_NAV.contacts}
      >
        <Contacts/>
      </section>
    </>
  );
}

export default Home;