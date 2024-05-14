import SocialMedia from "@components/SocialMedia";
import IconLocation from "@assets/icons/icon-location.svg?react";


function Intro() {
  return (
    <div className="dark:bg-gray-900">
      <div className="container py-16 sm:py-24">

        <div className="mr-12">
          <h2 className="mb-2 text-gray-900 text-4xl leading-tight font-bold dark:text-gray-50 md:text-6xl">
            Hi, I’m Vladimir 👋
          </h2>
          <p className="mb-12 text-gray-600 dark:text-gray-300">
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
          </p>
          <div className="mb-12 flex items-center">
            <IconLocation className="mr-2 stroke-gray-600 dark:stroke-gray-300"/>
            <span className="text-gray-600 dark:text-gray-300">Россия, Красноярск</span>
          </div>

          <SocialMedia/>
        </div>

        <div>

        </div>

      </div>
    </div>
  );
}

export default Intro;