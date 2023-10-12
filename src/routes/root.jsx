import { createBrowserRouter } from "react-router-dom";

// - layouts
import RootLayout from "@/layouts/root-layout";

// - pages
import HomePage from "@/pages/home"
import PlayersPage from "@/pages/players"
import PlayerPage from '@/pages/player'
import TeamsPage from "@/pages/teams";
import TeamPage from "@/pages/team";
import NotFoundPage from "@/pages/not-found";
import ErrorPage from '@/pages/error'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "players",
                element: <PlayersPage />,
                children: [{
                    path: ":player",
                    element: <PlayerPage />,
                }]
            },
            {
                path: "teams",
                element: <TeamsPage />
            },
            {
                path: ":team",
                element: <TeamPage />,
            },

        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    },

]);

export default router;