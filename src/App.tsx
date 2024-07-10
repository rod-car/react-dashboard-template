import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root.tsx";
import { Index } from "./pages/Index.tsx";
import { Login } from "./pages/auth/Login.tsx";
import { Signup } from "./pages/auth/Signup.tsx";
import { ResetPassword } from "./pages/auth/ResetPassword.tsx";
import { Notifications } from "./pages/Notifications.tsx";
import { Account } from "./pages/auth/Account.tsx";
import { Help } from "./pages/Help.tsx";
import { Settings } from "./pages/auth/Settings.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Index />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: '/settings',
                element: <Settings />
            },
            {
                path: '/account',
                element: <Account />
            }
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Signup />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    }
])

export default function App() {
    return <RouterProvider router={router} />
}

