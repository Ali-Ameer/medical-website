import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { Page404 } from "./components/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Page404 />,
  }
]);

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};