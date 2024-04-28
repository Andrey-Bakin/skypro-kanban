import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user.jsx";
import { TaskProvider } from "./contexts/task.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <TaskProvider >
          <App />
        </TaskProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
