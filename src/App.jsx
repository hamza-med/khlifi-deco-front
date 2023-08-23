import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Home from "@/pages/Home";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
