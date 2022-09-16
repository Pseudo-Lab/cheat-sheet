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

root.render(
    <BrowserRouter>
        <Routes>
            <Route

                path={config.BASE_NAME}
                element={< App />} />
        </Routes>

    </BrowserRouter>)