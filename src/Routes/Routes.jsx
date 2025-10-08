import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import HomeApps from "../Pages/HomeApps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installed from "../Pages/Installed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/apps",
                element: <HomeApps />
            },
            {
                path: "/installed",
                element: <Installed />
            },
        ]
    },

]);
export default router;