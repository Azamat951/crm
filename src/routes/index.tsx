import AuthLayout from "@/features/auth/layout/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegesterPage";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Home from "@/features/home/Home"
import Members from "@/features/members";
import MainLayout from "@/layouts/MainLayout"

const router = createBrowserRouter(
    [
        {
            element: <AuthLayout />,
            children: [
                {
                    path: "/login",
                    element: <LoginPage />,
                },
                {
                    path: "/register",
                    element: <RegisterPage />,
                },
            ],
        },

        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> }, // default page
                { path: "members", element: <Members /> },
                //{ path: "products", element: <Products /> },
                //{ path: "payment", element: <Payment /> },
            ],
        },

        { path: "*", element: <Navigate to='/' replace /> },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    },
);

export function Routes() {
    return <RouterProvider router={router} />;
}
