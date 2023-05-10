import React from "react";

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}
