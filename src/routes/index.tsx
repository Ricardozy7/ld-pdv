import Layout from "layout";
import Home from "pages/Home";
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        element: <Layout />,
        path: "",
        children: [
            {
                element: <Home />,
                path: "/",
            }
        ]
    },
]);

export default router;