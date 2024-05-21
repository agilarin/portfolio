import {Link} from "react-router-dom";
import {PATHS} from "@/constans.ts";


function Logo() {
  return (
    <Link
      className="text-xl text-gray-900 font-semibold md:text-2xl dark:text-gray-50"
      to={PATHS.home}>
      Vladimir Grishin
    </Link>
  );
}

export default Logo;