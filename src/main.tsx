import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./routes";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Suspense fallback={null}>
            <Routes />
        </Suspense>
    </StrictMode>,
);
