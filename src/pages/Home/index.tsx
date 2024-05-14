import Intro from "@pages/Home/components/Intro";
import Technologies from "@pages/Home/components/Technologies";
import Contacts from "@pages/Home/components/Contacts";
import HomeProjects from "@pages/Home/components/HomeProjects";


function Home() {
  return (
    <>
      <Intro/>
      <Technologies/>
      <HomeProjects/>
      <Contacts/>
    </>
  );
}

export default Home;