import { createRoot } from 'react-dom/client';
import React from 'react';
import { App } from './components/App';
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";
import config from './config.json';



const app: HTMLElement = document.getElementById("app") as HTMLElement

const root = createRoot(app);
// const baseUrl = (window.location.href
//     .startsWith(config.BASE_URL) ?
//     config.BASE_NAME : "/");


root.render(
    <BrowserRouter>
        <Routes>
            <Route
                path="/:_"
                element={< App />} />
            <Route
                path="/"
                element={< App />} />
        </Routes>

    </BrowserRouter>)