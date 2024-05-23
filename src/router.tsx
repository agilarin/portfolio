import {createHashRouter} from "react-router-dom";
import {PATHS} from "@/constans.ts";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Archive from "@/pages/Archive";



export const router = createHashRouter([
  {
    path: PATHS.home,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: PATHS.archive,
        element: <Archive/>,
      },
    ]
  },
]);