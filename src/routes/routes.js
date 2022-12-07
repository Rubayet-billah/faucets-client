import { createBrowserRouter } from "react-router-dom";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Homepage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MainLayout from "../layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
        ]
    }
])

export default router;