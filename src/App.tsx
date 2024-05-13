import {useEffect} from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "@components/Layout";
import Home from "@pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
    {
      index: true,
      element: <Home/>,
    },
    // {
    //   path: "/catalog/:pathName",
    //   element: <Catalog/>,
    // },
  ]
  },
]);


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
