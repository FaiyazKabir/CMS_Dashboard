import React from "react";
import { Route,Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function routes(){
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Routes>
            <Route path="/Dashboard" element=""></Route>
            <Route path="Tasks" element=""></Route>
            <Route path="/Projects" element=""></Route>
            <Route path="/Profile" element=""></Route>
            </Routes>
        )
    )
    return(
        <RouterProvider router={router}/>
    )
}

export default routes;