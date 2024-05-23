import {useLocation} from "react-router-dom";
import {useEffect} from "react";


function useScrollToHashElement() {
  const location = useLocation();


  useEffect(() => {
    const hash = location.hash;

    if (!hash) {
      return;
    }
    const hashElement = document.querySelector(hash);

    if (!hashElement) {
      return;
    }
    hashElement.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
    });
  }, [location]);


  return;
}

export default useScrollToHashElement;