import AuthLayout from "@/features/auth/layout/AuthLayout";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegesterPage from "@/features/auth/pages/RegesterPage";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

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
                    path: "/regester",
                    element: <RegesterPage />,
                },
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
