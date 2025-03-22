import {Link} from "react-router-dom";
import {LINK_PATHS} from "@/constants";


function Logo() {
  return (
    <Link
      className="py-4 text-xl text-gray-900 font-semibold md:text-2xl dark:text-gray-50"
      to={LINK_PATHS.HOME}>
      Vladimir Grishin
    </Link>
  );
}

export default Logo;