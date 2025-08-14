import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROOT } from "./router/router.jsx";
import "./index.css";

const router = createBrowserRouter(ROOT);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
