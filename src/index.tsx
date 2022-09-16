import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './components/App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import { BASE_NAME, IS_DEVELOPMENT } from './config';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path={`${IS_DEVELOPMENT ? "" : BASE_NAME}/`} element={< App />} />,
        < Route path={`${IS_DEVELOPMENT ? "" : BASE_NAME}/:src`} element={< App />} />
    ]),
);


const app = document.getElementById("app")

ReactDOM.render(<RouterProvider router={router} />, app)