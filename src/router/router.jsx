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
import LoginForm from "../components/LoginForm";
import OurWork from "../components/OurWork";
import PhotoGallery from "../components/PhotoGAllery";
import VideoGallery from "../components/VideoGAllery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
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
        path: "/photosGallery",
        element: <PhotoGallery></PhotoGallery>,
      },
      {
        path: "/VideoGallery",
        element: <VideoGallery></VideoGallery>
      },
      {
        path: "/photosGallery",
        element: <OurWork></OurWork>,
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
        element: <AdmissionForm></AdmissionForm>,
      },
    ],
  },
]);
