import SocialMedia from "@/components/SocialMedia";
import IconLocation from "@/assets/icons/icon-location.svg?react";



function Intro() {
  return (
    <div className="pt-32 pb-16 sm:pb-24 sm:pt-40">
      <div className="container">

        <div className="mr-12">
          <h1 className="mb-3 text-4xl text-gray-900 leading-tight font-bold md:text-5xl dark:text-gray-50">
            Владимир Гришин
          </h1>
          <h2 className="mb-4 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-50">
            Junior Frontend Разработчик
          </h2>
          <p className="mb-12 text-gray-600 dark:text-gray-300">
            I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
          </p>
          <div className="mb-12 flex items-center">
            <IconLocation className="mr-2 stroke-gray-600 dark:stroke-gray-300"/>
            <span className="text-gray-600 dark:text-gray-300">Россия, Красноярский край, Канск</span>
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