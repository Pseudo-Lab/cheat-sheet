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

                path="/" // 파이썬용으로 빌드할떄는 
                // config.BASE_NAME 대신 그냥 "/" 기본 디렉토리로 합니다.
                element={< App />} />
        </Routes>

    </BrowserRouter>)