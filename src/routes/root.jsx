import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error";

// pages
import HomePage from "@/pages/home"
import PlayersPage from "@/pages/players"


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [{
            path: "home",
            index: true,
        }]
    },
    {
        path: "/home",
        index: true,
    },
    {
        path: "/players",
        element: <PlayersPage />
    },
    {
        path: "/teams",
        element: <div>This is team path</div>
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    }
]);

export default router;