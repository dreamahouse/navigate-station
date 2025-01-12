import { createHashRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createHashRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    }
])
export default router