import Tag from "@components/Tag";
import BlockDescription from "@pages/Home/components/BlockDescription";
import CopyList from "@/pages/Home/components/Contacts/CopyList";
import SocialMedia from "@components/SocialMedia";


function Contacts() {
  return (
    <div className="py-16 sm:py-24 dark:bg-gray-900">
      <div className="container flex flex-col items-center">

        <Tag className="mb-4">
          Get in touch
        </Tag>

        <BlockDescription>
          What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
        </BlockDescription>

        <CopyList/>

        <p className="mb-2 text-gray-600 text-center dark:text-gray-300">
          You may also find me on these platforms!
        </p>
        <SocialMedia/>

      </div>
    </div>
  );
}

export default Contacts;