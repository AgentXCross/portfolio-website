/*
main.tsx 

Entry point. Locates the #root div and tells React to render the App
component into it. Imports index.css for global styles. 
*/

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";


const root = document.getElementById("root")!;

createRoot(root).render(<App />);
