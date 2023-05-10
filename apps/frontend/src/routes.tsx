import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Home } from "./pages/Home";
import { AddProducts } from "./pages/AddProducts";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addProducts",
                element: <AddProducts />,
            },
        ]
    },
]);

