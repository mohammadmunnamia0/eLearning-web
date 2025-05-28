import { createBrowserRouter } from "react-router-dom";
import AdmissionForm from "../components/AdmissionForm";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import VideoGallery from "../components/Gallery/VideoGallery";
import LoginForm from "../components/LoginForm";
import OurWork from "../components/OurWork";
import Root from "../layout/Root";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Training from "../pages/Trainer";

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
      {
        path: "/photoGallery",
        element: <PhotoGallery></PhotoGallery>,
      },
      {
        path: "/videoGallery",
        element: <VideoGallery></VideoGallery>,
      },
    ],
  },
]);
