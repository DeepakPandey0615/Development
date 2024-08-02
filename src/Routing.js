import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginSignUp from "./components/LoginSignUp";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/Login",
    element: <LoginSignUp />,
  },
]);
