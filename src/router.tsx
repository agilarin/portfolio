import {createBrowserRouter, createHashRouter, RouteObject} from "react-router-dom";
import {ROUTER_PATHS} from "@/constants";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Archive from "@/pages/Archive";



const routes: RouteObject[] = [
  {
    path: ROUTER_PATHS.HOME,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: ROUTER_PATHS.ARCHIVE,
        element: <Archive/>,
      },
    ]
  },
]



export const router = import.meta.env.DEV ? createBrowserRouter(routes) : createHashRouter(routes);