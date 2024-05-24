import React from "react";
import  ReactDOM  from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./src/containers/main";

const AppLayout = () => {
    return <div className="app">{
        <>
        <LandingPage />
        <Outlet />
        </>
        }</div>
}

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <h1>Landing Page Not Rendered!!</h1>,
        children: [
            {
                path: '/about',
                element: <h1>About!!</h1>,
                errorElement: <h1>Landing Page Not Rendered!!</h1>
            }
        ]
            
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)
