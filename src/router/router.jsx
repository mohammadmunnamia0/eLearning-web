import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Course from "../pages/Course";
import Training from "../pages/Trainer";
import Games from "../pages/Games";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import AdmissionForm from "../components/AdmissionForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", 
        element: <Home></Home> },
         {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/training",
        element: <Training></Training>,
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admission",
        element:<AdmissionForm></AdmissionForm>
      },
 
    ],
  },
]);
