import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Home from "@/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
