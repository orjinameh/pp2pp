import React from "react";
import Home from "./home"
import Verify from "./verify"
import Wallet from "./wallet"

const AppRoutes = () => {
    return (
        [
            {
                path: '/',
                element: <Home />,
                id: 1
            },
            {
                path: '/home',
                element: <Verify />,
                id: 2
            },
            {
                path: '/verify',
                element: <Wallet />,
                id: 3
            }
        ]
    );
}

export default AppRoutes;