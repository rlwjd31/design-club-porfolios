import { RouteObject, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Fortune from "./pages/Fortune";
import Layout from "./componenets/Layout";

const routers: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/fortune/:fortuneId", element: <Fortune /> },
];

const browserRouter = createBrowserRouter(
  routers.map((r) => ({ ...r, element: <Layout>{r.element}</Layout> }))
);

export default browserRouter;
