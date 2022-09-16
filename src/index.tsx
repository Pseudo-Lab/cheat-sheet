import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './components/App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import config from './config.json';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route

            path={config.IS_DEVELOPMENT ? "/" : config.BASE_NAME}
            element={< App />} />,
        < Route
            path={config.IS_DEVELOPMENT ? "/:src" : config.BASE_NAME + "/:src"}
            element={< App />} />
    ]),
);


const app = document.getElementById("app")

ReactDOM.render(<RouterProvider router={router} />, app)