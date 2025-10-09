import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import HomeApps from "../Pages/AllApps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installed from "../Pages/Installed";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";
import Loader from "../components/Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        hydrateFallbackElement:<Loader></Loader>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('./appData.json')
            },
            {
                path: "/apps",
                element: <AllApps />
            },
            {
                path: "/installed",
                element: <Installed />
            },
            {
                path:"/app/:id",
                element:<AppDetails/>
            }
        ]
    },

]);
export default router;