import Tag from "@components/Tag";
import BlockDescription from "@pages/Home/components/BlockDescription";
import CopyList from "@/pages/Home/components/Contacts/CopyList";
import SocialMedia from "@components/SocialMedia";


function Contacts() {
  return (
    <div className="py-16 sm:py-24 dark:bg-gray-900">
      <div className="container flex flex-col items-center">

        <Tag className="mb-4">
          Как связаться
        </Tag>

        <BlockDescription>
          Это мои контактные данные, через которые со мной можно связаться.
        </BlockDescription>

        <CopyList/>

        <p className="mb-2 text-gray-600 text-center dark:text-gray-300">
          Вы также можете найти меня на этих платформах!
        </p>
        <SocialMedia/>

      </div>
    </div>
  );
}

export default Contacts;