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
const baseUrl = (window.location.href
    .startsWith(config.BASE_URL) ?
    config.BASE_NAME : "/");


root.render(
    <BrowserRouter>
        <Routes>
            <Route

                path={baseUrl} // 개발서버는 /
                // 깃허브 페이지에서는 /cheat-sheet (레포제목 or BASE_NAME)
                element={< App />} />
        </Routes>

    </BrowserRouter>)