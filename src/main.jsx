import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./Home.jsx";
import Landing from "./pages/Landing.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import MasterClass from "./pages/MasterClass.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  {
    path: "/masterclassgratis",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/masterclass",
    element: <MasterClass />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/politicadeprivacidad",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/condicionesdeservicio",
    element: <TermsOfService />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
