import {useEffect} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router.tsx";



function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);


  return (
    <RouterProvider router={router}/>
  )
}

export default App
