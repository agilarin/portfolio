import {createBrowserRouter} from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
    ]
  },
],
  {
    basename: "/portfolio/"
  });