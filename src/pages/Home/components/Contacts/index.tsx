import Chip from "@/components/Chip";
import BlockDescription from "@/pages/Home/components/BlockDescription";
import CopyList from "@/pages/Home/components/Contacts/CopyList";
import SocialMedia from "@/components/SocialMedia";


function Contacts() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container flex flex-col items-center">

        <Chip className="mb-4">
          Как связаться
        </Chip>

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